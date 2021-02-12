const base_url = "https://api.lyrics.ovh";
export const suggestedURL = () => `${base_url}/suggest/metallica`;
// `${base_url}/suggest/bullet%20for%20my%20valentine`;
export const viewLyricsURL = (artist, song) =>
	`${base_url}/v1/${artist}/${song}/`;
export const searchURL = (query) => `${base_url}/suggest/${query}`;
