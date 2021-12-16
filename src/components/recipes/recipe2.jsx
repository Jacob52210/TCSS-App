import React from 'react';
import './recipe.css';

const Recipes = ({ title, calories, image, ingredients, servings, url }) => {
  const serving = Math.round(calories) / servings;

	return (
		<div className='cards'>
			<h2 className='recipe-title'>{title}</h2>
			<a href={url}><img className='gifs' src={image} alt={title} /></a>
			{ <h4 className='calories'>{Math.round(serving)} Calories Per Serving</h4> }
			{/* <ul className='ingredients-container'>
				{ingredients.map((ingredient, index) => (
					<li className='ingredient' key={index}>{ingredient.text}</li>
				))}
			</ul> */}
      <hr className='recipe-seperater' />
		</div>
	);
};

export default Recipes;