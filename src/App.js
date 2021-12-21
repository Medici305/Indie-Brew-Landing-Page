import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Pricing from "./Pages/pricing";
import { Routes, Route, useNavigate } from "react-router-dom";
import Support from "./Pages/support";
import Form from "./Pages/form";
import styled from "styled-components";

const App = () => {
  // States
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [name, setName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  let navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // Functions
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      user &&
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      user &&
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <Universal>
      <Routes>
        <Route
          path="/"
          element={
            <Home user={user} register={register} logout={logout} name={name} />
          }
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/register"
          element={
            <Form
              setRegisterEmail={setRegisterEmail}
              setName={setName}
              setRegisterPassword={setRegisterPassword}
              user={user}
              register={register}
              logout={logout}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              user={user}
              register={register}
              signin={signin}
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
            />
          }
        />
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
  h4 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    @media (max-width: 992px) {
      text-align: center;
    }
  }
  h5 {
    font-size: 1rem;
    color: #767676;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
    color: #767676;
    cursor: pointer;
  }
  span {
    color: #767676;
  }
  p {
    font-size: 1.2rem;
    font-size: 1.1rem;
    color: #767676;
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
