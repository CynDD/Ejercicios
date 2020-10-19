import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
 
function NavBar () {
  
  return (
    <div>
     <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link  href='/' ></Nav.Link>
                <Nav.Link href='/counter'> Ejercicio 1</Nav.Link>
                <Nav.Link href='/curry'> Ejercicio 2</Nav.Link>
                <Nav.Link href='/breeds'> Ejercicio 3</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar> 
    </div>
  );
}
 
export default NavBar; 
