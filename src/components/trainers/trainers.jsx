import React from 'react'
import { Link } from 'react-router-dom';
import './trainers.css';


function Trainers() {
 
  return (
    <div className='trainers-page'>
      <h1>{localStorage.getItem('TCSSuserName')}, meet your trainers!</h1>
      <div className='trainer-links'>
        <Link to="/trainers/Chrissy">
          <h1>Chrissy</h1>
        </Link>
        <Link to="/trainers/James">
          <h1>James</h1>
        </Link>
        <Link to="/trainers/Jake">
          <h1>Jake</h1>
        </Link>
      </div>
      
    </div>
  )
  
}
export default Trainers;