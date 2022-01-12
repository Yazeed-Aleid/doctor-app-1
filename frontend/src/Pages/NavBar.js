import react from 'react'
import {Link,useNavigate } from "react-router-dom";
import { Button , Navbar , Container, Nav } from 'react-bootstrap';

function NavBar(){
    
    
    return(
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/Signin">SignIn</Nav.Link>
      <Nav.Link href="/Singup">SingUp</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


  <ul>  </<>
    )
}
export default NavBar;
  
  </ul>