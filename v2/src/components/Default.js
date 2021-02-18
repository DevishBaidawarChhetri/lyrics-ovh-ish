import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import page404 from "../404.svg";

const Default = () => {
	return (
		<StyledDiv>
			<img src={page404} alt="404 Error, Page not found!" />
		</StyledDiv>
	);
};
const StyledDiv = styled(motion.section)`
	width: 100%;
	padding-bottom: 3rem;
	img {
		width: 50%;
		display: block;
		margin: 0 auto;
	}
	@media screen and (max-width: 768px) {
		padding-bottom: 1rem;
		img {
			width: 100%;
		}
	}
`;
export default Default;
