import React from "react";
import spinner from "../spinner.svg";
const Loading = () => {
	return (
		<section style={{ textAlign: "center" }}>
			<img src={spinner} alt="spinner" />
		</section>
	);
};

export default Loading;
