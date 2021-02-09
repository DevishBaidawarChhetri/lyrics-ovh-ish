import axios from "axios";
import { suggestedURL } from "../api";

export const loadSuggested = () => async (dispatch) => {
	const suggestedData = await axios.get(suggestedURL());
	dispatch({
		type: "FETCH_SUGGESTED",
		payload: {
			suggested: suggestedData.data.data,
		},
	});
};
