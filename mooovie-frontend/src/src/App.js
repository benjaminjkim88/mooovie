import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AuthForm from "./components/auth/AuthForm";
import AuthDetails from './components/auth/AuthDetails';
import MainMenu from './pages/MainMenu';
import "./components/auth/signUpStyle.css";

const App = () => {
  return (
    <div className='App'>
        <Routes>
          <Route path='/auth' element={<AuthForm />} />
          <Route path="/details" element={<AuthDetails />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path='/redirect-to-main-menu' 
          element={<Navigate to='/main-menu' />} 
          />
          <Route path="*" element={<Navigate to='/auth' />} />
        </Routes>
    </div>
  );
};

export default App;
