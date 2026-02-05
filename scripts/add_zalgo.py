
import os
import re

RUNES = "**ᚠ ᛫ ᛟ ᛫ ᚱ ᛫ ᛒ ᛫ ᛟ ᛫ ᚲ**"

# Zalgo/Accent mapper
CHAR_MAP = {
    'a': 'á', 'A': 'Á',
    'e': 'é', 'E': 'É',
    'i': 'í', 'I': 'Í',
    'o': 'ó', 'O': 'Ó',
    'u': 'ú', 'U': 'Ú',
    'y': 'ý', 'Y': 'Ý',
    'c': 'c', 'C': 'C', # No easy accent for c in same style
    'k': 'k', 'n': 'n',
    's': 's',
    't': 't'
}

def zalgo_fy(text):
    # Convert to Title Case first
    text = text.title()
    # Replace separators with _
    text = re.sub(r'[\s\-\.]+', '_', text)
    # Apply accents
    new_text = ""
    for char in text:
        new_text += CHAR_MAP.get(char, char)
    return new_text

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        if "ᚠ ᛫ ᛟ ᛫ ᚱ" in content:
            print(f"Skipping {filepath} (Already zalgofied)")
            return

        print(f"Processing {filepath}...")
        
        filename = os.path.basename(filepath)
        name_part = os.path.splitext(filename)[0]
        
        # Create Zalgo Subtitle
        z_name = zalgo_fy(name_part)
        
        # Pick a suffix randomly or based on name length to vary it? 
        # Actually standard "Init" or "Doc" is safer.
        z_suffix = zalgo_fy("System_Doc")
        
        zalgo_line = f"`{z_name} // {z_suffix}`"
        
        block = f"\n\n{zalgo_line}\n\n{RUNES}\n"

        # Find insertion point: After first H1 (# )
        match = re.search(r'^#\s+.*$', content, re.MULTILINE)
        
        if match:
            end_idx = match.end()
            new_content = content[:end_idx] + block + content[end_idx:]
        else:
            # Prepend if no H1
            new_content = block + "\n" + content

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

def main():
    target_dirs = [
        "/Users/seandinwiddie/GitHub/forboc.ai",
        "/Users/seandinwiddie/GitHub/Forboc",
        "/Users/seandinwiddie/Documents/GitHub/forboc.github.io",
        "/Users/seandinwiddie/Documents/GitHub/qvht.github.io",
        "/Users/seandinwiddie/GitHub/forbocai",
        "/Users/seandinwiddie/GitHub/sdk",
        "/Users/seandinwiddie/GitHub/api"
    ]

    for root_dir in target_dirs:
        if not os.path.exists(root_dir):
            print(f"Directory not found: {root_dir}")
            continue
            
        print(f"Scanning {root_dir}...")
        for root, dirs, files in os.walk(root_dir):
            # Skip node_modules and .git
            if 'node_modules' in dirs:
                dirs.remove('node_modules')
            if '.git' in dirs:
                dirs.remove('.git')
                
            for file in files:
                if file.lower().endswith(('.md', '.mdx')):
                    process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
