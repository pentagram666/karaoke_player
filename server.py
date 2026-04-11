from flask import Flask, request, jsonify, send_from_directory
import os
import json

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


def sync_playlist(category):
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


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/upload', methods=['POST'])
def upload():
    category = request.form.get('category', 'internacional')
    if category not in UPLOAD_DIRS:
        return jsonify({'error': 'Categoria invalida'}), 400

    upload_dir = UPLOAD_DIRS[category]

    files = request.files.getlist('files')
    if not files or all(f.filename == '' for f in files):
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400

    saved = []
    for file in files:
        if file.filename == '':
            continue
        _, ext = os.path.splitext(file.filename)
        if ext.lower() not in AUDIO_EXTENSIONS:
            continue
        filepath = os.path.join(upload_dir, file.filename)
        file.save(filepath)
        saved.append(os.path.splitext(file.filename)[0])

    playlist = sync_playlist(category)

    return jsonify({
        'success': True,
        'saved': saved,
        'total': len(playlist),
        'playlist': playlist
    })


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)


if __name__ == '__main__':
    for cat in UPLOAD_DIRS:
        sync_playlist(cat)
    app.run(host='0.0.0.0', port=5000, debug=False)
