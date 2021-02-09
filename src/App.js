import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Suggested from "./components/Suggested";
import Footer from "./components/Footer";

const App = () => {
	return (
		<section id="wrapper">
			<Nav />
			<Suggested />
			<Footer />
		</section>
	);
};

export default App;
