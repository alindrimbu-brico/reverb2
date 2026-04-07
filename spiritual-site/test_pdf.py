import PyPDF2

def get_text():
    pdf_path = r'C:\Users\alind\Documents\Brianna_Wiest_-_101_eseuri_care_iti_vor_schimba_modul_de_a_gandi.pdf'
    text = ""
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        for i in range(10): # read first 10 pages
            text += reader.pages[i].extract_text() + "\n"
    print(text[:3000])

if __name__ == "__main__":
    get_text()
