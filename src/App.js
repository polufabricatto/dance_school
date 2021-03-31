import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const App = () => {
  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Dance School</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Главная</Nav.Link>
      <Nav.Link href="#features">Залы</Nav.Link>
      <Nav.Link href="#pricing">Тренеры</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Шукай" className="mr-sm-5" />
      <Button variant="outline-light">Го</Button>
    </Form>
  </Navbar>
    </div>
  );
}

export default App;
