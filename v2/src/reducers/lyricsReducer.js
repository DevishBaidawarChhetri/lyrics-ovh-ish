const initialState = {
	suggested: [],
	readLyrics: [],
	searched: [],
};

const lyricsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_SUGGESTED":
			return {
				...state,
				suggested: action.payload.suggested,
			};
		case "FETCH_LYRICS":
			return {
				...state,
				readLyrics: action.payload.readLyrics,
			};
		case "FETCH_SEARCH":
			return {
				...state,
				searched: action.payload.searched,
			};
		case "CLEAR_SEARCHED":
			return {
				...state,
				searched: [],
			};
		default:
			return { ...state };
	}
};
export default lyricsReducer;
