import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSuggested } from "../actions/lyrircsAction";

const Suggested = () => {
	// Fetch Data[dispatch]
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadSuggested());
	}, [dispatch]);

	// Get Data from Store
	const suggested = useSelector((state) => state.lyricsOVH.suggested);

	return (
		<section class="card-holder">
			{suggested.map((song) => (
				<section class="card" key={song.id}>
					<section class="card-img">
						<img src={song.album.cover_big} alt={song.album.title} />
						<div class="content">
							<h2>{song.title}</h2>
							<p style={{ fontSize: "1.2rem" }}>
								Artist: <strong>{song.artist.name}</strong>
							</p>
							<p>
								<strong>Album: {song.album.title}</strong>
							</p>
						</div>
					</section>
					<section class="card-description">
						<section class="player">
							<img src={song.artist.picture} alt={song.artist.name} />
							{/* <button>▷ Listen 30 seconds</button> */}
							<audio controls src={song.preview}></audio>
						</section>
					</section>
					<section class="button">
						<button>Read Lyrics &raquo;</button>
					</section>
				</section>
			))}
		</section>
	);
};

export default Suggested;
