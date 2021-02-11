import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Suggested from "./components/Suggested";
import ReadLyrics from "./components/ReadLyrics";
import Footer from "./components/Footer";
import Default from "./components/Default";

const App = () => {
	return (
		<section id="wrapper">
			<Nav />
			<Switch>
				<Route exact path="/" component={Suggested} />
				<Route exact path="/lyrics/:artist/:song" component={ReadLyrics} />
				<Route component={Default} />
			</Switch>
			<Footer />
		</section>
	);
};

export default App;
