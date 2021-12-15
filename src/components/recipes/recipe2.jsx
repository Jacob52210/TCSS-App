import React from 'react';
import './recipe.css';

const Recipes = ({ title, calories, image, ingredients, servings }) => {
  const serving = Math.round(calories) / servings;

	return (
		<div className='cards'>
			<h2 className='recipe-title'>{title}</h2>
			{ <h4 className='calories'>{Math.round(serving)} Calories Per Serving (Serves {servings})</h4> }
			<img className='gifs' src={image} alt={title} />
			<ul className='ingredients-container'>
				{ingredients.map((ingredient, index) => (
					<li className='ingredient' key={index}>{ingredient.text}</li>
				))}
			</ul>
      <hr />
		</div>
	);
};

export default Recipes;