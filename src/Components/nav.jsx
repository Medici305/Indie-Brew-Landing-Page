import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";

const nav = () => {
  return (
    <Navbar bg="none" expand="lg" className="py-4 py-lg-5 mb-3">
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
          <Navbar.Text className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
            <Link
              to="/pricing"
              className="text-decoration-none font-weight-bolder"
              style={{ fontWeight: "600" }}
            >
              Pricing
            </Link>
            <Link
              to="/support"
              className="text-decoration-none font-weight-bolder mx-lg-5 my-5 my-lg-0"
              style={{ fontWeight: "600" }}
            >
              Support
            </Link>
            <Link to="/register">
              <Button className="px-3 py-2">
                Get Started{" "}
                <span>- it's free</span>
              </Button>
            </Link>
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
