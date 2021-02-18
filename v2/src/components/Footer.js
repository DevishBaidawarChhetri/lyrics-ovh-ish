import React from "react";
import styled from "styled-components";
import logo from "../logo.png";

const Footer = () => {
	return (
		<StyledFooter>
			<p>
				Copyright &copy; Lyrics OVH {new Date().getFullYear()} | All Rights
				Reserved.
			</p>
			<p>
				Made with{" "}
				<span>
					<a style={{ color: "#e25555" }} href="https://www.devish.com.np">
						&hearts;
					</a>
				</span>{" "}
				in React.
			</p>
			<p>
				<strong>Powered by:</strong>
			</p>
			<img src={logo} alt="Lyrics OVH" />
		</StyledFooter>
	);
};

const StyledFooter = styled.section`
	padding: 1rem 0;
	background-color: #dedede;
	p {
		text-align: center;
		margin-bottom: 1rem;
	}
	img {
		width: 6rem;
		display: block;
		margin: 0 auto;
	}
`;

export default Footer;
