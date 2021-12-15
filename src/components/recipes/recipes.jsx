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
	}, [query]);

	const getRecipes = async () => {
	
		fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&to=20`)

      .then(function(res) {  
        if ( !res.ok ){
          throw Error('Could not fetch the requested data. ');
        }
        return res.json();
      })
      .then(function(json) {
        console.log(json.hits);
        setRecipes(json.hits);
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
			{ error && <h4>{error}Please message us on <a href='https://www.facebook.com/takechargestrengthstudio'>
          <i className="fab fa-facebook-square 3x"></i></a> to resolve the issue.</h4> }
				{recipes.map((recipe) => (
					<Recipes
						key={recipe.recipe.image}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						servings={recipe.recipe.yield}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
      
			<footer></footer>
		</div>
	);
};

export default Recipe;
