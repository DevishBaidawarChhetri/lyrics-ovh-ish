import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { loadLyrics, searchSong } from "../actions/lyricsAction";
import Loading from "./Loading";

const ReadLyrics = () => {
	const dispatch = useDispatch();
	const { id, artist_name, song_title } = useParams();
	const u_id = parseInt(id);

	// Search Song
	useEffect(() => {
		dispatch(searchSong(`${artist_name} ${song_title}`));
	}, [artist_name, song_title]);

	// Select Song
	const result = useSelector((state) => state.lyricsOVH.searched);
	const obj = result.find((song) => song.id == u_id);

	// Fetch Lyrics
	useEffect(() => {
		dispatch(loadLyrics(artist_name, song_title));
		toast.success(`You're now reading: "${song_title}" by "${artist_name}".`);
	}, [artist_name, song_title]);

	const readLyrics = useSelector(
		(state) => state.lyricsOVH.readLyrics
	).toString();
	const formatedData = readLyrics.replace(/(\r\n|\n|\r)/gm, "<br/>");
	const container = {
		hidden: { x: 100, opacity: 0 },
		show: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 1,
			},
		},
	};

	const item = {
		hidden: { x: -100, opacity: 0 },
		show: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 2,
			},
		},
	};

	return obj !== undefined ? (
		<StyledLyrics>
			<motion.h1 variants={container} initial="hidden" animate="show">
				<strong>
					{artist_name} - {song_title}
				</strong>
			</motion.h1>
			{readLyrics.length == 0 ? (
				<Loading />
			) : Object.keys(readLyrics).length !== 0 ? (
				<>
					{/* <pre>{readLyrics}</pre> */}
					<motion.div variants={item} initial="hidden" animate="show">
						<div className="lyrics-div">
							{formatedData.split("<br/>").map((item, index) => (
								<p key={index}>{item}</p>
							))}
						</div>
						<div className="player">
							<img width="150" src={obj.artist.picture} alt="artist name" />
							<audio src={obj.preview} controls />
						</div>
					</motion.div>
				</>
			) : (
				<p className="error">
					Sorry, lyrics not found in server. <br />
					Damn this API!
				</p>
			)}
		</StyledLyrics>
	) : (
		""
	);
};

const StyledLyrics = styled(motion.section)`
	text-align: center !important;
	font-size: 1.2rem;
	h1 {
		margin-bottom: 2rem;
		color: #5e8d90;
		text-decoration: underline;
		padding: 0 2rem;
	}
	.lyrics-div {
		font-family: "Roboto", sans-serif !important;
		margin-bottom: 3rem;
		padding: 0 2rem;
		p {
			margin-bottom: 1rem;
		}
	}
	.player {
		position: sticky;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(102, 170, 171, 0.85);
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 0;

		img {
			width: 70px;
			display: inline-block;
			border-radius: 50%;
			border: 3px solid #fff;
		}
		audio {
			margin-left: 1rem;
			outline: none;
			border-radius: 15px;
			background: #f1f3f4;
		}
	}
`;

export default ReadLyrics;
