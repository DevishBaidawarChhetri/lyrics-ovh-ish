const base_url = "https://api.lyrics.ovh";

const artists = [
	"3 doors down",
	"Metallica",
	"Bullet For My Valentine",
	"Blink 182",
	"Linkin Park",
	"MegaDeth",
	"DragonForce",
	"Slipknot",
	"Maroon 5",
	"Halsey",
	"Avenged Seven Fold",
	"One Republic",
	"Coldplay",
	"Ed Sheeran",
	"Twenty One Pilots",
	"Sia",
	"Selena Gomez",
	"The Beatles",
	"Pink Floyd",
	"Nirvana",
	"Deep Purple",
	"Eagles",
	"Black Sabbath",
	"Guns N Roses",
	"Red Hot Chili Peppers",
	"Bon Jovi",
	"Aerosmith",
];
const random = Math.floor(Math.random() * artists.length);
const artist = artists[random];

export const suggestedURL = () => `${base_url}/suggest/${artist}`;
export const viewLyricsURL = (artist, song) =>
	`${base_url}/v1/${artist}/${song}`;
export const searchURL = (query) => `${base_url}/suggest/${query}`;
