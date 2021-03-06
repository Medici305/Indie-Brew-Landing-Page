import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import mockUp from "../Assets/Feed Mockup.png";
import Avatars from "../Assets/User Avatars.svg";

const jumbotron = ({ user, logout, name }) => {
  return (
    <Section
      style={{
        backgroundImage:
          "linear-gradient( to right bottom,#ffffff,#f8f2f8,#f8e3ea,#f7d5d4,#efcaba)",
        paddingBottom: "3rem",
      }}
    >
      <Nav user={user} logout={logout} />
      <Container>
        <Row style={{ marginBottom: "5rem" }}>
          <Col xs={12} lg={6} className="order-1 order-lg-2">
            <Image src={mockUp} alt="Feed Mockup" />
          </Col>
          <Col className="order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <h1 className="mb-3">Your weekly personal feed digest.</h1>
            <p>
              With IndieBrew, get personal feeds from resources all around the
              web, including Reddit, HackerNews, IndieHackers, and much more.
            </p>
            {user ? (
              <Button className="px-3 py-2 mb-4 mt-3 mt-lg-0">
                {`Welcome - ${name}`}
              </Button>
            ) : (
              <Link to="/register">
                <Button className="px-3 py-2 mb-4 mt-3 mt-lg-0">
                  Get Started{" "}
                  <span style={{ color: "#bababa" }}>- it's free</span>
                </Button>
              </Link>
            )}
            <img className="mb-3" src={Avatars} alt="users avatars" />
            <h5>
              Join{" "}
              <span style={{ color: "#6A4EFC", fontWeight: "700" }}>
                32,642
              </span>{" "}
              IndieBrewers in curating their personal digest.
            </h5>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

const Section = styled.div``;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default jumbotron;
