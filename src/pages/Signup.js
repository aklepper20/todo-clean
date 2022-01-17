import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import Login from "../components/Login";
import { auth } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import db from "../utils/firebase";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).then(async (cred) => {
        await setDoc(doc(db, "users", `${cred.user.uid}`), {
          tasks: [
            {
              text: null,
              status: null,
            },
          ],
        });
        if (cred) {
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
        title="Sign up"
        button="Sign up"
        href="/"
        link="Sign in"
        headerStatement="Already have an account?"
        btnFunction={register}
        emailInput={emailRef}
        passwordInput={passwordRef}
      />
      <h3>hello</h3>
    </div>
  );
}

export default Signup;
