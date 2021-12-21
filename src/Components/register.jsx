import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg1 from "../Assets/bg-1.jpeg";
//import { Link } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";

const Register = ({
  setRegisterEmail,
  setName,
  setRegisterPassword,
  user,
  register,
  logout,
}) => {
  return (
    <SignUp>
      <Row className="shadow-lg w-75">
        <Col lg={6}>
          <Image src={bg1} />
        </Col>
        <Col lg={6} className="bg-white p-5">
          <Form>
            <h4>Create your IndieBrew Account</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="john@example.com"
                required
                onChange={(e) => {
                  setRegisterEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="At least 8 characters"
                required
                onChange={(e) => {
                  setRegisterPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="By creating an account on IndieBrew, you agree to the Terms & Conditions."
              />
            </Form.Group>
            <Button variant="primary" className="w-100 py-3" onClick={register}>
              {user ? (
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only"></span>
                </div>
              ) : (
                "Create an Account"
              )}
            </Button>
            <Link to="/login">
              <Button
                variant="primary"
                className="w-100 py-3 mt-3"
                style={{ background: "white", color: "#6a4efc" }}
                onClick={register}
              >
                Already have an Account?
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </SignUp>
  );
};

const SignUp = styled.div`
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

export default Register;
