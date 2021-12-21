import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg2 from "../Assets/bg-2.jpg";

//import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const Login = ({ setLoginEmail, setLoginPassword, signin, user }) => {
  return (
    <SignIn>
      <Row className="shadow-lg w-75">
        <Col lg={6}>
          <Image src={bg2} className="img-fluid" />
        </Col>
        <Col lg={6} className="bg-white p-5">
          <Form>
            <h4>Login to your IndieBrew Account</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="john@example.com"
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="At least 8 characters"
                onChange={(e) => {
                  setLoginPassword(e.target.value);
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="w-100 py-2"
              style={{ background: "white", color: "#6a4efc" }}
              onClick={signin}
            >
              {user ? (
                <div
                  className="spinner-border"
                  style={{ color: "#6a4efc" }}
                  role="status"
                >
                  <span className="sr-only"></span>
                </div>
              ) : (
                "Login"
              )}
            </Button>
            <Link to="/register">
              <Button variant="primary" className="w-100 py-3 mt-3">
                Create an Account
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </SignIn>
  );
};

const SignIn = styled.div`
  min-height: 100vh;
  background-image: radial-gradient(
    circle,
    #ffffff,
    #f8f2f8,
    #f8e3ea,
    #f7d5d4,
    #efcaba
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  //background: black;
  display: block;
  object-fit: cover;
  width: 100%;
  height: auto;
`;

export default Login;
