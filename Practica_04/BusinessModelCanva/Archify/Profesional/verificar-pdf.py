"""Comprobación opcional del PDF; requiere pypdf (no es dependencia del Canvas)."""
import hashlib
import json
import re
import sys
from pathlib import Path

if len(sys.argv) > 1:
    sys.path.insert(0, sys.argv[1])
from pypdf import PdfReader

folder = Path(__file__).resolve().parent
pdf = folder / "evidencias/profesional/canvas-impresion.pdf"
data = json.loads((folder / "canvas-data.json").read_text(encoding="utf-8"))
reader = PdfReader(pdf)
normalize = lambda s: re.sub(r"\s+", " ", s).strip()
pages = [normalize(page.extract_text()) for page in reader.pages]
text = " ".join(pages)
first_page_blocks = {block["title"]: block["title"] in pages[0] for block in data["blocks"]}
sentences = [item for block in data["blocks"] for section in block["sections"] for item in section["items"]]
missing = [item for item in sentences if normalize(item) not in text]
totals = {number: number in text for number in ["4,600", "38,000", "42,600", "9,350"]}
receipt = {
    "kind": "Revisión textual de PDF; no es renderización visual de cada página",
    "pdf_sha256": hashlib.sha256(pdf.read_bytes()).hexdigest(),
    "pages": len(pages),
    "page_points": list(reader.pages[0].mediabox),
    "first_page_blocks": first_page_blocks,
    "sentences_checked": len(sentences),
    "missing_sentences": missing,
    "totals": totals,
    "logo_present_first_page": len(reader.pages[0].images) > 0,
}
receipt["passed"] = all(first_page_blocks.values()) and not missing and all(totals.values()) and receipt["logo_present_first_page"]
(folder / "evidencias/profesional/verificacion-pdf.json").write_text(json.dumps(receipt, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(receipt, ensure_ascii=False))
sys.exit(0 if receipt["passed"] else 1)
