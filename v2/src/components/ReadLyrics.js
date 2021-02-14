import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { loadLyrics } from "../actions/lyricsAction";
import Loading from "./Loading";

const ReadLyrics = (props) => {
	const { artist, song } = useParams();
	const { artist_picture, song_title, song_preview } = props.location.state;

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadLyrics(artist, song));
	}, [artist, song]);

	const readLyrics = useSelector((state) => state.lyricsOVH.readLyrics);
	return (
		<StyledLyrics>
			<h1>
				<strong>
					{artist} - {song}
				</strong>
			</h1>
			{readLyrics.length == 0 ? (
				<Loading />
			) : Object.keys(readLyrics).length !== 0 ? (
				<>
					<pre>{readLyrics}</pre>
					<div className="player">
						<img width="150" src={artist_picture} alt={song_title} />
						<audio src={song_preview} controls />
					</div>
				</>
			) : (
				<p className="error">
					Sorry, lyrics not found in server. <br />
					Damn this API!
				</p>
			)}
		</StyledLyrics>
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
	pre {
		font-family: "Roboto", sans-serif !important;
		margin-bottom: 3rem;
		padding: 0 2rem;
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
