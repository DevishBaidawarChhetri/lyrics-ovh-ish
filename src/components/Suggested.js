import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSuggested } from "../actions/lyrircsAction";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Suggested = () => {
	// Fetch Data[dispatch]
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadSuggested());
	}, [dispatch]);

	// Get Data from Store
	const { suggested, searched } = useSelector((state) => state.lyricsOVH);

	return (
		<>
			{searched ? (
				Object.keys(searched).length !== 0 ? (
					<section className="card-holder">
						<h2>Searched</h2>
						{searched.map((song) => (
							<section className="card" key={song.id}>
								<section className="card-img">
									<img src={song.album.cover_big} alt={song.album.title} />
									<div className="content">
										<h2>{song.title}</h2>
										<p style={{ fontSize: "1.2rem" }}>
											Artist: {song.artist.name}
										</p>
										<p>Album: {song.album.title}</p>
									</div>
								</section>
								<section className="card-description">
									<section className="player">
										<img src={song.artist.picture} alt={song.artist.name} />
										<audio controls src={song.preview}></audio>
									</section>
								</section>
								<section className="button">
									<Link to={`/lyrics/${song.artist.name}/${song.title}`}>
										Read Lyrics &raquo;
									</Link>
								</section>
							</section>
						))}
					</section>
				) : (
					<h1 className="error">Search Query not found.</h1>
				)
			) : (
				""
			)}
			{suggested ? (
				Object.keys(suggested).length !== 0 ? (
					<section className="card-holder">
						{suggested.map((song) => (
							<section className="card" key={song.id}>
								<section className="card-img">
									<img src={song.album.cover_big} alt={song.album.title} />
									<div className="content">
										<h2>{song.title}</h2>
										<p style={{ fontSize: "1.2rem" }}>
											Artist: {song.artist.name}
										</p>
										<p>Album: {song.album.title}</p>
									</div>
								</section>
								<section className="card-description">
									<section className="player">
										<img src={song.artist.picture} alt={song.artist.name} />
										<audio controls src={song.preview}></audio>
									</section>
								</section>
								<section className="button">
									<Link to={`/lyrics/${song.artist.name}/${song.title}`}>
										Read Lyrics &raquo;
									</Link>
								</section>
							</section>
						))}
					</section>
				) : (
					<Loading />
				)
			) : (
				<h1 className="error">Oops...Something went wrong...</h1>
			)}
		</>
	);
};

export default Suggested;
