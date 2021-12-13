import React, { Component } from 'react'
import './body_parts.css';

class YesGym extends Component {
  render() {
    return (
      <div>
        <h1>Yes Gym</h1>
        <h3>What would you like to workout today?</h3>

      <div className='body-parts-container'>
        <ul>
          <li>Chest</li>
          <li>Back</li>
          <li>Waist / Abs</li>
          <li>Upper Arms</li>
          <li>Lower Arms</li>
        </ul>
        <ul>
          <li>Neck</li>
          <li>Shoulders</li>
          <li>Cardio</li>
          <li>Upper Legs</li>
          <li>Lower Legs</li>
        </ul>
      </div>

      </div>
    )
  }
}
export default YesGym;