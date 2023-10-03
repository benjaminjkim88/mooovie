import React, { useState } from "react";
import { auth } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './signUpStyle.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Sign in success:", userCredential);
        navigate('/main-menu');
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
        navigate('/main-menu');
      })
      .catch((error) => {
        console.log("Sign up error:", error);
      });
  };

  return (
    <div className="container">
      <form>
        <h1>Welcome to MOOVIE</h1>
        <div className="loginCreds">
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="loginCreds">
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button onClick={handleSignIn} type="button" className="button">Sign In</button>
        <button onClick={handleSignUp} type="button" className="button">Sign Up</button>
      </form>
    </div>
  );
};

export default AuthForm;
