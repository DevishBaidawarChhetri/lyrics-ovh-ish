const defaultState = {
	suggested: [],
	searched: [],
	readLyrics: [],
};

const lyricsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "FETCH_SUGGESTED":
			return {
				...state,
				suggested: action.payload.suggested,
				searched: action.payload.searched,
			};
		case "FETCH_LYRICS":
			return {
				...state,
				readLyrics: action.payload.readLyrics,
			};
		default:
			return { ...state };
	}
};

export default lyricsReducer;
