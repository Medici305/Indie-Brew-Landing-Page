import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <Navbar bg="none" expand="lg" className="border border-dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Brand Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Navbar.Text className="w-75 d-flex justify-content-around">
            <Link to="/pricing">Pricing</Link>
            <Link to="/support">Support</Link>
            <Button variant="primary">
              Get started - <span className="text-secondary">it's free</span>
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default nav;

// *** When you are logged in.
//   <Navbar.Text>
//     Signed in as: <a href="#login">Mark Otto</a>
//   </Navbar.Text>

/*
1. Button link to Login page.
*/