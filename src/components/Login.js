import React from "react";
import "../styles/Login.css";

function Login({
  title,
  button,
  href,
  link,
  headerStatement,
  emailInput,
  passwordInput,
  btnFunction,
}) {
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-heading">{title}</h1>
        <input
          ref={emailInput}
          className="login-email"
          type="email"
          placeholder="Enter Email"
        />
        <input
          ref={passwordInput}
          className="login-password"
          type="password"
          placeholder="Enter Password"
        />
        <button className="login-button" onClick={btnFunction}>
          {button}
        </button>
        <div className="login-heading">{headerStatement}</div>
        <div className="links">
          <a href={href}>{link}</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
