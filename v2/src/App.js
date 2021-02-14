import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Default from "./components/Default";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import ReadLyrics from "./components/ReadLyrics";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="App">
			<GlobalStyles />
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/lyrics/:artist/:song" component={ReadLyrics} />
					<Route component={Default} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
