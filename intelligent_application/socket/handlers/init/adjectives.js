const ADJECTIVES = [
  "Gray",
  "Red",
  "Pink",
  "Crimson",
  "Carnelian",
  "Orange",
  "Cream",
  "Green",
  "Viridian",
  "Aquamarine",
  "Cyan",
  "Blue",
  "Cerulean",
  "Indigo",
  "Navy",
  "Violet",
  "Purple",
  "Lavender",
  "Magenta",
  "Rainbow",
  "Iridescent",
  "Spectrum",
  "Prism",
  "Bold",
  "Vivid",
  "Pale",
  "Clear",
  "Glass",
  "Translucent",
  "Misty",
  "Gold",
  "Silver",
  "Copper",
  "Bronze",
  "Steel",
  "Iron",
  "Brass",
  "Mercury",
  "Zinc",
  "Chrome",
  "Platinum",
  "Titanium",
  "Nickel",
  "Lead",
  "Pewter",
  "Rust",
  "Metal",
  "Stone",
  "Quartz",
  "Granite",
  "Marble",
  "Alabaster",
  "Agate",
  "Jasper",
  "Pebble",
  "Pyrite",
  "Crystal",
  "Geode",
  "Obsidian",
  "Mica",
  "Flint",
  "Sand",
  "Gravel",
  "Boulder",
  "Basalt",
  "Ruby",
  "Beryl",
  "Scarlet",
  "Citrine",
  "Sulpher",
  "Topaz",
  "Amber",
  "Emerald",
  "Malachite",
  "Jade",
  "Abalone",
  "Lapis",
  "Sapphire",
  "Diamond",
  "Peridot",
  "Gem",
  "Jewel",
  "Bevel",
  "Coral",
  "Jet",
  "Wood",
  "Tree",
  "Cherry",
  "Maple",
  "Cedar",
  "Branch",
  "Bramble",
  "Rowan",
  "Ash",
  "Fir",
  "Pine",
  "Cactus",
  "Alder",
  "Grove",
  "Forest",
  "Jungle",
  "Palm",
  "Mulberry",
  "Juniper",
  "Vine",
  "Ivy",
  "Rose",
  "Lily",
  "Tulip",
  "Daffodil",
  "Honeysuckle",
  "Fuschia",
  "Hazel",
  "Walnut",
  "Almond",
  "Lime",
  "Lemon",
  "Apple",
  "Blossom",
  "Bloom",
  "Crocus",
  "Rose",
  "Buttercup",
  "Dandelion",
  "Iris",
  "Carnation",
  "Fern",
  "Root",
  "Branch",
  "Leaf",
  "Seed",
  "Flower",
  "Petal",
  "Pollen",
  "Orchid",
  "Mangrove",
  "Cypress",
  "Sequoia",
  "Sage",
  "Heather",
  "Snapdragon",
  "Daisy",
  "Mountain",
  "Hill",
  "Alpine",
  "Chestnut",
  "Valley",
  "Glacier",
  "Forest",
  "Grove",
  "Glen",
  "Tree",
  "Thorn",
  "Stump",
  "Desert",
  "Canyon",
  "Dune",
  "Oasis",
  "Mirage",
  "Well",
  "Spring",
  "Meadow",
  "Field",
  "Prairie",
  "Grass",
  "Tundra",
  "Island",
  "Shore",
  "Sand",
  "Shell",
  "Surf",
  "Wave",
  "Foam",
  "Tide",
  "Lake",
  "River",
  "Brook",
  "Stream",
  "Pool",
  "Pond",
  "Sun",
  "Sprinkle",
  "Shade",
  "Shadow",
  "Rain",
  "Cloud",
  "Storm",
  "Hail",
  "Snow",
  "Sleet",
  "Thunder",
  "Lightning",
  "Wind",
  "Hurricane",
  "Typhoon",
  "Dawn",
  "Sunrise",
  "Morning",
  "Noon",
  "Twilight",
  "Evening",
  "Sunset",
  "Midnight",
  "Night",
  "Sky",
  "Star",
  "Stellar",
  "Comet",
  "Nebula",
  "Quasar",
  "Solar",
  "Lunar",
  "Planet",
  "Meteor",
  "Sprout",
  "Pear",
  "Plum",
  "Kiwi",
  "Berry",
  "Apricot",
  "Peach",
  "Mango",
  "Pineapple",
  "Coconut",
  "Olive",
  "Root",
  "Plain",
  "Fancy",
  "Stripe",
  "Spot",
  "Speckle",
  "Spangle",
  "Ring",
  "Band",
  "Blaze",
  "Paint",
  "Pinto",
  "Shade",
  "Tabby",
  "Brindle",
  "Patch",
  "Calico",
  "Checker",
  "Dot",
  "Pattern",
  "Glitter",
  "Glimmer",
  "Shimmer",
  "Dull",
  "Dust",
  "Dirt",
  "Glaze",
  "Scratch",
  "Quick",
  "Swift",
  "Fast",
  "Slow",
  "Clever",
  "Fire",
  "Flicker",
  "Flash",
  "Spark",
  "Ember",
  "Coal",
  "Flame",
  "Sugar",
  "Spice",
  "Cake",
  "Pie",
  "Cookie",
  "Candy",
  "Caramel",
  "Spiral",
  "Round",
  "Jelly",
  "Square",
  "Narrow",
  "Long",
  "Short",
  "Small",
  "Tiny",
  "Big",
  "Giant",
  "Great",
  "Atom",
  "Peppermint",
  "Mint",
  "Butter",
  "Fringe",
  "Rag",
  "Quilt",
  "Truth",
  "Lie",
  "Holy",
  "Curse",
  "Noble",
  "Sly",
  "Brave",
  "Shy",
  "Lava",
  "Leather",
  "Fantasy",
  "Keen",
  "Luminous",
  "Feather",
  "Sticky",
  "Gossamer",
  "Rattle",
  "Silk",
  "Satin",
  "Cord",
  "Denim",
  "Flannel",
  "Plaid",
  "Wool",
  "Linen",
  "Silent",
  "Flax",
  "Weak",
  "Valiant",
  "Fierce",
  "Gentle",
  "Rhinestone",
  "Splash",
  "North",
  "South",
  "East",
  "West",
  "Summer",
  "Winter",
  "Autumn",
  "Spring",
  "Season",
  "Equinox",
  "Solstice",
  "Paper",
  "Motley",
  "Torch",
  "Ballistic",
  "Freckle",
  "Wild",
  "Free",
  "Chain",
  "Sheer",
  "Crazy",
  "Mad",
  "Candle",
  "Ribbon",
  "Lace",
  "Notch",
  "Wax",
  "Shine",
  "Shallow",
  "Deep",
  "Bubble",
  "Harvest",
  "Fluffy",
  "Venom",
  "Boom",
  "Slash",
  "Rune",
  "Cold",
  "Quill",
  "Love",
  "Garnet",
  "Zircon",
  "Power",
  "Bone",
  "Void",
  "Horn",
  "Glory",
  "Cyber",
  "Nova",
  "Hot",
  "Helix",
  "Cosmic",
  "Quark",
  "Quiver",
  "Holly",
  "Clover",
  "Polar",
  "Regal",
  "Ripple",
  "Wheat",
  "Phantom",
  "Dew",
  "Chisel",
  "Crack",
  "Chatter",
  "Laser",
  "Foil",
  "Tin",
  "Clever",
  "Treasure",
  "Maze",
  "Twisty",
  "Curly",
  "Fortune",
  "Fate",
  "Destiny",
  "Cute",
  "Slime",
  "Ink",
  "Disco",
  "Plume",
  "Time",
  "Psychadelic",
  "Relic",
  "Fossil",
  "Water",
  "Savage",
  "Ancient",
  "Rapid",
  "Road",
  "Trail",
  "Stitch",
  "Button",
  "Bow",
  "Nimble",
  "Zest",
  "Sour",
  "Bitter",
  "Phase",
  "Fan",
  "Frill",
  "Plump",
  "Pickle",
  "Mud",
  "Puddle",
  "Pond",
  "River",
  "Spring",
  "Stream",
  "Battle",
  "Arrow",
  "Plume",
  "Roan",
  "Pitch",
  "Cat",
  "Dog",
  "Horse",
  "Lizard",
  "Bird",
  "Fish",
  "Saber",
  "Scythe",
  "Sharp",
  "Soft",
  "Razor",
  "Neon",
  "Dandy",
  "Weed",
  "Swamp",
  "Marsh",
  "Bog",
  "Peat",
  "Moor",
  "Muck",
  "Mire",
  "Grave",
  "Fair",
  "Just",
  "Brick",
  "Puzzle",
  "Skitter",
  "Prong",
  "Fork",
  "Dent",
  "Dour",
  "Warp",
  "Luck",
  "Coffee",
  "Split",
  "Chip",
  "Hollow",
  "Heavy",
  "Legend",
  "Hickory",
  "Mesquite",
  "Nettle",
  "Rogue",
  "Charm",
  "Prickle",
  "Bead",
  "Sponge",
  "Whip",
  "Bald",
  "Frost",
  "Fog",
  "Oil",
  "Veil",
  "Cliff",
  "Volcano",
  "Rift",
  "Maze",
  "Proud",
  "Dew",
  "Mirror",
  "Shard",
  "Salt",
  "Pepper",
  "Honey",
  "Thread",
  "Bristle",
  "Ripple",
  "Glow",
  "Zenith",
];

module.exports = ADJECTIVES;
