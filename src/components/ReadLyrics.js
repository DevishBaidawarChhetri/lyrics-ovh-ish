import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ReadLyrics = () => {
	const location = useParams();
	// console.log(location);
	const readLyrics = useSelector((state) => state.lyricsOVH.readLyrics);
	return (
		<div className="lyrics">
			<h1>
				<strong>
					{location.artist} - {location.song}
				</strong>
			</h1>
			<pre>{readLyrics}</pre>
		</div>
	);
};

export default ReadLyrics;
