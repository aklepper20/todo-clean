import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import Login from "../components/Login";
import { auth } from "../utils/firebase";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then((user) => {
        if (user) {
          window.location = "/dashboard";
        }
      });
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div>
      <Login
        title="Sign in"
        button="Sign in"
        href="/signup"
        link="Sign up"
        headerStatement="Need in account?"
        emailInput={emailRef}
        passwordInput={passwordRef}
        btnFunction={login}
      />
    </div>
  );
}

export default SignIn;
