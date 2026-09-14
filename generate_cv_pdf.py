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

def count_pages(pdf_path):
    try:
        import pypdf
        reader = pypdf.PdfReader(pdf_path)
        return len(reader.pages)
    except Exception:
        import re
        with open(pdf_path, 'rb') as f:
            content = f.read()
        # Find occurrences of /Type /Page excluding /Pages
        return len(re.findall(rb'/Type\s*/Page\b', content))

def build_pdf(tex_file, output_pdf, expected_pages=2):
    pdflatex = find_pdflatex()
    # Run pdflatex twice for proper cross-references and geometry
    subprocess.run([pdflatex, "-interaction=nonstopmode", "-halt-on-error", tex_file], check=True)
    pdf_name = os.path.splitext(tex_file)[0] + ".pdf"
    
    pages = count_pages(pdf_name)
    print(f"{pdf_name}: {pages} page(s)")
    if pages != expected_pages:
        raise ValueError(f"CRITICAL: {pdf_name} compiled to {pages} pages, must be strictly {expected_pages} pages!")
    
    os.makedirs(os.path.dirname(output_pdf), exist_ok=True)
    shutil.copy2(pdf_name, output_pdf)
    print(f"Copied {pdf_name} -> {output_pdf}")
    return pages

if __name__ == "__main__":
    if not os.path.exists("photo.jpeg") and os.path.exists("assets/images/photo.jpeg"):
        shutil.copy2("assets/images/photo.jpeg", "photo.jpeg")
    if not os.path.exists("Sign.png") and os.path.exists("assets/images/Sign.png"):
        shutil.copy2("assets/images/Sign.png", "Sign.png")
    
    p_en = build_pdf("cv_2page_en.tex", "assets/Pradeep_Gandu_CV_EN.pdf", expected_pages=2)
    p_de = build_pdf("cv_2page_de.tex", "assets/Pradeep_Gandu_CV_DE.pdf", expected_pages=2)
    print(f"SUCCESS: Both 2-Page CVs compiled and verified -> EN: {p_en} pages, DE: {p_de} pages")

