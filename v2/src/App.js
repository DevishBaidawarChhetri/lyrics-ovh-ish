import React from "react";
import { Switch, Route } from "react-router-dom";
import Default from "./components/Default";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import ReadLyrics from "./components/ReadLyrics";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollTop from "./ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<div className="App">
			<GlobalStyles />
			<ScrollTop />

			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route
					exact
					path="/lyrics/:artist_name/:song_title/:id"
					component={ReadLyrics}
				/>
				<Route component={Default} />
			</Switch>
			<Footer />
			<ToastContainer position="bottom-right" />
		</div>
	);
};

export default App;
