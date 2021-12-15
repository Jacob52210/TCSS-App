import React, { useState } from 'react'
import './body_parts.css';




function ExerciseArray() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  


  function chestAPIcall(){
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": "a7db697272mshf83894164fb9651p19c31ejsn385335820313"
    }
    }).then(function(res) {  
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
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
      if ( !res.ok ){
        throw Error('Could not fetch the requested data. ');
      }
      return res.json();
    })
    .then(function(json) {
      //console.log(json);
      setData(json);
    })
    .catch(err => {  
      setError(err.message);
    });
  }

  //--------- The function below is the modified fetch with error handling. --------------------------------

  function lowerLegsAPIcall(){
    
  
    fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      "x-rapidapi-key": "a7db697272mshf83894164fb9651p19c31ejsn385335820313"}})

      .then(function(res) {  
        if ( !res.ok ){
          throw Error('Could not fetch the requested data. ');
        }
        return res.json();
      })
      .then(function(json) {
        //console.log(json);
        setData(json);
      })
      .catch(err => {  
        setError(err.message);
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
        { error && <h4>{error}Please message us on <a href='https://www.facebook.com/takechargestrengthstudio'>
          <i className="fab fa-facebook-square 3x"></i></a> to resolve the issue.</h4> }
        {
        data.map(exercise => 
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