import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchSong } from "../actions/lyrircsAction";

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
		<header>
			<nav>
				<section className="logo" onClick={clearSearched}>
					<h1>Lyrics Ovh</h1>
				</section>
				<section className="search">
					<input
						type="text"
						placeholder="Eg: Metallica"
						onChange={handleInput}
						value={textInput}
						required
					/>
					<button onClick={searchHandler}>Search</button>
				</section>
			</nav>
		</header>
	);
};

export default Nav;
