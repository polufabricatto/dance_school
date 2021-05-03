import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledJumbo = styled.div`
	.jumbo {
		background: url("https://media.giphy.com/media/3oEjHZ10CNMhK6bpgQ/giphy.gif")no-repeat fixed bottom;
		background-size: cover;
		color: green;
		height: 400px;
		position: relative;
		z-index: -2;
	}
	.overlay {
		background-color: #000;
		opacity: 0.5;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;

const Jumbotron = () => (
	<StyledJumbo>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h1>First trainer</h1>
				<p>dfa;jdflkajdfa;lkfaj;la</p>
			</Container>
		</Jumbo>
	</StyledJumbo>
);

export default Jumbotron;
