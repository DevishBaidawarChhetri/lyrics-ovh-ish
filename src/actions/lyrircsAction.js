import axios from "axios";
import { suggestedURL, viewLyricsURL } from "../api";

export const loadSuggested = () => async (dispatch) => {
	const suggestedData = await axios.get(suggestedURL());
	dispatch({
		type: "FETCH_SUGGESTED",
		payload: {
			suggested: suggestedData.data.data,
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
