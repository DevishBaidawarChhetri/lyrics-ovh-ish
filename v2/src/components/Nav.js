import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { searchSong } from "../actions/lyricsAction";
import logo from "../logo.png";
import sicon from "../search-icon.svg";

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState("");

	const handleInput = (e) => {
		setTextInput(e.target.value);
	};

	const searchHandler = () => {
		dispatch(searchSong(textInput));
		setTextInput("");
	};

	const clearSearched = () => {
		dispatch({ type: "CLEAR_SEARCHED" });
		setTextInput("");
	};

	return (
		<StyledHeader>
			<StyledNav>
				<StyledLogo onClick={clearSearched}>
					<Link to="/">
						<motion.img
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{
								delay: 1.5,
							}}
							src={logo}
							alt="logo"
						/>
						<motion.h1
							initial={{ scale: 0 }}
							animate={{ rotate: 360, scale: 1 }}
							transition={{
								type: "spring",
								stiffness: 100,
								damping: 50,
							}}
						>
							Lyrics Ovh
						</motion.h1>
					</Link>
				</StyledLogo>
				<StyledSearch
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 1.2,
					}}
				>
					<input
						type="text"
						placeholder="Eg: Kings Of Leon - Sex on Fire"
						onChange={handleInput}
						value={textInput}
						required
					/>
					<button className="search-btn" onClick={searchHandler}>
						<img src={sicon} alt="search icon" />
					</button>
				</StyledSearch>
			</StyledNav>
		</StyledHeader>
	);
};

const StyledHeader = styled(motion.header)``;
const StyledNav = styled(motion.nav)`
	padding: 3rem 5rem;
	border: none;
	text-align: center;
	input {
		width: 30%;
		font-size: 1rem;
		padding: 0.5rem;
		border-radius: 0;
		border: 2px solid #48a69f;
	}
	button {
		color: #ffffff;
		background: #66aaab;
		font-size: 1.2rem;
		border: none;
		padding: 0.5rem 1rem;
		cursor: pointer;
		border-radius: 0;
		img {
			width: 25px;
		}
	}
	input[type="text"]:focus,
	button:focus {
		outline: none;
	}
	@media screen and (max-width: 768px) {
		padding: 0 2rem;
		input {
			width: 80%;
			font-size: 1rem;
		}
		button {
			font-size: 1rem;
			padding: 0.5rem;
		}
	}
`;

const StyledLogo = styled(motion.nav)`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	img {
		height: 4rem;
		margin-right: 1rem;
	}
	h1 {
		font-size: 3rem;
		font-family: "Dancing Script", cursive;
	}
`;

const StyledSearch = styled(motion.div)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		margin: 0 0 1rem;
		button {
		}
	}
`;
export default Nav;
