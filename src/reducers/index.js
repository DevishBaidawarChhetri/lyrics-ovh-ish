// For Multiple Reducers

import { combineReducers } from "redux";
import lyricsReducer from "./lyricsReducer";

const rootReducer = combineReducers({
	lyricsOVH: lyricsReducer,
});

export default rootReducer;
