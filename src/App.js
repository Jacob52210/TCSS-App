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
          <Route path="/TCSS-App/" exact element={<Greeting />} />
          <Route path="/TCSS-App/recipes" element={<Recipes />} />
          <Route path="/TCSS-App/exercises" element={<Exercises />} />
          <Route path="/TCSS-App/trainers" element={<Trainers />} />
          <Route path="/TCSS-App/no-equipment" element={<NoGym />} />
          <Route path="/TCSS-App/equipment" element={<YesGym />} />
        </Routes>

        <div className="nav-container">
          <i title='Exercises' className='fas fa-cog fa-2x' onClick={changeName}></i>
          <Link to="/TCSS-App/recipes">
            <i title='Recipe Search' className='fas fa-utensils fa-2x'></i>
          </Link>
          <Link to="/TCSS-App/">
            <img src="/img/TCS-logo2.png" alt="TCSS Logo" />
          </Link>
          <Link to="/TCSS-App/exercises">
            <i title='Exercises' className='fas fa-dumbbell fa-2x'></i>
          </Link>
          <Link to="/TCSS-App/trainers">
            <i title='Trainers' className='fas fa-users fa-2x'></i>
          </Link>
         
        </div>

      </div>
    </Router>
  );
}

export default App;
