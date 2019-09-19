var solo = true; // toggle this to switch between collab/solo data
var mixtape_games = solo ? {
	// solo
	slow_growing: {
		title: "Slow Growing",
		author: "Ebeth, @electronicbeth, ebethnorvell.com",
		src: "games/slow_growing.html",
		blurb: `
A small snail wants to have a big garden. 🐌🌱
`,
		colors: ['#35736C', '#9FE3AF'],
	},
	beckys_apple: {
		title: "Becky's Apple",
		author: "Em Lindqvist, @embotronic",
		src: "games/beckys_apple.html",
		blurb: `
When I was a kid, there was a big tree with pink apples in our yard.

One winter it snowed too hard, and the tree cracked down the middle because of the weight.

Nothing lasts forever.
`,
		colors: ['#ffc2c2', '#c43b56'],
	},
	space_bubble_cat: {
		title: "Space Bubble Cat",
		author: "Emma Daues, @siberianKhatru ",
		src: "games/space_bubble_cat.html",
		blurb: `
A very personal piece about a lonely cat who floats through space.
`,
		colors: ['#000000', '#FFFFFF'],
	},
	fever: {
		title: "The Fever",
		author: "A Yolland, @AYolland",
		src: "games/fever.html",
		blurb: `
I wanted to make this game because it was a story I could tell primarily with color, and because it is an issue close to my heart.

If you want to know more about coral bleaching, try globalcoralbleaching.org
`,
		colors: ['#1f9fa3', '#fff277'],
	},
	pretty_dark: {
		title: "It's Pretty Dark",
		author: "Brandon Thread, @threadsmind",
		src: "games/pretty_dark.html",
		blurb: `
You've arrived in a strange, new place...make your way through the long and winding maze, with only the light of your candle to help you navigate
`,
		colors: ['#5c5e5b', '#8ad47c'],
	},
	manster_mansion: {
		title: "A Night at Manster Mansion",
		author: "Onion, @leonionboi",
		src: "games/manster_mansion.html",
		blurb: `
Woken in the night by your boss, you must go uncover the murder at the mysterious Manster Mansion belonging to the most ruthless mafia clan in the world.
`,
		colors: ['#465378', '#ff847c'],
	},
	opus: {
		title: "Opus",
		author: "IAN MARTIN, @ianmart1n",
		src: "games/opus.html",
		blurb: `
The dreamy journey of an inventor in a rainy apocalypse.
`,
		colors: ['#000000', '#35609e'],
	},
	tea_for_two: {
		title: "Tea for Two",
		author: "Sean S. LeBlanc, @SeanSLeBlanc",
		src: "games/tea_for_two.html",
		blurb: `
A short experience about two friends and two teas!
`,
		colors: ['#ae8e9e', '#ebebc8'],
	},
} : {
	// collabs
	mystery_dungeon: {
		title: "BITSY MYSTERY DUNGEON",
		author: "",
		src: "games/mystery_dungeon.html",
		blurb: `
Come visit the strange underground!

The dungeon was built as an exquisite corpse - every room was constructed separately with only variables being shared between participants and the final layout of the maze was randomised.

The maze wraps round at the edges and you start with 2 Bits, the currency of the Mystery Dungeon. There's no overall win state, although there are some hidden quests.

Organized by @Ducklingsmith
Rooms:
<ul>
<li>4,255,246 by Marzipan Recognition Alloy</li>
<li>A Dark Place by Flowerditch</li>
<li>A River Apart by Rarelikeaunicorn</li>
<li>Alchemist by Nicole Voec</li>
<li>Bird Village by Sarah Gould</li>
<li>The Bits Coin Mine by Mozz</li>
<li>Chillzone by Ruin</li>
<li>The Crab Room by Emma Daues</li>
<li>Crows by Becklespinax</li>
<li>Crumpet Seller by Lenny Magner</li>
<li>Dive Bar/Back Alley by AYolland</li>
<li>Drifter's Crossing by Natalie Clayton</li>
<li>The Factory by Ian Martin</li>
<li>Hall X by Dan Lance</li>
<li>Haunted Hotel by W J Holly</li>
<li>Jborictu'a by Wyvy</li>
<li>Kaiju by Mark Wonnacott</li>
<li>Legend by Kai</li>
<li>Meet the Thom(p)sons by Peter Februar</li>
<li>Mushroom Forest by Teri</li>
<li>My First Bitsy by Sergio Cornaga</li>
<li>Pan's Dance Party by Pan</li>
<li>Port-o-Potties by Lumpen</li>
<li>Purple Beach by Em Lindqvist</li>
<li>The Red Library by David Mowatt</li>
<li>Reflection by Brandon Thread</li>
<li>Relaxzone by Onion</li>
<li>The Rift by Laiska</li>
<li>Saltwater Room by Marisol</li>
<li>Sewer Ballet by AshGary</li>
<li>Swamp Room by Ebeth</li>
<li>Ulgomogoth the Sizable by Skeleton Hugs</li>
<li>Vortex by Grey Burnett</li>
<li>Wishing Well by Sean S. LeBlanc</li>
</ul>
`,
		colors: ['#DEE3D6', '#345383'],
	},
	mystery_dungeon_2: {
		title: "BITSY MYSTERY DUNGEON 2",
		author: "",
		src: "games/mystery_dungeon_2.html",
		blurb: `
Come visit the strange underground again!

The dungeon was built as an exquisite corpse - every room was constructed separately with only variables being shared between participants and the final layout of the maze was randomised.

The maze wraps round at the edges and you start with 2 Bits, the currency of the Mystery Dungeon. There's no overall win state, although there are some hidden quests.

Organized by @Ducklingsmith
Rooms:
<ul>
<li>The Bizaar by David Mowatt</li>
<li>mf slime z0ne by Da Em Lindqvist</li>
<li>The Breezy Tree by Sarah Gould</li>
<li>terrible job at making a room by onion</li>
<li>Coco's Snake Pit by AYolland</li>
<li>The Cat Café by natrix</li>
<li>Emporiume ofe Forbiddene Itemes by Noah S. Brown</li>
<li>Super Bitsy 3D World by HexaBlu</li>
<li>tbd by brandon</li>
<li>The Minotaur King by wjhollyart</li>
<li>Rotating 3D Skull Zone by jodediah🐝holems</li>
<li>MinDun (The MiniDungeon) by Ripple</li>
<li>the mysterious mooonlit garden by dreamingamaris</li>
<li>Frozen Floor by Sergio Cornaga</li>
<li>Invisible Maze by Celeste Clark</li>
<li>Regents' Rise by Sean S. LeBlanc</li>
<li>City Area E by Ian Martin</li>
<li>balcony scene by Ardent Eliot Reinhard</li>
<li>River Crossing by cammySashimi</li>
<li>Star Lounge by Casino</li>
<li>Fine Dining by Grim (G.C. Baccaris)</li>
<li>Onion Park by Whirlybird</li>
<li>hall with bridge by Dan Lance</li>
<li>Have a cuppa by enui</li>
<li>archive room by Emery Patterson</li>
<li>skel by exzentia</li>
<li>tbc by Freya C</li>
<li>room 0 by mark wonnacott</li>
<li>Feast of Kings by Bar</li>
<li>The Shrieking Void by dumplingsquid</li>
<li>grumpy walls by caeth</li>
<li>goth night by nilson carroll</li>
<li>EGGBABE by TinyMinuet</li>
<li>repulsive magnets room by AshG</li>
<li>ai ai the spacelord is trapped by Becklespinax</li>
<li>rip slug by rumpel</li>
<li>Cave of the Pizzaria by Marty Kovach</li>
<li>koBOLD Coffee by Rose</li>
<li>insonoro/turba by municipal rung allowance</li>
<li>the witches hut by Ebeth</li>
<li>worm room by tom</li>
<li>portopotties v1.1 by lumpen</li>
<li>Kittey Paradise by sylvie</li>
<li>Crab Mafia by Emma D.</li>
<li>Deep Temple by adenator</li>
</ul>`,
		colors: ['#DEE3D6', '#345383'],
	},
	jimjam: {
		title: "The Bitsy Jim Jam",
		author: "",
		src: "games/jimjam.html",
		blurb: `
A virtual sleepover with the Bitsy community!

Each guest contributed a sprite of themselves to come to the party along with a tile and item.

Organized by @Electronicbeth

Music by Lenny and BedWords.

Party Guests: Lenny, Ducklingsmith, AshGary (special thanks for coming up with the name Jim Jam!), Onion, Em, Spdrcstl, Candle, Claire Morley, Jctwood, Adam Le Doux, Ayolland, Emma, Unity, Tim, Haraiva, Meowchelle, Life on Luna, Fen, Rose, Sarah Gould, Pan, Wyvy, Josie, Leno, Quin, Enui, Hunter, ._a & Ebeth.
`,
		colors: ['#FEFDC1', '#9b2c39'],
	},
	camp: {
		title: "Bitsy Camp",
		author: "",
		src: "games/camp.html",
		blurb: `
Come on a camping trip with members of the Bitsy Discord! Each camper contributed a sprite of themselves and an item.

Organized by @AndImLenny

Campers: Nina, NoahBoa, Ripple, mbtzl, Sean, Onion, Florencia Rumpel Rodriguez, Rose, Caeth & Ebeth.
`,
		colors: ['#A67551', '#FFA860'],
	},
	tower: {
		title: "Spook Tower",
		author: "",
		src: "games/tower.html",
		blurb: `
Welcome to SPOOK TOWER, a relentless experience of pretty chill horror, with a fancy party at the top! 13 floors of puzzle 'platformer' action from 13 bitsyfolk. If you die, you can continue from the start of the last floor you were, or start from the bottom again.

Organized by: @Ayolland

Floors / Contributors:
<ul>
<li>The Catacombs by Caeth</li>
<li>The Waterfall by Mono</li>
<li>Caution: Wet Floor by Enui</li>
<li>The Pit of _____ by Emma Daues</li>
<li>The Candlelit Garden by Emma</li>
<li>Dream Demon Hangout by Thatguynm</li>
<li>Crumbling Tower by Rose</li>
<li>Slimy..... by Em Lindqvist</li>
<li>Leaps of Faith by Nathan Wayward</li>
<li>Oh No! This is Under Construction!! by Onion</li>
<li>Sir Squiddington's Library by Tyedye105</li>
<li>The Barren Belltower by Ripple</li>
<li>Mechanism by Sean</li>
<li>The Party by Ayolland and Friends</li>
</ul>

Tileset adapted from Dracula's Manor by Adam SaltsmanMusic from Freya Campbell's album Outer Space. Additional sound taken from 99sounds.org
`,
		colors: ['#1F031D', '#F31700'],
	},
};
