import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import MainMenu from "./pages/MainMenu"
import SignUp from './components/SignUp';
import { useState } from 'react';

const App = () => {

  const [isLoggedIn, setIsLogged] = useState(false);
  const nav = useNavigate();

  const handleSignIn = () => {
    setIsLogged(true);
    nav('/');
  };

    return (
      <div>
        <Routes>
        <Route
        path='/'
        element={
          isLoggedIn ? (
            <MainMenu />
          ) : (

            <SignUp onSignIn={handleSignIn} /> //SignIn passed as prop
            )
        }
        />
        </Routes>
      </div>
      
    );
  };
  
  export default App;
  