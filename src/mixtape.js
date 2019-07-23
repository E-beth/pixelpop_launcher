var mixtape_games = {
	// solo
	slow_growing: {
		title: "Slow Growing",
		author: "Ebeth, @electronicbeth, ebethnorvell.com",
		src: "games/slow_growing.html",
		blurb: "A small snail wants to have a big garden. 🐌🌱"
	},
	beckys_apple: {
		title: "Becky's Apple",
		author: "Em Lindqvist, @embotronic",
		src: "games/beckys_apple.html",
		blurb: "When I was a kid, there was a big tree with pink apples in our yard. One winter it snowed too hard, and the tree cracked down the middle because of the weight. Nothing lasts forever."
	},
	space_bubble_cat: {
		title: "Space Bubble Cat",
		author: "Emma Daues, @siberianKhatru ",
		src: "games/space_bubble_cat.html",
		blurb: "A very personal piece about a lonely cat who floats through space."
	},
	fever: {
		title: "Fever",
		author: "A Yolland, @AYolland",
		src: "games/fever.html",
		blurb: "I wanted to make this game because it was a story I could tell primarily with color, and because it is an issue close to my heart. If you want to know more about coral bleaching, try globalcoralbleaching.org"
	},
	pretty_dark: {
		title: "It's Pretty Dark",
		author: "Brandon Thread, @threadsmind",
		src: "games/pretty_dark.html",
		blurb: "You've arrived in a strange, new place...make your way through the long and winding maze, with only the light of your candle to help you navigate"
	},
	manster_mansion: {
		title: "A Night at Manster Mansion",
		author: "Onion, @leonionboi",
		src: "games/manster_mansion.html",
		blurb: "Woken in the night by your boss, you must go uncover the murder at the mysterious Manster Mansion belonging to the most ruthless mafia clan in the world."
	},
	opus: {
		title: "Opus",
		author: "IAN MARTIN, @ianmart1n",
		src: "games/opus.html",
		blurb: "The dreamy journey of an inventor in a rainy apocalypse."
	},
	tea_for_two: {
		title: "Tea for Two",
		author: "Sean S. LeBlanc, @SeanSLeBlanc",
		src: "games/tea_for_two.html",
		blurb: "A short experience about two friends and two teas!"
	},
	// collabs
	mystery_dungeon: {
		title: "BITSY MYSTERY DUNGEON",
		author: "",
		src: "games/mystery_dungeon.html",
		blurb: "Come visit the strange underground! The dungeon was built as an exquisite corpse - every room was constructed separately with only variables being shared between participants and the final layout of the maze was randomised. The maze wraps round at the edges and you start with 2 Bits, the currency of the Mystery Dungeon. There's no overall win state, although there are some hidden quests.\n \n Organized by @Ducklingsmith \n \n Rooms: 4,255,246 by Marzipan Recognition Alloy -*- A Dark Place by Flowerditch -*- A River Apart by Rarelikeaunicorn -*- Alchemist by Nicole Voec -*- Bird Village by Sarah Gould -*- The Bits Coin Mine by Mozz -*- Chillzone by Ruin -*- The Crab Room by Emma Daues -*- Crows by Becklespinax -*- Crumpet Seller by Lenny Magner -*- Dive Bar/Back Alley by AYolland -*- Drifter's Crossing by Natalie Clayton -*- The Factory by Ian Martin -*- Hall X by Dan Lance -*- Haunted Hotel by W J Holly -*- Jborictu'a by Wyvy -*- Kaiju by Mark Wonnacott -*- Legend by Kai -*- Meet the Thom(p)sons by Peter Februar -*- Mushroom Forest by Teri -*- My First Bitsy by Sergio Cornaga -*- Pan's Dance Party by Pan -*- Port-o-Potties by Lumpen -*- Purple Beach by Em Lindqvist -*- The Red Library by David Mowatt -*- Reflection by Brandon Thread -*- Relaxzone by Onion -*- The Rift by Laiska -*- Saltwater Room by Marisol -*- Sewer Ballet by AshGary -*- Swamp Room by Ebeth -*- Ulgomogoth the Sizable by Skeleton Hugs -*- Vortex by Grey Burnett -*- Wishing Well by Sean S. LeBlanc"
	},
	jimjam: {
		title: "The Bitsy Jim Jam",
		author: "",
		src: "games/jimjam.html",
		blurb: "A virtual sleepover with the Bitsy community! Each guest contributed a sprite of themselves to come to the party along with a tile and item. \n \n Organized by @Electronicbeth \n \n Music by Lenny and BedWords. \n \n Party Guests: Lenny, Ducklingsmith, AshGary (special thanks for coming up with the name Jim Jam!), Onion, Em, Spdrcstl, Candle, Claire Morley, Jctwood, Adam Le Doux, Ayolland, Emma, Unity, Tim, Haraiva, Meowchelle, Life on Luna, Fen, Rose, Sarah Gould, Pan, Wyvy, Josie, Leno, Quin, Enui, Hunter, ._a & Ebeth."
	},
	camp: {
		title: "Bitsy Camp",
		author: "",
		src: "games/camp.html",
		blurb: "Come on a camping trip with members of the Bitsy Discord! Each camper contributed a sprite of themselves and an item. \n \n Organized by @AndImLenny \n \n Campers: Nina, NoahBoa, Ripple, mbtzl, Sean, Onion, Florencia Rumpel Rodriguez, Rose, Caeth & Ebeth."
	},
	tower: {
		title: "Spook Tower",
		author: "",
		src: "games/tower.html",
		blurb: "Welcome to SPOOK TOWER, a relentless experience of pretty chill horror, with a fancy party at the top! 13 floors of puzzle 'platformer' action from 13 bitsyfolk. If you die, you can continue from the start of the last floor you were, or start from the bottom again. \n \n Organized by: @Ayolland \n \n Floors / Contributors: The Catacombs by Caeth -*- The Waterfall by Mono -*- Caution: Wet Floor by Enui -*- The Pit of _____ by Emma Daues -*- The Candlelit Garden by Emma -*- Dream Demon Hangout by Thatguynm -*- Crumbling Tower by Rose -*- Slimy..... by Em Lindqvist -*- Leaps of Faith by Nathan Wayward -*- Oh No! This is Under Construction!! by Onion -*- Sir Squiddington's Library by Tyedye105 -*- The Barren Belltower by Ripple -*- Mechanism by Sean -*- The Party by Ayolland and Friends \n \n Tileset adapted from Dracula's Manor by Adam SaltsmanMusic from Freya Campbell's album Outer Space. Additional sound taken from 99sounds.org"
	},
};

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
	for(var i in shuffledGames) {
		var gameId = shuffledGames[i];
		el.appendChild( makeGameCard(gameId) );
	}
}

var shufflePlayList = [];
var shuffleSelectList = [];

function makeShuffledGameList() {
	var list = [];
	for(var gameId in mixtape_games) {
		list.push(gameId);
	}
	list = shuffle(list);
	return list;
}

function shuffle(options) {
	var optionsShuffled = [];
	var optionsUnshuffled = options.slice();
	while(optionsUnshuffled.length > 0) {
		var i = Math.floor( Math.random() * optionsUnshuffled.length );
		optionsShuffled.push( optionsUnshuffled.splice(i,1)[0] );
	}
	return optionsShuffled;
}

function playRandomGame() {
	var gameId = shufflePlayList.pop();
	if(shufflePlayList.length <= 0) {
		shufflePlayList = makeShuffledGameList();
	}
	selectGame(gameId);
	playGame(gameId);
}

function selectRandomGame() {
	var gameId = shuffleSelectList.pop();
	if(shuffleSelectList.length <= 0) {
		shuffleSelectList = makeShuffledGameList();
	}
	selectGame(gameId);
}

function makeGameCard(gameId) {
	var game = mixtape_games[gameId];

	var card = document.createElement("button");
	card.onclick = function() {
		if(selectedGameId != gameId) {
			selectGame(gameId,slowTimer);
		}
		else {
			playGame(gameId);
		}
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
document.addEventListener('mousemove', function() {
	if (nextGameTimer) {
		clearTimeout(nextGameTimer);
		nextGameTimer = window.setTimeout(selectRandomGame, slowTimer);
	}
});

function selectGame(gameId,timer) {
	if(timer == undefined || timer == null)
		timer = fastTimer;

	console.log(selectedGameId);

	if(selectedGameId != null){
		document.getElementById("card_" + selectedGameId).classList.remove("selected_card");
		document.getElementById("select_screen").classList.remove(selectedGameId);
	}

	selectedGameId = gameId;

	var game = mixtape_games[gameId];

	var selectedCard = document.getElementById("card_" + gameId);
	selectedCard.classList.add("selected_card");
	selectedCard.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
	});

	document.getElementById("game_info_title").innerText = game.title;
	document.getElementById("game_info_author").innerHTML = game.author;
//	document.getElementById("game_info_img").src = "images/" + gameId + ".gif";
	document.getElementById("game_info_blurb").innerText = game.blurb;

//	document.getElementById("game_info_portfolio_link").href = game.portfolio;
//	document.getElementById("game_info_portfolio_author").innerHTML = game.author;
//	gonna take my horse to the old town road gonna ride til i cant ride no more

	document.getElementById("game_info_title").onclick = function() {
		playGame(gameId);
	};
//	document.getElementById("game_info_img").onclick = function() {
	//	playGame(gameId);
	//};
	document.getElementById("game_info_play_button").onclick = function() {
		playGame(gameId);
	};

	document.getElementById("select_screen").classList.add(selectedGameId);

	if(nextGameTimer != null)
		window.clearTimeout(nextGameTimer);
	nextGameTimer = window.setTimeout(selectRandomGame, timer);
}

function playGame(gameId) {
	var game = mixtape_games[gameId];

	if(nextGameTimer != null)
		window.clearTimeout(nextGameTimer);
	selectedGameId = gameId;

	// remove current game from randomization list
	if(shufflePlayList.indexOf(gameId) != -1) {
		shufflePlayList.splice(shufflePlayList.indexOf(gameId),1);
	}
	// regenerate randomization list if necessary
	if(shufflePlayList.length <= 0) {
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
	frame.onload = function() {
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
