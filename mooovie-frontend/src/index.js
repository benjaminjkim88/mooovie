import React from 'react';
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App';

// Configures routing using React Router and renders the root component "App"
const app = document.getElementById('root')
const root = createRoot(app)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);