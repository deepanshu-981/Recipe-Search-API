import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1 >{title}</h1>
      <h2>Ingredients are : </h2>
      <p>
        {
            ingredients.map(ingredient=>(
              <div>{ingredient.text}</div>  
            ))
        }
      </p>
      <p>{calories} Calories</p>
      <img className={style.image} src={image} alt="" />
    </div>
  )
}

export default Recipe;
