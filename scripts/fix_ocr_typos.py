import glob
import os
import re

# Comprehensive list of OCR-related replacements
replacements = {
    # The 'irna' / 'rn' -> 'm' series
    'Stirna': 'Stima',
    'stirna': 'stima',
    'Stirnei': 'Stimei',
    'Stirnă': 'Stimă',
    'stirnă': 'stimă',
    
    # Common word replacements
    'v1ata': 'viața',
    'Vlafa': 'Viața',
    'lfl': 'îți',
    'pofl': 'poți',
    'gest1ona': 'gestiona',
    's1ntet1za': 'sintetiza',
    'susiinere': 'susținere',
    'cațtigi': 'câștigi',
    'grețite': 'greșite',
    'inconțtient': 'inconștient',
    'conțtient': 'conștient',
    'țtient': 'știent',
    'țtiau': 'știau',
    'țoapta': 'șoaptă',
    'pațim': 'pășim',
    'neatațafi': 'neatașați',
    'reuțețti': 'reușești',
    'reuțeștii': 'reușești',
    'cunoțti': 'cunoști',
    'țti ca': 'știi că',
    'Trairețti': 'Trăiești',
    'Traieștii': 'Trăiești',
    'ețti': 'ești',
    'eștii': 'ești',
    
    # Specific common standalone words/prefixes
    ' ți ': ' și ',
    'țase': 'șase',
    'totuți': 'totuși',
}

# Regex-based replacements for more flexible matching
regex_replacements = [
    (r'\bți\b', 'și'),           # Standing alone
    (r'\bț([aiou])', r'ș\1'),   # Start of word followed by vowel (e.g. țase -> șase)
    (r'țtii?\b', 'știi'),         # Word end
    (r'eștii\b', 'ești'),
    (r'ețti\b', 'ești'),
]

# Target both spiritual-site and public/aura
directories = ['spiritual-site/*.html', 'public/aura/*.html']

count_files = 0
count_replacements = 0

for pattern in directories:
    files = glob.glob(pattern)
    for fpath in files:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Apply string replacements
        for old, new in replacements.items():
            if old in content:
                content = content.replace(old, new)
                
        # Apply regex replacements
        for reg_old, reg_new in regex_replacements:
            content = re.sub(reg_old, reg_new, content)
            
        if content != original:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            count_files += 1
            print(f'Fixed typos in: {fpath}')

print(f'\nFinished! Modificat {count_files} fisiere HTML.')
