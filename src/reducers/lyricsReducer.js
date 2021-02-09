const defaultState = {
	suggested: [],
	searched: [],
};

const lyricsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "FETCH_SUGGESTED":
			return {
				...state,
				suggested: action.payload.suggested,
				searched: action.payload.searched,
			};
		default:
			return { ...state };
	}
};

export default lyricsReducer;
