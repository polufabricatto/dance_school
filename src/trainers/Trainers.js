import Header from "../header/Header";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledFirst = styled.div`
	.jumbo {
		background: url("https://media.giphy.com/media/3oEjHZ10CNMhK6bpgQ/giphy.gif")
			no-repeat fixed bottom;
		background-size: cover;
		color: yellow;
		height: 550px;
		position: relative;
		z-index: -3;
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

const StyledSecond = styled.div`
	.jumbo {
		background: url("https://i.giphy.com/media/3o7aD9E7FGiVbGztWo/giphy.webp")
			no-repeat fixed bottom;
		background-size: cover;
		color: yellow;
		height: 550px;
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

const StyledThird = styled.div`
	.jumbo {
		background: url("https://media0.giphy.com/media/3o85fVVwdqKYpt7F3G/giphy.gif?cid=ecf05e47tignxf9ic7g1mu7hwxkddqo4s8sj10710xif924l&rid=giphy.gif&ct=g")
			no-repeat fixed bottom;
		background-size: cover;
		color: yellow;
		height: 550px;
		position: relative;
		z-index: -3;
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

const Trainers = () => {
	return (
		<div>
			<StyledFirst>
				<Jumbo fluid className="jumbo">
					<div className="overlay"></div>
					<Container>
						<h1>First </h1>
						<p align="left" line="60px">
							Разнообразный и богатый опыт постоянное
							информационно-пропагандистское обеспечение нашей
							деятельности позволяет оценить значение новых
							предложений. Разнообразный и богатый опыт постоянное
							информационно-пропагандистское обеспечение нашей
							деятельности требуют от нас анализа направлений
							прогрессивного развития.
						</p>
						<img
							className="d-block w-10 h-10"
							src="https://images.unsplash.com/photo-1611435263724-3f3c4e4cca27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="Third slide"
						/>
					</Container>
				</Jumbo>
			</StyledFirst>
			<StyledSecond>
				<Jumbo fluid className="jumbo">
					<div className="overlay"></div>
					<Container>
						<h1>Second</h1>
						<p align="right">
							!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
						</p>
					</Container>
				</Jumbo>
			</StyledSecond>
			<StyledThird>
				<Jumbo fluid className="jumbo">
					<div className="overlay"></div>
					<Container>
						<h1>Third</h1>
						<p align="left">###################</p>
					</Container>
				</Jumbo>
			</StyledThird>
		</div>
	);
};

export default Trainers;
