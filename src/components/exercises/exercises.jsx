import React, { useState } from 'react'
import './body_parts.css';




function ExerciseArray() {

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

  function backAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/back", {
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

  function shouldersAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders", {
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

  function waistAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist", {
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

  function cardioAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio", {
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

  function upperArmsAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms", {
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

  function upperLegsAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs", {
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
  function lowerArmsAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20arms", {
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
  function lowerLegsAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs", {
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
      <div className='header-container'>
        <h1>Exersices</h1>
        <h3>What would you like to workout today?</h3>
      </div>
      

      <div className='body-parts-container'>
        <ul>
          <li className='body-part-btn' onClick={() => chestAPIcall()}>Chest</li>
          <li className='body-part-btn' onClick={() => backAPIcall()}>Back</li>
          <li className='body-part-btn' onClick={() => waistAPIcall()}>Waist / Abs</li>
          <li className='body-part-btn' onClick={() => upperArmsAPIcall()}>Upper Arms</li>
          <li className='body-part-btn' onClick={() => lowerArmsAPIcall()}>Lower Arms</li>
        </ul>
        <ul>
          <li className='body-part-btn' onClick={() => neckAPIcall()}>Neck</li>
          <li className='body-part-btn' onClick={() => shouldersAPIcall()}>Shoulders</li>
          <li className='body-part-btn' onClick={() => cardioAPIcall()}>Cardio</li>
          <li className='body-part-btn' onClick={() => upperLegsAPIcall()}>Upper Legs</li>
          <li className='body-part-btn' onClick={() => lowerLegsAPIcall()}>Lower Legs</li>
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
export default ExerciseArray;