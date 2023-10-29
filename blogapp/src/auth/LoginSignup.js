import React, { useState } from "react";
import "./loginsignup.css";
import user from "../Assets/user.png";
import password from "../Assets/padlock.png";
import email from "../Assets/mail.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container" style={{width: 600}}>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={user} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email} alt="" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password} alt="" />
          <input type="text" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" && (
        <div className="forgot-password">
          Lost Password? <span>Click here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Log in
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
