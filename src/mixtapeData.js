var solo = false; // toggle this to switch between collab/solo data
var mixtape_games = solo ? {
	// solo
	slow_growing: {
		title: "Slow Growing",
		author: "Ebeth, @electronicbeth, ebethnorvell.com",
		src: "games/slow_growing.html",
		blurb: "A small snail wants to have a big garden. 🐌🌱",
		colors: ['#35736C', '#9FE3AF'],
	},
	beckys_apple: {
		title: "Becky's Apple",
		author: "Em Lindqvist, @embotronic",
		src: "games/beckys_apple.html",
		blurb: "When I was a kid, there was a big tree with pink apples in our yard. One winter it snowed too hard, and the tree cracked down the middle because of the weight. Nothing lasts forever.",
		colors: ['#ffc2c2', '#fa7d95'],
	},
	space_bubble_cat: {
		title: "Space Bubble Cat",
		author: "Emma Daues, @siberianKhatru ",
		src: "games/space_bubble_cat.html",
		blurb: "A very personal piece about a lonely cat who floats through space.",
		colors: ['#000000', '#FFFFFF'],
	},
	fever: {
		title: "The Fever",
		author: "A Yolland, @AYolland",
		src: "games/fever.html",
		blurb: "I wanted to make this game because it was a story I could tell primarily with color, and because it is an issue close to my heart. If you want to know more about coral bleaching, try globalcoralbleaching.org",
		colors: ['#13d1d9', '#fff277'],
	},
	pretty_dark: {
		title: "It's Pretty Dark",
		author: "Brandon Thread, @threadsmind",
		src: "games/pretty_dark.html",
		blurb: "You've arrived in a strange, new place...make your way through the long and winding maze, with only the light of your candle to help you navigate",
		colors: ['#5c5e5b', '#8ad47c'],
	},
	manster_mansion: {
		title: "A Night at Manster Mansion",
		author: "Onion, @leonionboi",
		src: "games/manster_mansion.html",
		blurb: "Woken in the night by your boss, you must go uncover the murder at the mysterious Manster Mansion belonging to the most ruthless mafia clan in the world.",
		colors: ['#465378', '#ff847c'],
	},
	opus: {
		title: "Opus",
		author: "IAN MARTIN, @ianmart1n",
		src: "games/opus.html",
		blurb: "The dreamy journey of an inventor in a rainy apocalypse.",
		colors: ['#000000', '#35609e'],
	},
	tea_for_two: {
		title: "Tea for Two",
		author: "Sean S. LeBlanc, @SeanSLeBlanc",
		src: "games/tea_for_two.html",
		blurb: "A short experience about two friends and two teas!",
		colors: ['#ae8e9e', '#ebebc8'],
	},
} : {
	// collabs
	mystery_dungeon: {
		title: "BITSY MYSTERY DUNGEON",
		author: "",
		src: "games/mystery_dungeon.html",
		blurb: "Come visit the strange underground! The dungeon was built as an exquisite corpse - every room was constructed separately with only variables being shared between participants and the final layout of the maze was randomised. The maze wraps round at the edges and you start with 2 Bits, the currency of the Mystery Dungeon. There's no overall win state, although there are some hidden quests.\n \n Organized by @Ducklingsmith \n \n Rooms: 4,255,246 by Marzipan Recognition Alloy -*- A Dark Place by Flowerditch -*- A River Apart by Rarelikeaunicorn -*- Alchemist by Nicole Voec -*- Bird Village by Sarah Gould -*- The Bits Coin Mine by Mozz -*- Chillzone by Ruin -*- The Crab Room by Emma Daues -*- Crows by Becklespinax -*- Crumpet Seller by Lenny Magner -*- Dive Bar/Back Alley by AYolland -*- Drifter's Crossing by Natalie Clayton -*- The Factory by Ian Martin -*- Hall X by Dan Lance -*- Haunted Hotel by W J Holly -*- Jborictu'a by Wyvy -*- Kaiju by Mark Wonnacott -*- Legend by Kai -*- Meet the Thom(p)sons by Peter Februar -*- Mushroom Forest by Teri -*- My First Bitsy by Sergio Cornaga -*- Pan's Dance Party by Pan -*- Port-o-Potties by Lumpen -*- Purple Beach by Em Lindqvist -*- The Red Library by David Mowatt -*- Reflection by Brandon Thread -*- Relaxzone by Onion -*- The Rift by Laiska -*- Saltwater Room by Marisol -*- Sewer Ballet by AshGary -*- Swamp Room by Ebeth -*- Ulgomogoth the Sizable by Skeleton Hugs -*- Vortex by Grey Burnett -*- Wishing Well by Sean S. LeBlanc",
		colors: ['#DEE3D6', '#567CBD'],
	},
	mystery_dungeon_2: {
		title: "BITSY MYSTERY DUNGEON 2",
		author: "",
		src: "games/mystery_dungeon_2.html",
		blurb: "Come visit the strange underground! The dungeon was built as an exquisite corpse - every room was constructed separately with only variables being shared between participants and the final layout of the maze was randomised. The maze wraps round at the edges and you start with 2 Bits, the currency of the Mystery Dungeon. There's no overall win state, although there are some hidden quests.\n \n Organized by @Ducklingsmith \n \n Rooms: 4,255,246 by Marzipan Recognition Alloy -*- A Dark Place by Flowerditch -*- A River Apart by Rarelikeaunicorn -*- Alchemist by Nicole Voec -*- Bird Village by Sarah Gould -*- The Bits Coin Mine by Mozz -*- Chillzone by Ruin -*- The Crab Room by Emma Daues -*- Crows by Becklespinax -*- Crumpet Seller by Lenny Magner -*- Dive Bar/Back Alley by AYolland -*- Drifter's Crossing by Natalie Clayton -*- The Factory by Ian Martin -*- Hall X by Dan Lance -*- Haunted Hotel by W J Holly -*- Jborictu'a by Wyvy -*- Kaiju by Mark Wonnacott -*- Legend by Kai -*- Meet the Thom(p)sons by Peter Februar -*- Mushroom Forest by Teri -*- My First Bitsy by Sergio Cornaga -*- Pan's Dance Party by Pan -*- Port-o-Potties by Lumpen -*- Purple Beach by Em Lindqvist -*- The Red Library by David Mowatt -*- Reflection by Brandon Thread -*- Relaxzone by Onion -*- The Rift by Laiska -*- Saltwater Room by Marisol -*- Sewer Ballet by AshGary -*- Swamp Room by Ebeth -*- Ulgomogoth the Sizable by Skeleton Hugs -*- Vortex by Grey Burnett -*- Wishing Well by Sean S. LeBlanc",
		colors: ['#DEE3D6', '#567CBD'],
	},
	jimjam: {
		title: "The Bitsy Jim Jam",
		author: "",
		src: "games/jimjam.html",
		blurb: "A virtual sleepover with the Bitsy community! Each guest contributed a sprite of themselves to come to the party along with a tile and item. \n \n Organized by @Electronicbeth \n \n Music by Lenny and BedWords. \n \n Party Guests: Lenny, Ducklingsmith, AshGary (special thanks for coming up with the name Jim Jam!), Onion, Em, Spdrcstl, Candle, Claire Morley, Jctwood, Adam Le Doux, Ayolland, Emma, Unity, Tim, Haraiva, Meowchelle, Life on Luna, Fen, Rose, Sarah Gould, Pan, Wyvy, Josie, Leno, Quin, Enui, Hunter, ._a & Ebeth.",
		colors: ['#FEFDC1', '#D15361'],
	},
	camp: {
		title: "Bitsy Camp",
		author: "",
		src: "games/camp.html",
		blurb: "Come on a camping trip with members of the Bitsy Discord! Each camper contributed a sprite of themselves and an item. \n \n Organized by @AndImLenny \n \n Campers: Nina, NoahBoa, Ripple, mbtzl, Sean, Onion, Florencia Rumpel Rodriguez, Rose, Caeth & Ebeth.",
		colors: ['#A67551', '#FFA860'],
	},
	tower: {
		title: "Spook Tower",
		author: "",
		src: "games/tower.html",
		blurb: "Welcome to SPOOK TOWER, a relentless experience of pretty chill horror, with a fancy party at the top! 13 floors of puzzle 'platformer' action from 13 bitsyfolk. If you die, you can continue from the start of the last floor you were, or start from the bottom again. \n \n Organized by: @Ayolland \n \n Floors / Contributors: The Catacombs by Caeth -*- The Waterfall by Mono -*- Caution: Wet Floor by Enui -*- The Pit of _____ by Emma Daues -*- The Candlelit Garden by Emma -*- Dream Demon Hangout by Thatguynm -*- Crumbling Tower by Rose -*- Slimy..... by Em Lindqvist -*- Leaps of Faith by Nathan Wayward -*- Oh No! This is Under Construction!! by Onion -*- Sir Squiddington's Library by Tyedye105 -*- The Barren Belltower by Ripple -*- Mechanism by Sean -*- The Party by Ayolland and Friends \n \n Tileset adapted from Dracula's Manor by Adam SaltsmanMusic from Freya Campbell's album Outer Space. Additional sound taken from 99sounds.org",
		colors: ['#1F031D', '#F31700'],
	},
};
