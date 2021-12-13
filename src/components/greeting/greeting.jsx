import React, { Component } from 'react'
import "./greeting.css";


function setName() {

	let yourName = localStorage.getItem('TCSSuserName');

	if (yourName === null || yourName === '') {
		return (yourName = localStorage.setItem('TCSSuserName', prompt('Welcome to Take Charge Strenght Studios! What can I call you?')));
	}
	

}
setName();



class Greeting extends Component {
  render() {
    return (
    <div className='greeting-container'>
			<h1>{'Welcome ' + localStorage.getItem('TCSSuserName') + '!'}</h1>

			<h3>Please be patient as we develop the app.</h3>
		</div>
    )
  }
}
export default Greeting;