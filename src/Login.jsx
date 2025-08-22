import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import facebookIcon from "./assets/Facebook.png";
import googleIcon from "./assets/google.png";

function Login() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate("/sign");
  };

  const handleLogin = () => {
    // Here you could add validation if needed
    navigate("/home"); // Go to Home page after login
  };

  return (
    <div className="full">
      <div className="login">
        <h2>LOGIN</h2>
        <input type="text" placeholder="VEHICLE NO" />
        <input type="email" placeholder="EMAIL ID" />
        <input type="password" placeholder="PASSWORD" />
        <div className="forgot">
          <a href="#">FORGOT PASSWORD?</a>
        </div>
        <button onClick={handleLogin}>Login</button>
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
            <img src={googleIcon} alt="Google" />{" "}
          </a>
        </div>
      </div>
      <div className="button2">
        <button onClick={goToSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
