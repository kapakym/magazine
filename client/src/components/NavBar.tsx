import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";

function NavBar() {
  const { user } = useContext(Context);
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
         <NavLink style={{color:"white"}} to={SHOP_ROUTE}>КупиДевайс</NavLink>
          <Nav className="ml-auto" style={{color:"white"}}> 
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
