import React, { useState, useEffect } from 'react';
import Recipes from './recipe2';
import './recipe.css';
require('dotenv').config();

const Recipe = () => {
	const API_ID = 'd843d4c8';
	const API_KEY = '2e30a51ebccb2f3115c10140b3e38ea0';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('Rhino');
	const [error, setError] = useState(null);

	useEffect(() => {
		getRecipes();
	}, [query]); // Not sure what this does. It throws a warning in console but if I remove it, the code breaks.

	const getRecipes = async () => {
	
		fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=20`)

      .then(function(res) {  
				//console.log(res);
        if ( !res.ok ){
          throw Error(`Could not fetch the requested data. Error Code: ${res.status}`);
        }
        return res.json();
      })
      .then(function(json) {
				if ( json.count ===  0 ){
					throw Error('No results.');
				}
        console.log(json.hits[0]);
        setRecipes(json.hits);
				setError(null);
      })
      .catch(err => {  
        setError(err.message);
      });
		};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className='Recipe'>
			<h1>Recipe Search</h1>
			<form onSubmit={getSearch} className='search-form'>
				<input className='search-bar' type='text' value={search} onChange={updateSearch} placeholder='Search' />
				<button className='search-btn' type='submit'>
					<i className='fas fa-search'></i>
				</button>
			</form>
			
			<div className='search-results'>
				{ error && 
					<div className='error-container'>
						<h2 className='error-message'>{error}</h2>
						{/* <h1>404</h1>
						<h4>{error}Please message us on <a href='https://www.facebook.com/takechargestrengthstudio'>
						<i className="fab fa-facebook-square 3x"></i></a> to resolve the issue.</h4> */}
					</div> 
				}
				<p className='follow-recipe-instructions'>Select a recipe:</p>
				{recipes.map((recipe) => (
					<Recipes
						key={recipe.recipe.image}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						servings={recipe.recipe.yield}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
						url={recipe.recipe.shareAs}
					/>
				))}
			</div>
      
			<footer></footer>
		</div>
	);
};

export default Recipe;
