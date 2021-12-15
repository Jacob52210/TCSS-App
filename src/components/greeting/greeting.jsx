import React, { useState } from 'react'
import "./greeting.css";






const Greeting = () => {

	function setName() {

		let yourName = localStorage.getItem('TCSSuserName');
	
		if (yourName === null || yourName === '') {
			return (yourName = localStorage.setItem('TCSSuserName', prompt('Welcome to Take Charge Strenght Studios! What can I call you?')));
		}
		
	
	}
	setName();

	const [data, setData] = useState([]);
  const [error, setError] = useState(null);
	const quote = localStorage.getItem('TCSS-quote');

	function greetingAPIcall() {

		if(quote === null || quote === undefined || quote === ''){

			fetch("https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info", {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
				"x-rapidapi-key": "a7db697272mshf83894164fb9651p19c31ejsn385335820313"
			}
			})
			.then(res => {
				console.log(res);
				if ( !res.ok ){
					setData([]);
					throw Error(`"I don't chase. I attract. What belongs to me will find me. Simple."`);
				}
				return res.json();
			})
			.then(function(json) {
				localStorage.setItem('TCSS-quote', json);
				console.log(json);
				setData(json);
			})
			.catch(err => {
				setError(err.message);
			});
			
		}

		
	}
	
	return (
	<div className='greeting-container'>
		
		<h1>{'Welcome ' + localStorage.getItem('TCSSuserName') + '!'}</h1>
		<h3>Please be patient as we develop the app.</h3>

		<div className='quote-container'>
			{error && <h1>{error}</h1>}
			{data && <p className="quote">{data.text}</p> }
			{data && <p className="author">{data.author}</p> }
		</div>

	</div>
	)
  
}
export default Greeting;