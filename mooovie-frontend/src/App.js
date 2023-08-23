import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import MoviePage from "./pages/Movie";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/movie-example" element={<MoviePage />} />
      </Routes>
    </div>
  );
};

export default App;
