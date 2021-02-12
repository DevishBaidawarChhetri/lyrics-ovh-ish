import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadLyrics } from "../actions/lyrircsAction";
import Loading from "./Loading";

const ReadLyrics = () => {
	const { artist, song } = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadLyrics(artist, song));
	}, [artist, song]);

	const readLyrics = useSelector((state) => state.lyricsOVH.readLyrics);
	return (
		<div className="lyrics">
			<h1>
				<strong>
					{artist} - {song}
				</strong>
			</h1>
			{readLyrics.length == 0 ? (
				<Loading />
			) : Object.keys(readLyrics).length !== 0 ? (
				<pre>{readLyrics}</pre>
			) : (
				<p className="error">
					Sorry, lyrics not found in server. <br />
					Damn this API!
				</p>
			)}
		</div>
	);
};

export default ReadLyrics;
