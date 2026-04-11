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

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/upload', methods=['POST'])
def upload():
    category = request.form.get('category', 'internacional')
    if category not in UPLOAD_DIRS:
        return jsonify({'error': 'Categoria invalida'}), 400

    upload_dir = UPLOAD_DIRS[category]
    playlist_file = PLAYLIST_FILES[category]

    files = request.files.getlist('files')
    if not files or all(f.filename == '' for f in files):
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400

    try:
        with open(playlist_file, 'r', encoding='utf-8') as f:
            playlist = json.load(f)
    except Exception:
        playlist = []

    added = []
    skipped = []
    for file in files:
        if file.filename == '':
            continue
        filename = file.filename
        name = os.path.splitext(filename)[0]
        filepath = os.path.join(upload_dir, filename)
        file.save(filepath)
        if name not in playlist:
            playlist.append(name)
            added.append(name)
        else:
            skipped.append(name)

    with open(playlist_file, 'w', encoding='utf-8') as f:
        json.dump(playlist, f, ensure_ascii=False, indent=4)

    return jsonify({'success': True, 'added': added, 'skipped': skipped, 'total': len(playlist)})

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
