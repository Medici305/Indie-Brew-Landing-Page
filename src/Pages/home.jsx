import React from "react";
import styled from "styled-components";
import Jumbotron from "../Components/jumbotron";
import Platforms from "../Components/platforms";

const Home = () => {
  return (
    <HomePage>
      <Jumbotron />
      <Platforms />
    </HomePage>
  );
};

const HomePage = styled.div`
  h1 {
    font-size: 4.15rem;
  }
  p {
    font-size: 1.1rem;
    color: #a0a0a0;
  }
  h5 {
    font-size: 1rem;
    color: #a0a0a0;
  }
  button {
    background: #6a4efc;
    border-color: #6a4efc;
  }
  @media only screen and (max-width: 578px) {
    h1 {
      font-size: 3rem;
      margin-top: 2rem;
    }
  }
`;
export default Home;
