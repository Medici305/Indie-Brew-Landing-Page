import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
//import { Link } from "react-router-dom";

const footer = () => {
  return (
    <FooterBox className="">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          {/* Left */}
          <Col lg={4} className="mb-5 mb-md-0">
            {/* IndieBrew */}
            <h4>IndieBrew</h4>
            <p>
              With IndieBrew, get perosnal feeds from resources all around the
              web, including Reddit, Hackernews, and much more.
            </p>
            <p>Made with &#9829; in the UK.</p>
          </Col>
          {/* Right */}
          <Col lg={7}>
            <Row>
              {/* SiteMap  */}
              <Col
                xs={6}
                xl={3}
                className="d-flex flex-column align-items-center align-items-lg-left justify-content-center"
              >
                <h4>Sitemap</h4>
                <ul>
                  <li>Homepage</li>
                  <li className="my-2">Pricing</li>
                </ul>
              </Col>
              {/* Resources  */}
              <Col
                xs={6}
                xl={3}
                className="d-flex flex-column align-items-center align-items-lg-left justify-content-center"
              >
                <h4>Resources</h4>
                <ul>
                  <li>Support</li>
                  <li className="my-2">Contact</li>
                  <li>FAQ</li>
                </ul>
              </Col>

              {/* Company  */}
              <Col
                xs={6}
                xl={3}
                className="d-flex flex-column align-items-center align-items-lg-left justify-content-center"
              >
                <h4>Company</h4>
                <ul>
                  <li>About</li>
                  <li className="my-2">Customers</li>
                  <li>Blog</li>
                </ul>
              </Col>

              {/* Portfolios  */}
              <Col
                xs={6}
                xl={3}
                className="d-flex flex-column align-items-center align-items-lg-left justify-content-center"
              >
                <h4>Portfolios</h4>
                <ul>
                  <li>HackerNews</li>
                  <li className="my-2">Reddit</li>
                  <li>Twitter</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </FooterBox>
  );
};

const FooterBox = styled.div`
  background: #f2f2f2;
  padding: 2.5rem 0;
`;

export default footer;
