// LoginFirst.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Loginfirst.css";

function LoginFirst() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/sign");
  };

  return (
    <div className="loginfirst-page">
      <div className="first">
        <div className="head">
          <h1>
            Find & Reserve Parking <br />
            <span className="lineback"> Instantly – Anytime,</span>
            <br />
            <span className="lineback2"> Anywhere</span>
          </h1>
        </div>
        <p className="firstline">
          Easily discover secure and affordable parking spots near your
          <br />
          destination. Book in advance or on-the-go and save your time!
        </p>
        <div className="button-row">
          <button className="buttonClass" onClick={goToLogin}>
            LOGIN
          </button>
          <button className="bt" onClick={goToSignup}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginFirst;
