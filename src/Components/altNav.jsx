import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import Arrow from "../Assets/Back Arrow.svg";

const AltNav = () => {
  let navigate = useNavigate();
  return (
    <Navbar bg="none" expand="lg" className="py-3 mb-3">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Brand Logo" />
        </Navbar.Brand>
        <Navbar.Text className="d-flex w-25 justify-content-around align-items-center">
          <Button
            className="px-3"
            style={{ backgroundColor: "pink", borderColor: "pink" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Arrow} alt="back-arrow" />
          </Button>
          <h4 className="d-none d-lg-block text-dark m-0">Back to homepage</h4>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default AltNav;
