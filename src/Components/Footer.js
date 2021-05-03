import { Container } from "react-bootstrap";

const Footer = () => {
	return (
		<Container fluid style={{backgroundColor:"#a8001b", color:'#fff'}}>
            <Container style={{display:"flex", justifyContent:'center', padding:'20px'}}>
            <p>footer</p>
            </Container>        
        </Container>
	);
};

export default Footer;
