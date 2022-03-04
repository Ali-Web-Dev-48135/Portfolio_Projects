import React from "react";
import styles from './Recipe.module.css';
const Recipe = ({title, calories, recipeImage, ingredients}) => {
    return (
        <div className={styles.recipe}>
            <h1 >{title }</h1>
            <ul className={styles.mainUl}>
                {
                    ingredients.map( i => {
                        return (
                            <li key={Math.random() * 200}>{i.text}</li>
                        )
                    })
                }
            </ul>
            <p>{Math.round(calories)} Calories</p>
            <img src={recipeImage} alt={title}/>
        </div>
    )
};


export default Recipe;