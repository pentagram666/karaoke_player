if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess().then(MIDIOpen, MIDIError);
}
var midiObj = null;
var midiPlayer = null;
var midiOut = null;

function MIDIOpen(midi) { midiObj = midi; }
function MIDIError(e)   { console.log(e); }

var start = null;
var lyrics = null;
var container = null;
var karaokeDrawing = false;

/* ── New lyric display state ── */
var lyricLineEl  = null;
var lyricNextEl  = null;
var currentLineIdx  = -1;
var lyricAnimating  = false;

/* ── HTML escape helper ── */
function escHtml(s) {
        return String(s)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
}

/* ──────────────────────────────────────────────
   BACKGROUND PICKER
   Pick a random image from backgrounds.json and
   apply it to the player screen.
   ────────────────────────────────────────────── */
function pickRandomBackground() {
        fetch('assets/images/background/backgrounds.json?t=' + Date.now())
                .then(function(r) { return r.json(); })
                .then(function(images) {
                        if (!images || images.length === 0) {
                                clearPlayerBackground();
                                return;
                        }
                        var pick = images[Math.floor(Math.random() * images.length)];
                        var screen = document.getElementById('screen-player');
                        var bgDiv  = document.getElementById('player-bg-image');
                        if (bgDiv) {
                                bgDiv.style.backgroundImage = 'url("assets/images/background/' + pick.replace(/"/g, '%22') + '")';
                                if (screen) screen.classList.add('has-bg');
                        }
                })
                .catch(function() { clearPlayerBackground(); });
}

function clearPlayerBackground() {
        var screen = document.getElementById('screen-player');
        var bgDiv  = document.getElementById('player-bg-image');
        if (bgDiv) bgDiv.style.backgroundImage = '';
        if (screen) screen.classList.remove('has-bg');
}

/* ──────────────────────────────────────────────
   LYRIC DISPLAY
   ────────────────────────────────────────────── */
function initKaraokeDisplay() {
        container = document.getElementById('karaoke');
        if (!container) return;
        container.innerHTML = '';

        lyricLineEl = document.createElement('div');
        lyricLineEl.className = 'lyric-line';

        lyricNextEl = document.createElement('div');
        lyricNextEl.className = 'lyric-next-preview';

        container.appendChild(lyricLineEl);
        container.appendChild(lyricNextEl);
}

/* Trigger slide-up on the current line, then slide-in with new content */
function transitionLyricLine(newIdx) {
        if (!lyricLineEl) return;

        lyricAnimating = true;
        lyricLineEl.classList.add('lyric-exit');

        var newLyric = lyrics[newIdx];

        setTimeout(function() {
                if (!lyricLineEl) return;
                lyricLineEl.classList.remove('lyric-exit');
                /* Set new line fully gray (pending) so it's visible before red fills in */
                lyricLineEl.innerHTML =
                        '<span class="lyric-sung"></span>' +
                        '<span class="lyric-pending">' + escHtml(newLyric.text) + '</span>';
                lyricLineEl.classList.add('lyric-enter');
                setTimeout(function() {
                        if (!lyricLineEl) return;
                        lyricLineEl.classList.remove('lyric-enter');
                        lyricAnimating = false;
                }, 360);
        }, 300);
}

function loadKar(kar) {
        container = document.getElementById('karaoke');
        var hudName = document.getElementById('hud-song-name');
        if (hudName && kar.fileName) {
                var displayName = kar.fileName.replace(/_[a-zA-Z0-9]+$/, '').replace(/_/g, ' ').trim();
                hudName.textContent = displayName;
        }

        lyrics = kar.getLyrics();

        /* Reset lyric engine */
        currentLineIdx = -1;
        lyricAnimating = false;
        lyricLineEl    = null;
        lyricNextEl    = null;

        initKaraokeDisplay();
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
                        res.innerText += 'Track ' + trk + '\n' + lyricsText[trk] + '\n\n';
                }
        }
}

function startTime() {
        start = (new Date()).getTime();
}

function drawKaraoke() {
        container = document.getElementById('karaoke');
        if (!container) { karaokeDrawing = false; return; }

        /* Re-init if display was cleared (e.g. screen navigation) */
        if (!lyricLineEl || !lyricLineEl.parentNode) {
                initKaraokeDisplay();
        }

        var current;
        if (typeof player !== 'undefined' && player) {
                current = Math.round(player.getPosition() * 1000);
        } else {
                current = (new Date()).getTime() - start;
        }

        if (!lyrics) {
                lyrics = [{time: 0, text: 'Sem letra', track: '0', parts: [{time: 0, text: 'Sem letra'}]}];
        }

        /* Find the active line */
        var activeIdx = -1;
        for (var i = 0; i < lyrics.length; i++) {
                if (lyrics[i].time <= current) activeIdx = i;
                else break;
        }

        if (activeIdx < 0) {
                setTimeout(drawKaraoke, 100);
                return;
        }

        /* Handle line change */
        if (activeIdx !== currentLineIdx) {
                var wasFirst = (currentLineIdx < 0);
                currentLineIdx = activeIdx;
                if (!wasFirst) {
                        transitionLyricLine(activeIdx);
                }
        }

        /* Update sung/pending coloring (skip while mid-animation) */
        if (!lyricAnimating && lyricLineEl) {
                var lyric = lyrics[activeIdx];
                var sung = '', pending = '';
                for (var p = 0; p < lyric.parts.length; p++) {
                        var part = lyric.parts[p];
                        if (part.time <= current) sung += part.text;
                        else pending += part.text;
                }
                lyricLineEl.innerHTML =
                        '<span class="lyric-sung">'    + escHtml(sung)    + '</span>' +
                        '<span class="lyric-pending">' + escHtml(pending) + '</span>';
        }

        /* Next line preview */
        if (lyricNextEl) {
                var nextText = (activeIdx + 1 < lyrics.length) ? lyrics[activeIdx + 1].text : '';
                lyricNextEl.textContent = nextText;
        }

        setTimeout(drawKaraoke, 100);
}

function stop() {
        if (midiPlayer) midiPlayer.stop();
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
        }, function(err) {
                console.log('Nao foi possivel carregar a musica: ' + name, err);
                if (typeof flashQueueConfirm === 'function') {
                        flashQueueConfirm('✘ Arquivo de musica invalido');
                }
        });
}

window.onerror = function(msg, url, line, col, error) {
        console.log(msg, url, line, col, error);
};
