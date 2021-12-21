import React from "react";
import Register from "../Components/register";

const form = ({ setRegisterEmail, setName, setRegisterPassword, user, register, logout }) => {
  return (
    <div>
      <Register
        setRegisterEmail={setRegisterEmail}
        setName={setName}
        setRegisterPassword={setRegisterPassword}
        user={user}
        register={register}
        logout={logout}
      />
    </div>
  );
};

export default form;
