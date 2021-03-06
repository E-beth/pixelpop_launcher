function start() {
	recreateGameList();

	shufflePlayList = makeShuffledGameList();
	shuffleSelectList = makeShuffledGameList();

	selectRandomGame();
}

function recreateGameList() {
	var el = document.querySelector("#game_select");
	el.textContent = "";
	var shuffledGames = makeShuffledGameList();
	for (var i in shuffledGames) {
		var gameId = shuffledGames[i];
		el.appendChild(makeGameCard(gameId));
	}
}

var shufflePlayList = [];
var shuffleSelectList = [];

function makeShuffledGameList() {
	var list = [];
	for (var gameId in mixtape_games) {
		list.push(gameId);
	}
	list = shuffle(list);
	return list;
}

function shuffle(options) {
	var optionsShuffled = [];
	var optionsUnshuffled = options.slice();
	while (optionsUnshuffled.length > 0) {
		var i = Math.floor(Math.random() * optionsUnshuffled.length);
		optionsShuffled.push(optionsUnshuffled.splice(i, 1)[0]);
	}
	return optionsShuffled;
}

function playRandomGame() {
	var gameId = shufflePlayList.pop();
	if (shufflePlayList.length <= 0) {
		shufflePlayList = makeShuffledGameList();
	}
	selectGame(gameId);
	playGame(gameId);
}

function selectRandomGame() {
	var gameId = shuffleSelectList.pop();
	if (shuffleSelectList.length <= 0) {
		shuffleSelectList = makeShuffledGameList();
	}
	selectGame(gameId);
}

function makeGameCard(gameId) {
	var game = mixtape_games[gameId];

	var card = document.createElement("button");
	card.onfocus = function () {
		if (selectedGameId != gameId) {
			selectGame(gameId, slowTimer);
		}
	};
	card.ondblclick = function () {
		playGame(gameId);
	};
	card.id = "card_" + gameId;
	card.classList.add("game_card");

	var gif = document.createElement("figure");
	gif.style.backgroundImage = `url(images/${gameId}.gif)`;
	card.appendChild(gif);

	var title = document.createElement("h4");
	title.innerText = game.title;
	card.appendChild(title);

	// var author = document.createElement("h5");
	// author.innerText = game.author;
	// card.appendChild(author);

	return card;
}

var selectedGameId = null;
var nextGameTimer = null;
var fastTimer = 6000;
var slowTimer = 60000;

// prevent from jumping around while a player is actively browsing
document.addEventListener('mousemove', function () {
	if (nextGameTimer) {
		clearTimeout(nextGameTimer);
		nextGameTimer = window.setTimeout(selectRandomGame, slowTimer);
	}
});

function selectGame(gameId, timer) {
	if (timer == undefined || timer == null)
		timer = fastTimer;

	console.log(selectedGameId);

	if (selectedGameId != null) {
		document.getElementById("card_" + selectedGameId).classList.remove("selected_card");
	}

	selectedGameId = gameId;

	var game = mixtape_games[gameId];

	var selectedCard = document.getElementById("card_" + gameId);
	selectedCard.classList.add("selected_card");
	selectedCard.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
	});
	selectedCard.focus();

	var selectScreenEl = document.getElementById("select_screen");
	var loadingEl = document.getElementById("loading");
	loadingEl.style.backgroundColor = selectScreenEl.style.backgroundColor = game.colors[0];
	loadingEl.style.color = selectScreenEl.style.color = game.colors[1];
	document.getElementById("game_info_title").innerText = game.title;
	document.getElementById("game_info_author").innerHTML = game.author;
	//	document.getElementById("game_info_img").src = "images/" + gameId + ".gif";
	document.getElementById("game_info_blurb").innerHTML = game.blurb.trim();

	//	document.getElementById("game_info_portfolio_link").href = game.portfolio;
	//	document.getElementById("game_info_portfolio_author").innerHTML = game.author;
	//	gonna take my horse to the old town road gonna ride til i cant ride no more

	document.getElementById("game_info_title").onclick = function () {
		playGame(gameId);
	};
	//	document.getElementById("game_info_img").onclick = function() {
	//	playGame(gameId);
	//};
	document.getElementById("game_info_play_button").onclick = function () {
		playGame(gameId);
	};

	selectScreenEl.classList.add(selectedGameId);

	if (nextGameTimer != null)
		window.clearTimeout(nextGameTimer);
	nextGameTimer = window.setTimeout(selectRandomGame, timer);
}

function playGame(gameId) {
	var game = mixtape_games[gameId];

	if (nextGameTimer != null)
		window.clearTimeout(nextGameTimer);
	selectedGameId = gameId;

	// remove current game from randomization list
	if (shufflePlayList.indexOf(gameId) != -1) {
		shufflePlayList.splice(shufflePlayList.indexOf(gameId), 1);
	}
	// regenerate randomization list if necessary
	if (shufflePlayList.length <= 0) {
		shufflePlayList = makeShuffledGameList();
	}

	document.getElementById("select_screen").style.display = "none";
	document.getElementById("play_screen").style.display = "flex";

	document.getElementById("play_title").innerText = game.title;
	document.getElementById("play_author").innerHTML = game.author;

	document.getElementById("play_exit_button").onclick = exitPlayScreen;
	document.getElementById("play_restart_button").onclick = restartGame;
	document.getElementById("play_random_button").onclick = playRandomGame;

	var frame = document.getElementById("game_frame");
	frame.style.display = 'none';
	frame.src = "";
	frame.onload = function () {
		document.getElementById('loading').style.display = 'none';
		frame.style.display = 'block';
		setTimeout(() => {
			frame.focus();
		});
	};
	document.getElementById('loading').style.display = 'flex';
	frame.src = game.src;
}

function exitPlayScreen() {
	document.getElementById("game_frame").src = "";
	document.getElementById("select_screen").style.display = "flex";
	document.getElementById("play_screen").style.display = "none";

	recreateGameList();

	selectGame(selectedGameId);
}

function restartGame() {
	playGame(selectedGameId);
}

// genericized input
function onInput({
	x = 0,
	y = 0,
	confirm = false,
	cancel = false,
}) {
	if (x > 0) {
		const card = document.getElementById("card_" + selectedGameId);
		const target = card.nextSibling || card.parentElement.children[0];
		target.focus();
	} else if (x < 0) {
		const card = document.getElementById("card_" + selectedGameId);
		const target = card.previousSibling || card.parentElement.children[card.parentElement.children.length - 1];
		target.focus();
	}
	if (y > 0) {
		const card = document.getElementById("card_" + selectedGameId);
		const cx = card.offsetLeft;
		const offset = Array.from(card.parentElement.children).indexOf(card);
		for (let i = 1; i < card.parentElement.childElementCount; ++i) {
			const target = card.parentElement.children[(offset+i)%card.parentElement.childElementCount];
			const tx = target.offsetLeft;
			if (tx === cx) {
				target.focus();
				break;
			}
		}
	} else if (y < 0) {
		const card = document.getElementById("card_" + selectedGameId);
		const cx = card.offsetLeft;
		const offset = Array.from(card.parentElement.children).indexOf(card);
		for (let i = 1; i < card.parentElement.childElementCount; ++i) {
			let idx = offset-i;
			if (idx < 0) {
				idx += card.parentElement.childElementCount;
			}
			const target = card.parentElement.children[idx];
			const tx = target.offsetLeft;
			if (tx === cx) {
				target.focus();
				break;
			}
		}
	}

	if (confirm) {
		// HACK: this is a bit silly but works generically b/c if a card is selected,
		// its double click listener will be triggered,
		// and then the iframe will be clicked (doing nothing)
		// or, a selected button will be doubleclicked (doing nothing),
		// and then clicked, triggering standard behaviour
		document.activeElement.dispatchEvent(new MouseEvent('dblclick'));
		document.activeElement.dispatchEvent(new MouseEvent('click'));
	}

	if (cancel) {
		const exit = document.getElementById("play_exit_button");
		exit && exit.onclick && exit.onclick();
	}
}

// keyboard input
window.addEventListener('keydown', function (event) {
	const { key } = event;
	switch (key) {
		case 'd':
		case 'ArrowRight':
			event.preventDefault();
			return onInput({
				x: 1
			});
		case 'a':
		case 'ArrowLeft':
			event.preventDefault();
			return onInput({
				x: -1
			});
		case 'w':
		case 'ArrowUp':
			event.preventDefault();
			return onInput({
				y: -1
			});
		case 's':
		case 'ArrowDown':
			event.preventDefault();
			return onInput({
				y: 1
			});
		case 'z':
		case 'Enter':
		case ' ':
			event.preventDefault();
			return onInput({
				confirm: true
			});
		case 'x':
		case 'Escape':
			event.preventDefault();
			return onInput({
				cancel: true
			});
		default:
			return;
	}
});

// gamepad input

const gamepads = window.inputGamepads;
if (!gamepads) {
	console.warn('gamepad input API not found');
} else {
	gamepads.init();

	function gamepadUpdate() {
		let x = 0;
		let y = 0;
		let confirm = false;
		let cancel = false;
		if (gamepads.isJustDown(gamepads.DPAD_RIGHT) || gamepads.axisJustPast(gamepads.LSTICK_H, 0.5, 1)) {
			x += 1;
		}
		if (gamepads.isJustDown(gamepads.DPAD_LEFT) || gamepads.axisJustPast(gamepads.LSTICK_H, -0.5, -1)) {
			x -= 1;
		}
		if (gamepads.isJustDown(gamepads.DPAD_DOWN) || gamepads.axisJustPast(gamepads.LSTICK_V, 0.5, 1)) {
			y += 1;
		}
		if (gamepads.isJustDown(gamepads.DPAD_UP) || gamepads.axisJustPast(gamepads.LSTICK_V, -0.5, -1)) {
			y -= 1;
		}
		if (gamepads.isJustDown(gamepads.A) || gamepads.isJustDown(gamepads.B) || gamepads.isJustDown(gamepads.X) || gamepads.isJustDown(gamepads.Y) || gamepads.isJustDown(gamepads.START)) {
			confirm = true;
		}
		if (gamepads.isJustDown(gamepads.BACK)) {
			cancel = true;
		}

		onInput({
			x,
			y,
			confirm,
			cancel,
		});

		gamepads.update();
	}

	function loop(fn) {
		(function l() {
			fn();
			requestAnimationFrame(l);
		}());
	}
	loop(gamepadUpdate);
}
