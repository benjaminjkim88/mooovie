import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign in success:", userCredential);
      })
      .catch((error) => {
        console.log("Sign in error:", error);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign up success:", userCredential);
      })
      .catch((error) => {
        console.log("Sign up error:", error);
      });
  };

  return (
    <div className="auth-form">
      <form>
        <h1>Authentication</h1>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn} type="button">Sign In</button>
        <button onClick={handleSignUp} type="button">Sign Up</button>
      </form>
    </div>
  );
};

export default AuthForm;
