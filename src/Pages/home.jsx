import React from "react";
import styled from "styled-components";
import Nav from "../Components/nav";

const Home = () => {
  return (
    <HomePage>
      <Nav />
    </HomePage>
  );
};

const HomePage = styled.div`
  min-height: 100vh;
  background: red;
`;
export default Home;
