import { Route, Routes, Link, HashRouter as Router } from "react-router-dom";

import Recipes from "./components/recipes/recipes";
import Greeting from "./components/greeting/greeting";
import Trainers from "./components/trainers/trainers";
import ExerciseArray from "./components/exercises/exercises";

import Jake from "./components/trainers/Jake";
import James from "./components/trainers/James";
import Chrissy from "./components/trainers/Chrissy";

import HiddenMenu from "./components/hidden_menu/hidden_menu";


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
          <Route path="/trainers/Jake" element={<Jake />} />
          <Route path="/trainers/James" element={<James />} />
          <Route path="/trainers/Chrissy" element={<Chrissy />} />
          <Route path="/hidden_menu" element={<HiddenMenu />} />
        </Routes>

        

        <div className="nav-container">

          <div className="icon-container">
            <i title='Exercises' className='fas fa-cog fa-2x nav-icon' onClick={changeName}></i>
            <Link to="/recipes">
              <i title='Recipe Search' className='fas fa-utensils fa-2x nav-icon'></i>
            </Link>
            <Link to="/">
              <img className="logo active" src="./img/TCS-logo2.png" alt="TCSS Logo" />
            </Link>
            <Link to="/exercises">
              <i title='Exercises' className='fas fa-dumbbell fa-2x nav-icon'></i>
            </Link>
            <Link to="/trainers">
              <i title='Trainers' className='fas fa-users fa-2x nav-icon'></i>
            </Link>
          </div>

          <Link to="/hidden_menu">
            <hr className="hidden-menu-btn" />
          </Link>

        </div>

        

      </div>
    </Router>
  );
}

export default App;
