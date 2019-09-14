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
<li>David Mowatt by The Bizaar</li>
<li>Em Lindqvist by Da mf slime z0ne</li>
<li>Sarah Gould by The Breezy Tree</li>
<li>onion by terrible job at making a room</li>
<li>Linda Clark by tbd</li>
<li>AYolland by Coco's Snake Pit</li>
<li>natrix by The Cat Café</li>
<li>Noah S. Brown by Emporiume ofe Forbiddene Itemes</li>
<li>HexaBlu by Super Bitsy 3D World</li>
<li>brandon by tbd</li>
<li>wjhollyart by The Minotaur King</li>
<li>jodediah🐝holems by Rotating 3D Skull Zone</li>
<li>Ripple by MinDun (The MiniDungeon)</li>
<li>dreamingamaris by the mysterious mooonlit garden</li>
<li>Sergio Cornaga by Frozen Floor</li>
<li>Celeste Clark by Invisible Maze</li>
<li>Sean S. LeBlanc by Regents' Rise</li>
<li>Ian Martin by City Area E</li>
<li>Ardent Eliot Reinhard by balcony scene</li>
<li>cammySashimi by River Crossing</li>
<li>Casino by Star Lounge</li>
<li>Grim (G.C. Baccaris) by Fine Dining</li>
<li>mbtzl by tbd</li>
<li>Whirlybird  by Onion Park</li>
<li>Dan Lance by hall with bridge</li>
<li>enui by Have a cuppa</li>
<li>Emery Patterson by archive room</li>
<li>exzentia by skel</li>
<li>Freya C by tbc</li>
<li>mark wonnacott by room 0</li>
<li>Bar by Feast of Kings</li>
<li>dumplingsquid by The Shrieking Void</li>
<li>caeth by grumpy walls</li>
<li>nilson carroll by goth night</li>
<li>TinyMinuet by EGGBABE</li>
<li>AshG by repulsive magnets room</li>
<li>Becklespinax by ai ai the spacelord is trapped</li>
<li>rumpel by rip slug</li>
<li>Marty Kovach by Cave of the Pizzaria</li>
<li>Rose by koBOLD  Coffee</li>
<li>municipal rung allowance by insonoro/turba</li>
<li>Ebeth by the witches hut</li>
<li>tom by worm room</li>
<li>lumpen by portopotties v1.1</li>
<li>sylvie by Kittey Paradise</li>
<li>Emma D. by Crab Mafia</li>
<li>adenator by Deep Temple</li>
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
