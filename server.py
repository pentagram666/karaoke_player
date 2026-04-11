from flask import Flask, request, jsonify, send_from_directory
import os
import json
import hashlib

app = Flask(__name__)

UPLOAD_DIRS = {
    'internacional': 'assets/music',
    'nacional': 'musicas'
}
PLAYLIST_FILES = {
    'internacional': 'assets/music/playlist.json',
    'nacional': 'musicas/playlist.json'
}
AUDIO_EXTENSIONS = {'.kar', '.mid', '.midi'}

BACKGROUND_DIR  = 'assets/images/background'
BACKGROUND_JSON = 'assets/images/background/backgrounds.json'
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'}


def file_hash(data: bytes) -> str:
    return hashlib.md5(data).hexdigest()


def existing_hashes(folder: str) -> dict:
    """Return {hash: filename} for all audio files currently in the folder."""
    result = {}
    try:
        for entry in os.listdir(folder):
            _, ext = os.path.splitext(entry)
            if ext.lower() not in AUDIO_EXTENSIONS:
                continue
            path = os.path.join(folder, entry)
            try:
                with open(path, 'rb') as f:
                    h = file_hash(f.read())
                result[h] = entry
            except OSError:
                pass
    except FileNotFoundError:
        pass
    return result


def sync_playlist(category: str) -> list:
    """Scan the folder and rebuild playlist.json from actual files on disk."""
    upload_dir = UPLOAD_DIRS[category]
    playlist_file = PLAYLIST_FILES[category]

    try:
        entries = os.listdir(upload_dir)
    except FileNotFoundError:
        os.makedirs(upload_dir, exist_ok=True)
        entries = []

    names = []
    for entry in entries:
        name, ext = os.path.splitext(entry)
        if ext.lower() in AUDIO_EXTENSIONS:
            names.append(name)

    names.sort(key=lambda s: s.lower())

    with open(playlist_file, 'w', encoding='utf-8') as f:
        json.dump(names, f, ensure_ascii=False, indent=4)

    return names


def sync_backgrounds() -> list:
    """Scan the background folder and rebuild backgrounds.json."""
    os.makedirs(BACKGROUND_DIR, exist_ok=True)

    files = []
    try:
        for entry in sorted(os.listdir(BACKGROUND_DIR), key=lambda s: s.lower()):
            _, ext = os.path.splitext(entry)
            if ext.lower() in IMAGE_EXTENSIONS:
                files.append(entry)
    except FileNotFoundError:
        pass

    with open(BACKGROUND_JSON, 'w', encoding='utf-8') as f:
        json.dump(files, f, ensure_ascii=False, indent=4)

    return files


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/upload', methods=['POST'])
def upload():
    category = request.form.get('category', 'internacional')
    if category not in UPLOAD_DIRS:
        return jsonify({'error': 'Categoria invalida'}), 400

    upload_dir = UPLOAD_DIRS[category]
    os.makedirs(upload_dir, exist_ok=True)

    files = request.files.getlist('files')
    if not files or all(f.filename == '' for f in files):
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400

    hashes = existing_hashes(upload_dir)

    saved = []
    dup_name = []
    dup_content = []

    for file in files:
        if file.filename == '':
            continue
        name, ext = os.path.splitext(file.filename)
        if ext.lower() not in AUDIO_EXTENSIONS:
            continue

        data = file.read()
        h = file_hash(data)

        if h in hashes:
            existing_name = os.path.splitext(hashes[h])[0]
            dup_content.append({'file': name, 'matches': existing_name})
            continue

        filepath = os.path.join(upload_dir, file.filename)
        if os.path.exists(filepath):
            dup_name.append(name)
            continue

        with open(filepath, 'wb') as f:
            f.write(data)
        hashes[h] = file.filename
        saved.append(name)

    playlist = sync_playlist(category)

    return jsonify({
        'success': True,
        'saved': saved,
        'dup_name': dup_name,
        'dup_content': dup_content,
        'total': len(playlist)
    })


@app.route('/sync-backgrounds', methods=['POST'])
def route_sync_backgrounds():
    """Manually trigger a backgrounds.json rebuild (e.g. after adding images)."""
    files = sync_backgrounds()
    return jsonify({'success': True, 'count': len(files), 'files': files})


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)


if __name__ == '__main__':
    for cat in UPLOAD_DIRS:
        sync_playlist(cat)
    sync_backgrounds()
    app.run(host='0.0.0.0', port=5000, debug=False)
