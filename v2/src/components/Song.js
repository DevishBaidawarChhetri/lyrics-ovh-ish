import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Song = ({
	id,
	artist_name,
	album_cover_pic,
	artist_picture,
	album_title,
	song_title,
	song_preview,
}) => {
	return (
		<StyledCard>
			<section className="card" key={id}>
				<section className="card-img">
					<img src={album_cover_pic} alt={album_title} />
					<div className="content">
						<h2>{song_title}</h2>
						<p style={{ fontSize: "1.2rem" }}>Artist: {artist_name}</p>
						<p>Album: {album_title}</p>
					</div>
				</section>
				<section className="card-description">
					<section className="player">
						<img src={artist_picture} alt={artist_name} />
						<audio controls src={song_preview} />
					</section>
				</section>
				<section className="button">
					<Link to={`/lyrics/${artist_name}/${song_title}/${id}`}>
						Read Lyrics &raquo;
					</Link>
				</section>
			</section>
		</StyledCard>
	);
};

const StyledCard = styled(motion.section)`
	.card {
		min-height: 30vh;
		box-shadow: 0 5px 20px #777;
		text-align: center;
		border-radius: 30px;
		overflow: hidden;
	}
	.card-img {
		width: 100%;
		cursor: pointer;
		position: relative;
	}
	.card-img img {
		height: 320px;
		width: 100%;
		object-fit: cover;
		display: block;
		transition: all 0.3s;
	}
	.content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		transform: translateY(-100%);
		transition: all 0.3s;
		background: rgba(255, 255, 255, 0.6);
		padding: 0 2rem;
	}
	.content h2 {
		font-size: 2rem;
		font-family: "Dancing Script", cursive;
	}
	.content h2,
	.content p {
		opacity: 0;
		transition: all 0.3s;
		color: #000;
		margin-top: 0.8rem;
	}

	.card-img:hover .content {
		transform: none;
	}
	.card-img:hover img {
		transform: scale(0.93);
	}
	.card-img:hover h2,
	.card-img:hover p {
		opacity: 1;
		transition-delay: 0.2s;
	}

	.card-description {
		margin-top: -35px;
		position: relative;
	}
	.player {
		display: flex;
		flex-direction: inherit;
		justify-content: space-evenly;
		align-items: center;
		padding: 0 2rem;
	}
	.player img {
		width: 65px;
		border-radius: 50%;
		border: 2px solid #fff;
		box-shadow: 0 0 15px #100e0e;
	}
	.button {
		padding: 1rem 0 3rem;
	}
	.button a {
		background-color: #5ac6ab;
		border-radius: 10px;
		padding: 0.5rem 1rem;
		color: #fff;
		cursor: pointer;
		box-shadow: 0 0 10px #777;
		border: 2px solid #fff;
		outline: none;
	}
	audio {
		width: 190px;
		height: 30px;
		-moz-box-shadow: 0 0 10px 0px #777;
		-webkit-box-shadow: 0 0 10px 0px #777;
		box-shadow: 0 0 10px 0px #777;
		-moz-border-radius: 50px;
		-webkit-border-radius: 50px;
		border-radius: 50px;
		margin-left: 15px;
	}
	audio:hover,
	audio:focus,
	audio:active {
		outline: none;
	}
`;

export default Song;
