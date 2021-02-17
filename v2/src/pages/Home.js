import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Song from "../components/Song";
import { loadSuggested } from "../actions/lyricsAction";
import { toast } from "react-toastify";

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadSuggested());
		toast.success(
			"Hello there, to view `ARTIST` and their `SONGS`, please hover your mouse pointer or click on album picture."
		);
	}, [dispatch]);

	const { suggested, searched } = useSelector((state) => state.lyricsOVH);
	return (
		<SongLists>
			{Object.keys(searched).length ? (
				<>
					<h2>Possible Results</h2>
					<Songs>
						{searched.map((song) => (
							<Song
								key={song.id}
								id={song.id}
								artist_name={song.artist.name}
								album_cover_pic={song.album.cover}
								artist_picture={song.artist.picture}
								album_title={song.album.title}
								song_title={song.title}
								song_preview={song.preview}
							/>
						))}
					</Songs>
				</>
			) : (
				""
			)}
			<h2>Suggested Songs</h2>
			<Songs>
				{suggested.map((song) => (
					<Song
						key={song.id}
						id={song.id}
						artist_name={song.artist.name}
						album_cover_pic={song.album.cover_xl}
						artist_picture={song.artist.picture_xl}
						album_title={song.album.title}
						song_title={song.title}
						song_preview={song.preview}
					/>
				))}
			</Songs>
		</SongLists>
	);
};

const SongLists = styled(motion.section)`
	padding: 0 5rem 5rem;
	h2 {
		padding: 0 3.5rem 2rem;
		color: #5e8d90;
	}
	@media screen and (max-width: 768px) {
		padding: 0;
		h2 {
			text-align: center;
			padding-bottom: 1rem;
		}
	}
`;
const Songs = styled(motion.section)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	padding: 0 3.5rem 3.5rem;
`;
export default Home;
