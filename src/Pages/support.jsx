import React from "react";
import Footer from "../Components/footer";
import Nav from "../Components/nav";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const support = ({ user, logout }) => {
  return (
    <>
      <Section
        style={{
          backgroundImage:
            "linear-gradient( to right bottom,#ffffff,#f8f2f8,#f8e3ea,#f7d5d4,#efcaba)",
          paddingBottom: "3rem",
        }}
      >
        <Nav user={user} logout={logout} />

        <Col className="text-center">
          <h1>Support</h1>
        </Col>
      </Section>
      <Footer />
    </>
  );
};

const Section = styled.div`
  min-height: 60vh;
`;

export default support;
