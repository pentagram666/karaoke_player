var currentScreen = 'screen-home';
var focusedIndex = 0;
var controlsVisible = false;
var controlsHideTimer = null;
var currentSongIndex = -1;
var currentTheme = 'sunset';

function showScreen(id) {
	var screens = document.querySelectorAll('.screen');
	for (var i = 0; i < screens.length; i++) {
		screens[i].classList.remove('active');
	}
	var target = document.getElementById(id);
	if (target) {
		target.classList.add('active');
	}
	currentScreen = id;
	focusedIndex = 0;
	applyFocus();
}

function getFocusables() {
	var screen = document.getElementById(currentScreen);
	if (!screen) return [];
	return Array.prototype.slice.call(screen.querySelectorAll('.focusable'));
}

function applyFocus() {
	var items = getFocusables();
	for (var i = 0; i < items.length; i++) {
		items[i].classList.remove('focused');
	}
	if (items.length > 0) {
		if (focusedIndex < 0) focusedIndex = 0;
		if (focusedIndex >= items.length) focusedIndex = items.length - 1;
		items[focusedIndex].classList.add('focused');
		scrollIntoViewIfNeeded(items[focusedIndex]);
	}
}

function scrollIntoViewIfNeeded(el) {
	var container = el.closest('.song-list-container');
	if (!container) return;
	var elTop = el.offsetTop;
	var elBottom = elTop + el.offsetHeight;
	var ctTop = container.scrollTop;
	var ctBottom = ctTop + container.clientHeight;
	if (elTop < ctTop) {
		container.scrollTop = elTop - 8;
	} else if (elBottom > ctBottom) {
		container.scrollTop = elBottom - container.clientHeight + 8;
	}
}

function moveFocus(dir) {
	var items = getFocusables();
	if (items.length === 0) return;
	focusedIndex += dir;
	if (focusedIndex < 0) focusedIndex = 0;
	if (focusedIndex >= items.length) focusedIndex = items.length - 1;
	applyFocus();
}

function activateFocused() {
	var items = getFocusables();
	if (items.length === 0) return;
	var el = items[focusedIndex];
	if (!el) return;

	var action = el.getAttribute('data-action');
	var theme = el.getAttribute('data-theme');

	if (action) {
		handleAction(action, el);
		return;
	}
	if (theme) {
		applyTheme(theme);
		showScreen('screen-home');
		return;
	}
	if (el.classList.contains('song-item')) {
		var pPath = el.getAttribute('data-playlist-path');
		var fname = el.getAttribute('data-filename');
		if (pPath && fname) {
			loadSong(pPath, fname);
		}
		return;
	}
	el.click();
}

function handleAction(action, el) {
	switch (action) {
		case 'open-songs':
			showScreen('screen-songs');
			break;
		case 'open-upload':
			document.getElementById('inputfile').click();
			break;
		case 'open-themes':
			showScreen('screen-themes');
			break;
		case 'back':
			showScreen('screen-home');
			break;
		case 'back-home':
			if (typeof player !== 'undefined' && player) {
				player.stop();
			}
			showScreen('screen-home');
			break;
		case 'play-pause':
			if (typeof player !== 'undefined' && player) {
				if (player.state === player.PLAYING) {
					player.pause();
					updateHudState(false);
				} else {
					player.play();
					updateHudState(true);
				}
			}
			break;
		case 'stop':
			if (typeof player !== 'undefined' && player) {
				player.stop();
				updateHudState(false);
			}
			break;
		case 'next-song':
			playAdjacentSong(1);
			break;
		case 'prev-song':
			playAdjacentSong(-1);
			break;
	}
}

function updateHudState(playing) {
	var stateEl = document.getElementById('hud-state');
	var btnEl = document.getElementById('btn-play-pause');
	if (stateEl) stateEl.textContent = playing ? '\u25BA' : '\u23F8';
	if (btnEl) btnEl.textContent = playing ? '\u23F8 Pausar' : '\u25BA Tocar';
}

function applyTheme(theme) {
	var themes = ['sunset', 'basic', 'christmas', 'none'];
	if (themes.indexOf(theme) < 0) theme = 'sunset';
	document.body.className = theme;
	currentTheme = theme;
	document.location.hash = theme;
	var cards = document.querySelectorAll('.theme-card');
	for (var i = 0; i < cards.length; i++) {
		cards[i].classList.remove('selected');
		if (cards[i].getAttribute('data-theme') === theme) {
			cards[i].classList.add('selected');
		}
	}
}

function playAdjacentSong(dir) {
	if (!window.playlistData || !window.playlistPathLoaded) return;
	var idx = (typeof window.currentSongIndex === 'number') ? window.currentSongIndex : -1;
	var next = idx + dir;
	if (next < 0) next = window.playlistData.length - 1;
	if (next >= window.playlistData.length) next = 0;
	window.currentSongIndex = next;
	loadSong(window.playlistPathLoaded, window.playlistData[next]);
}

function showPlayerControls() {
	var bar = document.getElementById('player-controls-bar');
	if (!bar) return;
	bar.classList.remove('hidden-controls');
	bar.classList.add('show-controls');
	controlsVisible = true;
	resetControlsTimer();
}

function hidePlayerControls() {
	var bar = document.getElementById('player-controls-bar');
	if (!bar) return;
	bar.classList.remove('show-controls');
	bar.classList.add('hidden-controls');
	controlsVisible = false;
}

function resetControlsTimer() {
	if (controlsHideTimer) clearTimeout(controlsHideTimer);
	controlsHideTimer = setTimeout(function() {
		if (currentScreen === 'screen-player') {
			hidePlayerControls();
		}
	}, 4000);
}

function initUI() {
	var hash = document.location.hash;
	var themes = ['#sunset', '#basic', '#christmas', '#none'];
	if (themes.indexOf(hash) >= 0) {
		currentTheme = hash.substring(1);
	} else {
		currentTheme = window.defaultTheme || 'sunset';
	}
	applyTheme(currentTheme);

	document.addEventListener('keydown', function(e) {
		var key = e.key || e.keyCode;

		if (currentScreen === 'screen-player') {
			showPlayerControls();

			if (key === ' ' || key === 'MediaPlayPause' || key === 179) {
				e.preventDefault();
				handleAction('play-pause');
				return;
			}
			if (key === 'MediaStop' || key === 178) {
				e.preventDefault();
				handleAction('stop');
				return;
			}
			if (key === 'MediaTrackNext' || key === 176) {
				e.preventDefault();
				handleAction('next-song');
				return;
			}
			if (key === 'MediaTrackPrevious' || key === 177) {
				e.preventDefault();
				handleAction('prev-song');
				return;
			}
			if (key === 'Escape' || key === 'GoBack' || key === 'BrowserBack' || key === 8 || key === 10009) {
				e.preventDefault();
				handleAction('back-home');
				return;
			}
		}

		if (key === 'ArrowDown' || key === 40) {
			e.preventDefault();
			moveFocus(1);
		} else if (key === 'ArrowUp' || key === 38) {
			e.preventDefault();
			moveFocus(-1);
		} else if (key === 'ArrowRight' || key === 39) {
			e.preventDefault();
			if (currentScreen !== 'screen-player') moveFocus(1);
		} else if (key === 'ArrowLeft' || key === 37) {
			e.preventDefault();
			if (currentScreen !== 'screen-player') moveFocus(-1);
		} else if (key === 'Enter' || key === 13 || key === 'OK') {
			e.preventDefault();
			activateFocused();
		} else if (key === 'Escape' || key === 'GoBack' || key === 'BrowserBack' || key === 8 || key === 10009) {
			e.preventDefault();
			if (currentScreen !== 'screen-home') {
				showScreen('screen-home');
			}
		}
	});

	document.addEventListener('click', function(e) {
		var target = e.target.closest('.focusable');
		if (!target) return;
		var items = getFocusables();
		var idx = items.indexOf(target);
		if (idx >= 0) focusedIndex = idx;
		applyFocus();
	});

	document.getElementById('screen-player').addEventListener('click', function(e) {
		if (!e.target.closest('.ctrl-btn') && !e.target.closest('.player-hud')) {
			showPlayerControls();
		}
	});

	applyFocus();
}

function readKar(file) {
	if (file && file.files && file.files[0]) {
		window.currentSongName = file.files[0].name.replace(/\.[^.]+$/, '');
		var hudName = document.getElementById('hud-song-name');
		if (hudName) hudName.textContent = window.currentSongName;
		var k = new KarFile();
		k.readFileInput(file, loadKar);
		showScreen('screen-player');
		showPlayerControls();
	}
}
