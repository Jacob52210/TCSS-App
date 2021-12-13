import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './exercises.css';

class Exercises extends Component {
  render() {
    return (
      <div>
        <h1>Exercises</h1>
        <h3>Will you be working out in the gym today?</h3>
        <div className='options-container'>
        
          <Link to="/no-equipment">
            <i className='fas fa-times fa-5x'></i>
          </Link>
          <Link to="/equipment">
            <i className='fas fa-check fa-5x'></i>
          </Link>
          
        </div>
      </div>
    )
  }
}
export default Exercises;