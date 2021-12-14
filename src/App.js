import { Route, Routes, Link, HashRouter as Router } from "react-router-dom";

import Recipes from "./components/recipes/recipes";
import Greeting from "./components/greeting/greeting";
import Trainers from "./components/trainers/trainers";
import ExerciseArray from "./components/exercises/exercises";


import './App.css';


const changeName = () => {
  do {
    localStorage.removeItem('TCSSuserName');
    localStorage.setItem('TCSSuserName', prompt('What would you like to change your name to?'));
  } while (localStorage.getItem('TCSSuserName').trim() === '');
};

function App() {
  return (
    <Router>
      <div className="container">

        <Routes>
          <Route path="/" exact element={<Greeting />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/exercises" element={<ExerciseArray />} />
          <Route path="/trainers" element={<Trainers />} />
        </Routes>

        <div className="nav-container">
          <i title='Exercises' className='fas fa-cog fa-2x' onClick={changeName}></i>
          <Link to="/recipes">
            <i title='Recipe Search' className='fas fa-utensils fa-2x'></i>
          </Link>
          <Link to="/">
            <img className="logo" src="./img/TCS-logo2.png" alt="TCSS Logo" />
          </Link>
          <Link to="/exercises">
            <i title='Exercises' className='fas fa-dumbbell fa-2x'></i>
          </Link>
          <Link to="/trainers">
            <i title='Trainers' className='fas fa-users fa-2x'></i>
          </Link>
        </div>

      </div>
    </Router>
  );
}

export default App;
