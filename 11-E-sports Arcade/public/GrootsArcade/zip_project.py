import zipfile
import os

def zipdir(path, ziph):
    for root, dirs, files in os.walk(path):
        if 'node_modules' in root or '.git' in root or 'dist' in root:
            continue
        for file in files:
            if file.endswith('.mp4'):
                continue
            file_path = os.path.join(root, file)
            ziph.write(file_path, os.path.relpath(file_path, path))

if __name__ == '__main__':
    with zipfile.ZipFile('../GrootsArcade.zip', 'w', zipfile.ZIP_DEFLATED) as zipf:
        zipdir('.', zipf)
    print("Zip created successfully.")
