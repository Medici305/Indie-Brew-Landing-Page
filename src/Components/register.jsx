import React from "react";
import AltNav from "./altNav";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg1 from "../Assets/bg-1.jpeg";
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
    <Section
      style={{
        backgroundImage:
          "linear-gradient( to right bottom,#ffffff,#f8f2f8,#f8e3ea,#f7d5d4,#efcaba)",
        paddingBottom: "3rem",
      }}
    >
      <AltNav />
      <Row className="shadow-lg w-75 m-auto">
        <Col lg={6} className="d-none d-lg-block">
          <Image src={bg1} />
        </Col>
        <Col lg={6} className="bg-white p-5">
          <Form className="d-flex flex-column justify-content-around h-100">
            <h3 className="text-center">Create your IndieBrew Account</h3>
            <Form.Group controlId="formBasicEmail">
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

            <Form.Group controlId="formBasicFullName">
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

            <Form.Group controlId="formBasicPassword">
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
            <Buttons>
              <Button
                variant="primary"
                className="w-100 py-3"
                onClick={register}
              >
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
            </Buttons>
          </Form>
        </Col>
      </Row>
    </Section>
  );
};
const Section = styled.div`
  min-height: 100vh;
`;

const Buttons = styled.div`
  @media (max-width: 992px) {
    margin-top: 2rem;
  }
`;

const Image = styled.img`
  //background: black;
  display: block;
  object-fit: cover;
  width: 100%;
  min-height: 100%;
`;

export default Register;
