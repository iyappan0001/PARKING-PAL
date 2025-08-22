import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import facebookIcon from "./assets/Facebook.png";
import googleIcon from "./assets/google.png";

function Sign() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="full">
      <div className="sign">
        <h2>Sign up</h2>
        <input type="text" placeholder="FULL NAME" />
        <input type="email" placeholder="EMAIL ID" />
        <input type="text" placeholder="VEHICLE NO" />
        <input type="text" placeholder="VEHICLE MODEL" />
        <button>Sign up</button>
        <div className="or">OR</div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://accounts.google.com/signin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={googleIcon} alt="Google" />
          </a>
        </div>
      </div>

      <div className="button2">
        <button onClick={goToLogin}>Login</button>
      </div>
    </div>
  );
}

export default Sign;
