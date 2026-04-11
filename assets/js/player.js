
if (navigator.requestMIDIAccess) {
	navigator.requestMIDIAccess().then(MIDIOpen, MIDIError);
}
var midiObj = null;
var midiPlayer = null;
var midiOut = null;

function MIDIOpen(midi) {
	midiObj = midi;
}

function MIDIError(e) {
	console.log(e);
}

var start = null;
var lyrics = null;
var container = null;
var karaokeDrawing = false;

function loadKar(kar) {
	container = document.getElementById('karaoke');
	var hudName = document.getElementById('hud-song-name');
	if (hudName && kar.fileName) {
		hudName.textContent = kar.fileName;
	}
	lyrics = kar.getLyrics();
	startTime();
	if (!karaokeDrawing) {
		karaokeDrawing = true;
		drawKaraoke();
	}
}

function loadText(kar) {
	var lyricsText = kar.getText();
	var res = document.getElementById('result');
	if (res) {
		res.innerText = '';
		for (var trk in lyricsText) {
			res.innerText += 'Track ' + trk + '\n';
			res.innerText += lyricsText[trk];
			res.innerText += '\n\n';
		}
	}
}

function startTime() {
	start = (new Date()).getTime();
}

function drawKaraoke() {
	container = document.getElementById('karaoke');
	if (!container) {
		karaokeDrawing = false;
		return;
	}
	var lastIndex = 0;
	var time;
	var lyric;
	var part;
	var current = new Date();
	current = current.getTime() - start;
	if (typeof player !== 'undefined' && player) {
		current = Math.round(player.getPosition() * 1000);
	}
	if (!lyrics) {
		lyrics = [
			{
				time: 0, text: 'Sem letra', track: '0',
				parts: [{ time: 0, text: 'Sem letra' }]
			}
		];
	}
	for (var index = 0; index < lyrics.length; index++) {
		lyric = lyrics[index];
		time = lyric.time;
		if (time >= current) {
			lyric = lyrics[index - 1];
			var active = '';
			var inactive = '';
			var preactive = '';
			var lastactive = '';
			if (lyric) {
				for (var idx in lyric.parts) {
					part = lyric.parts[idx];
					if (part.time <= current) {
						preactive = active;
						lastactive = part.text;
						active += part.text;
					} else {
						inactive += part.text;
					}
				}
			}
			container.innerHTML = '';
			if (index - 2 >= 0) {
				container.innerHTML += '<span class="previous">' + lyrics[index - 2].text + '</span><br>';
			}
			container.innerHTML += '<span class="active">' + preactive + '</span>';
			container.innerHTML += '<span class="active last">' + lastactive + '</span>';
			container.innerHTML += '<span class="inactive">' + inactive + '</span>';
			if (index < lyrics.length) {
				container.innerHTML += '<br><span class="next">' + lyrics[index].text + '</span>';
			}
			break;
		}
		lastIndex = index;
	}
	setTimeout(drawKaraoke, 200);
}

function stop() {
	if (midiPlayer) {
		midiPlayer.stop();
	}
}

function playUrl(path, name) {
	var url = path + name + '.kar';
	var k = new KarFile();
	k.readUrl(url, function(kar, buffer) {
		kar.fileName = name;
		loadKar(kar);
		if (typeof player !== 'undefined' && player) {
			player.openFile(buffer);
		}
	});
}

window.onerror = function(msg, url, line, col, error) {
	console.log(msg, url, line, col, error);
};
