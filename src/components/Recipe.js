import React from "react";
import style from '../components/recipe.module.css';

//{} is for deconstructuring
//basically taking from the State,passing down as props, then into this components
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 >{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
