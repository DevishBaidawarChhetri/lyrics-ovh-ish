const base_url = "https://api.lyrics.ovh/v1";
const suggest_base_url = "https://api.lyrics.ovh";

export const suggestedURL = () => `${suggest_base_url}/suggest/bullet%20for%20my%20valentine`;
export const viewLyricsURL = (artist, song) => `${base_url}/${artist}/${song}`;
