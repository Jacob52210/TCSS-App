import React, { useState } from 'react'
import './body_parts.css';




function NoGym() {

  const [data, setData] = useState([]);
  


  function chestAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": "a7db697272mshf83894164fb9651p19c31ejsn385335820313"
    }
    }).then(function(res) {  
      return res.json();
    }).then(function(json) {
      
      //console.log(json);
      setData(json);
    }).catch(err => {
    console.error(err);
  
    });
  }

  function neckAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/neck", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": "a7db697272mshf83894164fb9651p19c31ejsn385335820313"
    }
    }).then(function(res) {  
      return res.json();
    }).then(function(json) {
      
      //console.log(json);
      setData(json);
    }).catch(err => {
    console.error(err);
  
    });
  }


  return (

    <div>
      <h1>No Gym</h1>
      <h3>What would you like to workout today?</h3>

      <div className='body-parts-container'>
        <ul>
          <li onClick={() => chestAPIcall()}>Chest</li>
          <li>Back</li>
          <li>Waist / Abs</li>
          <li>Upper Arms</li>
          <li>Lower Arms</li>
        </ul>
        <ul>
          <li onClick={() => neckAPIcall()}>Neck</li>
          <li>Shoulders</li>
          <li>Cardio</li>
          <li>Upper Legs</li>
          <li>Lower Legs</li>
        </ul>
      </div>

      <div className='results-container'>
        <h2>Your results are below:</h2>
        {data.map(exercise => 
          <div key={exercise.id} className='single-exercise'>
            <img className='gifs' src={exercise.gifUrl} alt={exercise.name} />
            <figcaption>{exercise.name.toUpperCase()}</figcaption>
          </div>
          )}
      </div>

    </div>
  )
  
}
export default NoGym;