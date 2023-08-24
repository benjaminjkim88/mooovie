import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './signUpStyle.css';

const API_URL = 'http://localhost:5000/'

//checks state of sign in 
const SignUp = ({ onSignIn }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    //event handler
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    //email validator
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    //strong password validator.
    const strongPassword = (password) => {
        return password.length >= 8;
    };


    //checks submission of input then validates email and password.
    const handleSub = async (event) => {
        event.preventDefault();

        const { email, password } = formData;

        if (!isEmailValid(email)) {
            alert("Invalid email format! Use your hooves!")
            return;
        }

        if (!strongPassword(password)) {
            alert("Weak Password! Dumb Cow!");
            return;
        }

        try {
            const response = (email, password) => {
                return axios.post(API_URL + 'signup', {
                    email,
                    password,
                })
            }      
            alert("GREAT SUCCESS. Welcome to MOOVIE!!");
            onSignIn();
           
            //garbage collection for inputs.
            setFormData({
                email:'',
                password:''
            });

          } catch (error) {
            alert('MOOvier failed to register ' + error);
          }
        };


    useEffect(() => {
        // Add the signup-page class to the body element
        document.body.classList.add('signup-page');

        // Remove the class when the component unmounts
        return () => {
            document.body.classList.remove('signup-page');
        };
    }, []);

    //returns the form for signing up with the css calls for the moving hooves.
    //loginCreds and label just used for positioning. 

    return (
        <div className='container'>
            <h2>
                Sign Up Fat Cow!
            </h2>
            <form onSubmit={handleSub}>
                <div className="loginCreds form-group">
                    <label className="label">Email: </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="loginCreds form-group">
                    <label className="label">Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button className='button' type="submit">Get to MOOing</button>
            </form>
        </div>
    );
};
export default SignUp;