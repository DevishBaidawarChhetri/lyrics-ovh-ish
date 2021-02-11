import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<header>
			<nav>
				<section className="logo">
					<h1>
						<Link to="/">Lyrics Ovh</Link>
					</h1>
				</section>
				<section className="search">
					<input type="text" placeholder="Eg: Metallica" />
					<button>Search</button>
				</section>
			</nav>
		</header>
	);
};

export default Nav;
