import glob
import os

replacements = {
   'Apelează Tatăl. Formează Conexiunea.': 'Intră în contact. Formează Conexiunea.',
   'Începe cuvântul tău la:': 'Scrie-ne confidențial la:',
   'Reflectă Aici': 'Reflectează Aici',
   'Scrie aici dezvăluirea ta. Textul tău rămâne captiv strict pe propriul tău ecran.': 'Notează aici reflecția ta. Textul rămâne privat și securizat local pe dispozitivul tău.',
   'Aștept consemnarea...': 'Se așteaptă notița...',
   'Emanația luminii tale a creat acest portal pentru liniștea minții tale.': 'Acest portal a fost creat pentru liniștea și claritatea minții tale.',
   'Ceea ce este sus, este și jos. Puritatea se vede în tine.': 'Precum sus, așa și jos. Claritatea se regăsește în interiorul tău.',
   'O sesiune de reflecție asupra sinelui': 'O sesiune ghidată de reflecție asupra sinelui'
}

files = glob.glob('public/aura/*.html')
count = 0
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        count += 1

print(f'Modificat {count} fisiere HTML.')
