import { Navbar, Nav, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";

const LinkStyle = styled.div`
	background-color: #a8001b;
	padding: 7px;
`;

const Header = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<LinkStyle>
				<Navbar bg="black" variant="dark" collapseOnSelect expand="md">
					<Navbar.Brand href="/main">Dance School</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/main">Главная</Nav.Link>
							<Nav.Link href="/directions">Направления</Nav.Link>
							<Nav.Link href="/trainers">Тренеры</Nav.Link>
							<Nav.Link href="/gyms">Залы</Nav.Link>
						</Nav>
					
					<Nav>
						<Button
							variant="danger"
							className="mr-5"
							onClick={handleShow}
						>
							Уваход
						</Button>
						<Button variant="danger" onClick={handleShow}>
							Выхад
						</Button>
						
					</Nav>
					</Navbar.Collapse>
				</Navbar>
			</LinkStyle>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Уваход</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="fromBasicEmail">
							<Form.Label>Пошта</Form.Label>
							<Form.Control
								type="email"
								placeholder="Увядзице пошту"
							/>
							<Form.Text className="text-muted">
								Никому не аддадзим{" "}
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="fromBasicPassword">
							<Form.Label>Пароль</Form.Label>
							<Form.Control
								type="Пароль"
								placeholder="Увядзице паролб"
							/>
							<Form.Text className="text-muted">
								Никому не раскажам{" "}
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="fromBasicCheckBox">
							<Form.Check
								type="checkbox"
								label="запомниць мяне"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Header;
