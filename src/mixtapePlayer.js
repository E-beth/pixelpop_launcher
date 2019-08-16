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

	document.getElementById("select_screen").style.backgroundColor = game.colors[0];
	document.getElementById("select_screen").style.color = game.colors[1];
	document.getElementById("game_info_title").innerText = game.title;
	document.getElementById("game_info_author").innerHTML = game.author;
	//	document.getElementById("game_info_img").src = "images/" + gameId + ".gif";
	document.getElementById("game_info_blurb").innerText = game.blurb;

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

	document.getElementById("select_screen").classList.add(selectedGameId);

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
	confirm = false,
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

	if (confirm) {
		// HACK: this is a bit silly but works generically b/c if a card is selected,
		// its double click listener will be triggered,
		// and then the iframe will be clicked (doing nothing)
		// or, a selected button will be doubleclicked (doing nothing),
		// and then clicked, triggering standard behaviour
		document.activeElement.dispatchEvent(new MouseEvent('dblclick'));
		document.activeElement.dispatchEvent(new MouseEvent('click'));
	}
}

// keyboard input
window.addEventListener('keydown', function ({
	key
}) {
	switch (key) {
		case 'd':
		case 'ArrowRight':
			return onInput({
				x: 1
			});
		case 'a':
		case 'ArrowLeft':
			return onInput({
				x: -1
			});
		case 'z':
		case 'Enter':
		case ' ':
			return onInput({
				confirm: true
			});
		default:
			return;
	}
});
