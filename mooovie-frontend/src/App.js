import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainMenu from "./pages/MainMenu"

const App = () => {
    return (
      <div>
        <Routes>
          <Route path='/' element={<MainMenu />} />
        </Routes>
      </div>
      
    );
  }
  
  export default App;
  