import os
import subprocess
import shutil
import pypdf

def find_pdflatex():
    if shutil.which("pdflatex"):
        return "pdflatex"
    candidates = [
        r"E:\MiKTeX\miktex\bin\x64\pdflatex.exe",
        r"C:\Users\prade\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe",
        r"C:\Program Files\MiKTeX\miktex\bin\x64\pdflatex.exe"
    ]
    for c in candidates:
        if os.path.isfile(c):
            return c
    raise RuntimeError("pdflatex not found on PATH or standard MiKTeX locations.")

def build_pdf(tex_file, output_pdf):
    pdflatex = find_pdflatex()
    # Run pdflatex twice for proper cross-references and geometry
    subprocess.run([pdflatex, "-interaction=nonstopmode", "-halt-on-error", tex_file], check=True)
    pdf_name = os.path.splitext(tex_file)[0] + ".pdf"
    
    reader = pypdf.PdfReader(pdf_name)
    pages = len(reader.pages)
    print(f"{pdf_name}: {pages} page(s)")
    if pages != 1:
        raise ValueError(f"CRITICAL: {pdf_name} compiled to {pages} pages, must be strictly 1 page!")
    
    os.makedirs(os.path.dirname(output_pdf), exist_ok=True)
    shutil.copy2(pdf_name, output_pdf)
    print(f"Copied {pdf_name} -> {output_pdf}")
    return pages

if __name__ == "__main__":
    if not os.path.exists("photo.jpeg") and os.path.exists("assets/images/photo.jpeg"):
        shutil.copy2("assets/images/photo.jpeg", "photo.jpeg")
    
    p_en = build_pdf("cv_v3_en.tex", "assets/Pradeep_Gandu_CV_EN.pdf")
    p_de = build_pdf("cv_v3_de.tex", "assets/Pradeep_Gandu_CV_DE.pdf")
    print(f"SUCCESS: Both V3 1-Page CVs compiled and verified -> EN: {p_en}, DE: {p_de}")
