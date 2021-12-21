import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import phone from "../Assets/Phone Mockup.png";
import socialMedia from "../Assets/Social Media Icons.png";

const platforms = () => {
  return (
    <Container className="py-5 my-lg-5 my-2">
      {/* 1. Top row */}
      <Row className="">
        <Col
          xs={12}
          lg={6}
          className="d-flex flex-column align-items-center align-items-lg-start"
        >
          <h2>Curate your feed from dozens of resources</h2>
          <p>
            We cover all major platforms where one could want to curate their
            feed from. ProductHunt, IndieHackers, and so much more.
          </p>
          <NewLink to="#">See full list of resources &#8250;</NewLink>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex justify-content-lg-end justify-content-center mt-5 mt-lg-0"
        >
          <Image src={socialMedia} alt="Feed Mockup" />
        </Col>
      </Row>
      {/* 2. Bottom row */}
      <Row className="mt-5 ">
        <Col xs={12} lg={6} className="text-center">
          <Image src={phone} alt="Feed Mockup" />
        </Col>
        <Col
          xs={12}
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center align-items-lg-start mt-5 mt-lg-0"
        >
          <h2>Access your feed from the comfort of your phone</h2>
          <p>
            With native apps for both IOS and android, accessing your curated
            content has never been easier.
          </p>
          <NewLink to="#">Sign up for the waitlist &#8250;</NewLink>
        </Col>
      </Row>
    </Container>
  );
};

const Image = styled.img`
  width: 75%;
  height: auto;
`;

const NewLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  color: #7700ff;
  transition: all ease-in-out 0.1s;
  /* &::after {
    content: "a";
    position: absolute;
    margin-left: 1rem;
    //top: 50%;
    //right: 1.25rem;
    //transform: translateY(-50%);
    //width: 0.75rem;
    //height: 0.4375rem;
    background-image: url("");
    background-size: contain;
  } */
`;
export default platforms;
