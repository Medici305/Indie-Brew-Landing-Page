import React from "react";
import Jumbotron from "../Components/jumbotron";
import Platforms from "../Components/platforms";
import Footer from "../Components/footer";

const Home = ({ user, logout, name }) => {
  return (
    <>
      <Jumbotron user={user} logout={logout} name={name} />
      <Platforms />
      <Footer />
    </>
  );
};

export default Home;
