import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawn} from 'node:child_process';
import {fileURLToPath,pathToFileURL} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url)), out=path.join(dir,'evidencias','profesional');fs.mkdirSync(out,{recursive:true});
const html=path.join(dir,'cowsmo-business-model-canvas.html'), profile=fs.mkdtempSync(path.join(os.tmpdir(),'cowsmo-browser-'));
const browser=process.env.ARCHIFY_CHROME||'C:/Program Files/Google/Chrome/Application/chrome.exe';
const proc=spawn(browser,['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore',windowsHide:true});
let socket;const pending=new Map();let seq=0;const errors=[],remote=[],checks=[];
const pause=ms=>new Promise(r=>setTimeout(r,ms));
const assert=(name,ok,detail)=>{checks.push({name,ok,detail});if(!ok)throw Error(name+': '+JSON.stringify(detail))};
try{
  proc.on('error',e=>errors.push(e.message));
  const portFile=path.join(profile,'DevToolsActivePort');for(let i=0;i<100&&!fs.existsSync(portFile);i++)await pause(100);if(!fs.existsSync(portFile))throw Error('Chrome no inició: '+errors.join(';'));
  const port=fs.readFileSync(portFile,'utf8').split('\n')[0];const targets=await (await fetch('http://127.0.0.1:'+port+'/json')).json();
  socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);await new Promise((resolve,reject)=>{socket.addEventListener('open',resolve,{once:true});socket.addEventListener('error',reject,{once:true})});
  socket.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result)}}else if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);else if(m.method==='Network.requestWillBeSent'&&/^https?:/.test(m.params.request.url))remote.push(m.params.request.url)});
  const cdp=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
  const evaluate=async expression=>{const r=await cdp('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(JSON.stringify(r.exceptionDetails));return r.result.value};
  await cdp('Page.enable');await cdp('Runtime.enable');await cdp('Network.enable');await cdp('Page.navigate',{url:pathToFileURL(html).href});
  for(let i=0;i<60;i++){if(await evaluate('document.readyState === "complete" && !!document.querySelector(".card")'))break;await pause(100)}
  assert('Nueve bloques',await evaluate('document.querySelectorAll(".card").length===9'));
  assert('Un SVG decorativo uniforme por título',await evaluate('[...document.querySelectorAll(".card")].every(e=>{const a=e.querySelectorAll("h2 svg");return a.length===1&&a[0].getAttribute("aria-hidden")==="true"&&a[0].getAttribute("viewBox")==="0 0 24 24"&&a[0].getAttribute("stroke-width")==="1.7"})'));
  assert('Logo cargado y proporcional',await evaluate('(()=>{const i=document.querySelector(".logo"),r=i.getBoundingClientRect();return i.complete&&i.naturalWidth>0&&Math.abs(r.width/r.height-i.naturalWidth/i.naturalHeight)<0.01})()'));
  const links=await evaluate('[...document.querySelectorAll("a[href],img[src]")].map(e=>e.href||e.src)');assert('Rutas locales existentes',links.every(u=>u.startsWith('file:')&&fs.existsSync(fileURLToPath(u))),links);
  const screenshot=async(name,full=false)=>{const clip=full?{x:0,y:0,width:1440,height:await evaluate('document.querySelector(".canvas").getBoundingClientRect().bottom+scrollY+32'),scale:1}:undefined;const r=await cdp('Page.captureScreenshot',{format:'png',captureBeyondViewport:full,...(clip?{clip}:{})});fs.writeFileSync(path.join(out,name),Buffer.from(r.data,'base64'))};
  for(const [width,height] of [[1440,900],[1600,1000],[1920,1080],[2048,1320],[390,844],[320,740]]){
    await cdp('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:width<500});await pause(100);
    const measure=await evaluate('({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,overlaps:(()=>{const a=[...document.querySelectorAll(".card")].map(e=>e.getBoundingClientRect());return a.some((r,i)=>a.some((s,j)=>j>i&&r.left<s.right-1&&r.right>s.left+1&&r.top<s.bottom-1&&r.bottom>s.top+1))})(),clipped:[...document.querySelectorAll(".card, .card h2, .card li, .panel, .legend p")].filter(e=>e.scrollWidth>e.clientWidth+1).map(e=>e.textContent.slice(0,80))})');
    assert('Contención y tarjetas '+width+'×'+height,measure.scrollWidth<=measure.width&&!measure.overlaps&&measure.clipped.length===0,measure);
    assert('Íconos alineados y sin solapamientos '+width+'×'+height,await evaluate('[...document.querySelectorAll(".card h2")].every(h=>{const i=h.querySelector("svg").getBoundingClientRect(),t=h.querySelector("span").getBoundingClientRect(),r=h.getBoundingClientRect();return i.width===22&&i.height===22&&i.right<=t.left&&i.left>=r.left&&i.bottom<=r.bottom+1})'));
    if(width===1440||width===390)await screenshot(width<500?'movil-390.png':'escritorio-1440-oscuro.png');
    if(width===1440)await screenshot('canvas-completo-oscuro.png',true);
  }
  await cdp('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
  await evaluate('document.querySelector("#theme").click()');assert('Cambio a tema claro',await evaluate('document.body.classList.contains("light")'));await screenshot('escritorio-1440-claro.png');
  for(const id of ['socios','actividades','recursos','valor','relaciones','canales','segmentos','costos','ingresos']){
    await evaluate('document.querySelector("[data-block='+id+']").click()');assert('Diálogo '+id,await evaluate('document.querySelector("dialog").open && document.activeElement.id==="close"'));
    if(id==='costos')await screenshot('detalle-presupuesto.png');await cdp('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await pause(30);
    assert('Escape y retorno de foco '+id,await evaluate('!document.querySelector("dialog").open && document.activeElement.dataset.block==="'+id+'"'));
  }
  await evaluate('document.querySelector("[data-block=valor]").focus()');await cdp('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',text:'\r',unmodifiedText:'\r',windowsVirtualKeyCode:13});await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});await pause(100);assert('Apertura con Enter',await evaluate('document.querySelector("dialog").open'));
  await cdp('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await cdp('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});assert('Foco contenido en diálogo',await evaluate('document.querySelector("dialog").contains(document.activeElement)'));await evaluate('document.querySelector("#close").click()');
  await cdp('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await cdp('Emulation.setTouchEmulationEnabled',{enabled:true,maxTouchPoints:1});
  const point=await evaluate('(()=>{const e=document.querySelector("[data-block=socios]");e.scrollIntoView({block:"center"});const r=e.getBoundingClientRect();return {x:r.x+r.width/2,y:r.y+r.height/2}})()');
  await cdp('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[point]});await cdp('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await pause(100);assert('Apertura por toque',await evaluate('document.querySelector("dialog").open'));await screenshot('movil-detalle.png');await evaluate('document.querySelector("#close").click()');
  await evaluate('document.querySelector("#expand").click()');assert('Mostrar todo',await evaluate('[...document.querySelectorAll(".appendix details")].every(e=>e.open)'));await evaluate('document.querySelector("#expand").click()');assert('Contraer todo',await evaluate('[...document.querySelectorAll(".appendix details")].every(e=>!e.open)'));
  await cdp('Emulation.setTouchEmulationEnabled',{enabled:false});await cdp('Emulation.setDeviceMetricsOverride',{width:1122,height:794,deviceScaleFactor:1,mobile:false});await evaluate('window.scrollTo(0,0)');
  const pdf=await cdp('Page.printToPDF',{printBackground:true,preferCSSPageSize:true});fs.writeFileSync(path.join(out,'canvas-impresion.pdf'),Buffer.from(pdf.data,'base64'));
  await cdp('Emulation.setEmulatedMedia',{media:'print'});await evaluate('window.dispatchEvent(new Event("beforeprint"))');await screenshot('vista-impresion.png');
  assert('Detalle íntegro en impresión',await evaluate('[...document.querySelectorAll(".appendix details")].every(e=>e.open&&e.querySelector(".detail-body").getBoundingClientRect().height>0)'));
  assert('Íconos completos en impresión',await evaluate('[...document.querySelectorAll(".card h2")].every(h=>{const i=h.querySelector("svg").getBoundingClientRect(),t=h.querySelector("span").getBoundingClientRect(),r=h.getBoundingClientRect();return i.width===14&&i.height===14&&i.right<=t.left&&i.bottom<=r.bottom+1})'));
  assert('Sin dependencias remotas',remote.length===0,remote);assert('Sin excepciones JavaScript',errors.length===0,errors);
  const receipt={status:'passed',kind:'comprobación personalizada de la vista profesional; no sustituye el recibo Archify',date:new Date().toISOString(),artifact:{path:html,sha256:crypto.createHash('sha256').update(fs.readFileSync(html)).digest('hex')},checks,screenshots:fs.readdirSync(out).filter(x=>x.endsWith('.png')),pdf:'canvas-impresion.pdf',visualReview:'pending',limitations:['No mide impacto educativo, ventas, publicación en tiendas ni implementación del videojuego.','Verificación en Chrome local; no se probaron otros navegadores ni lector de pantalla real.']};fs.writeFileSync(path.join(out,'verificacion.json'),JSON.stringify(receipt,null,2));
  console.log(JSON.stringify({status:receipt.status,checks:checks.length,evidence:out}));await cdp('Browser.close');
}catch(e){fs.writeFileSync(path.join(out,'verificacion-fallida.json'),JSON.stringify({status:'failed',error:e.message,checks},null,2));console.error(e);process.exitCode=1;}finally{socket?.close();if(proc.exitCode===null)proc.kill();}
