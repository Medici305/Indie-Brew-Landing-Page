import React from "react";
import styled from "styled-components";
import jumbotron from "../Components/jumbotron";
import Nav from "../Components/nav";

const Home = () => {
  return (
    <HomePage>
      <Nav />
      <jumbotron />
    </HomePage>
  );
};

const HomePage = styled.div`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    300deg,
    rgba(255, 255, 255, 1) 15%,
    rgba(239, 202, 186, 1) 60%
  );
`;
export default Home;
