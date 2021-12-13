import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Exercises from "./components/exercises/exercises";
import Recipes from "./components/recipes/recipes";
import Greeting from "./components/greeting/greeting";
import Trainers from "./components/trainers/trainers";
import YesGym from "./components/exercises/equipment";
import NoGym from "./components/exercises/no-equipment";


import './App.css';


const changeName = () => {
  do {
    localStorage.removeItem('userName');
    localStorage.setItem('userName', prompt('Enter A New Name:'));
  } while (localStorage.getItem('userName').trim() === '');
};

function App() {
  return (
    <Router>
      <div className="container">

        <Routes>
          <Route path="/" exact element={<Greeting />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/no-equipment" element={<NoGym />} />
          <Route path="/equipment" element={<YesGym />} />
        </Routes>

        <div className="nav-container">
          <i title='Exercises' className='fas fa-cog fa-2x' onClick={changeName}></i>
          <Link to="/recipes">
            <i title='Recipe Search' className='fas fa-utensils fa-2x'></i>
          </Link>
          <Link to="/">
            <img src="/img/TCS-logo2.png" alt="TCSS Logo" title='Change Your Name' />
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
