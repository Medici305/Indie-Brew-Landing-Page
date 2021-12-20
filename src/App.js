import React from "react";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Pricing from "./Pages/pricing";
import { Routes, Route } from "react-router";
import Support from "./Pages/support";
import Form from "./Pages/form";
import styled from "styled-components";

const App = () => {
  return (
    <Universal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/register" element={<Form />} />
      </Routes>
    </Universal>
  );
};

const Universal = styled.div`
  h1 {
    font-size: 4.15rem;
    //font-weight: 600;
    @media (max-width: 992px) {
        text-align: center;
        font-size: 3rem;
        margin-top: 2rem;
      }
    }
  }
  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    @media (max-width: 992px) {
        text-align: center;
      }
    }
  }
  h5 {
    font-size: 1rem;
    color: #a0a0a0;
  }
  span {
    color: #a0a0a0;
  }
  p {
    font-size: 1.2rem;
    font-size: 1.1rem;
    color: #a0a0a0;
    @media (max-width: 992px) {
        text-align: center;
        margin: 1rem 0;
      }
    }
  }
  button {
    background: #6a4efc;
    border-color: #6a4efc;
    @media (max-width: 992px) {
      text-align: center;
    }
  }
`;

export default App;
