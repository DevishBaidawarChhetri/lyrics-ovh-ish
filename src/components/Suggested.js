import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSuggested, loadLyrics } from "../actions/lyrircsAction";
import { Link } from "react-router-dom";

const Suggested = () => {
	// Fetch Data[dispatch]
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadSuggested());
	}, [dispatch]);

	// Get Data from Store
	const { suggested } = useSelector((state) => state.lyricsOVH);

	return (
		<>
			<section className="card-holder">
				{suggested.map((song) => (
					<section className="card" key={song.id}>
						<section className="card-img">
							<img src={song.album.cover_big} alt={song.album.title} />
							<div className="content">
								<h2>{song.title}</h2>
								<p style={{ fontSize: "1.2rem" }}>Artist: {song.artist.name}</p>
								<p>Album: {song.album.title}</p>
							</div>
						</section>
						<section className="card-description">
							<section className="player">
								<img src={song.artist.picture} alt={song.artist.name} />
								{/* <button>▷ Listen 30 seconds</button> */}
								<audio controls src={song.preview}></audio>
							</section>
						</section>
						<section className="button">
							{/* <button onClick={() => readLyrics(song.artist.name, song.title)}>
							</button> */}
								<Link to={`/lyrics/${song.artist.name}/${song.title}`}>
									Read Lyrics &raquo;
								</Link>
						</section>
					</section>
				))}
			</section>
		</>
	);
};

export default Suggested;
