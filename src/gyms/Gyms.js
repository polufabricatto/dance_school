import Header from "../header/Header";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const Gyms = () => {
	return (
		<div>
			<h1> First gym </h1>
			<Carousel>
				<Carousel.Item style={{ height: "550px" }}>
					<img
						className="d-block w-100"
						src="https://image.freepik.com/free-photo/interior-empty-dance-studio_23-2148169361.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h2>Центр</h2>
						<p>Город Грусть</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "550px" }}>
					<img
						className="d-block w-100"
						src="https://img.freepik.com/free-photo/long-mirror-in-dance-studio_23-2148169365.jpg?size=626&ext=jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "550px" }}>
					<img
						className="d-block w-100"
						src="https://img.freepik.com/free-photo/long-mirror-in-dance-studio_23-2148169365.jpg?size=626&ext=jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
					
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<h1>Second gym</h1>
			<Carousel>
				<Carousel.Item style={{ height: "500px" }}>
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1523895834873-529ef3a565a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Октябрьский р-н</h3>
						<p>Кинотеатр Октябрь</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "500px" }}>
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1544274367-aafa64a78bac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
						alt="Second slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "500px" }}>
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1611435263724-3f3c4e4cca27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
						alt="Third slide"
					/>

					<Carousel.Caption></Carousel.Caption>
				</Carousel.Item>
			</Carousel>

			<h1>Third gym</h1>
			<Carousel>
				<Carousel.Item style={{ height: "550px" }}>
					<img
						className="d-block w-100"
						src="https://image.freepik.com/free-photo/interior-empty-dance-studio_23-2148169361.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h2>Ленинский р-н</h2>
						<p>ул. Горького 65</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "550px" }}>
					<img
						className="d-block w-100"
						src="https://img.freepik.com/free-photo/long-mirror-in-dance-studio_23-2148169365.jpg?size=626&ext=jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item style={{ height: "550px" }}>
					<img
						className="d-block w-100"
						src="https://img.freepik.com/free-photo/long-mirror-in-dance-studio_23-2148169365.jpg?size=626&ext=jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
					
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Gyms;
