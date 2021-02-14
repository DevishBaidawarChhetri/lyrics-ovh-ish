import axios from "axios";
import { suggestedURL, viewLyricsURL, searchURL } from "../api";

export const loadSuggested = () => async (dispatch) => {
	const suggestedURLdata = await axios.get(suggestedURL());
	dispatch({
		type: "FETCH_SUGGESTED",
		payload: {
			suggested: suggestedURLdata.data.data,
		},
	});
};

export const loadLyrics = (artist, song) => async (dispatch) => {
	const viewLyricsData = await axios.get(viewLyricsURL(artist, song));
	dispatch({
		type: "FETCH_LYRICS",
		payload: {
			readLyrics: viewLyricsData.data.lyrics,
		},
	});
};

export const searchSong = (query) => async (dispatch) => {
	const viewSearchData = await axios.get(searchURL(query));
	dispatch({
		type: "FETCH_SEARCH",
		payload: {
			searched: viewSearchData.data.data,
		},
	});
};
