import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourite, filterRecipe, removeFromFavourite } from '../Redux/RecipesSlice';
import './RecipeCard.css'
let favouriteIds = []

function RecipeCard(props) {
    const recipies = useSelector(state => state.recipes.recipes);
    let favourites = useSelector(state => state.recipes.favourite);
    const dispatch = useDispatch()
    const setFavouriteButtonText = () => {
        let text;
        if(favourites.length!==0){
            for(let i=0; i<favourites.length; i++){
                if(favouriteIds.includes(props.idMeal)){
                    text = "Remove"
                }
                else if(favourites[i].idMeal === props.idMeal){
                    if(!favouriteIds.includes(props.idMeal)){
                        favouriteIds.push(favourites[i].idMeal)
                    }
                    text = "Remove"
                }
                else{
                    text = "Add to favorites"
                }
            }
        }
        else{
            text = "Add to favorites"
        }
        return text
    }

    const setFavouriteClass = () => {
        
        let text;
        if(favourites.length!==0){
            for(let i=0; i<favourites.length;i++){
                if(favouriteIds.includes(props.idMeal)){
                    text = "isAfavourite"
                }
                else if(favourites[i].idMeal === props.idMeal){
                    if(favouriteIds.includes(props.idMeal)){
                        text = "isAfavourite"
                    }
                }
                else{
                    text = "isNotAfavourite"
                }
        
            }
        }
        else{
            console.log("Returning in else")
            text  = "isNotAfavourite"

        }
        return text
    }

    const addOrRemoveFavourite = () => {
        if(favouriteIds.includes(props.idMeal)){
            dispatch(removeFromFavourite({id: props.idMeal}))
            let index = favouriteIds.indexOf(props.idMeal);
            favouriteIds.splice(index)
        }
        else{
            dispatch(addToFavourite({id: props.idMeal}))
        }
    }

    return (
        <div className="reciepeCard">
                 <img className="strMealThumb" src={props.strMealThumb}></img>
            <div className="topInfosReciepe">
                <div className="strMeal">{props.strMeal}</div>
                <div className="strCategory">{props.strCategory}</div>
            </div>
            <div className="infoButtons">
                <button className="seeTheFullRecipe" onClick={ () => dispatch(addToFavourite({id: props.idMeal}))}>See full recipe</button>
                <button onClick={ () => addOrRemoveFavourite()} className={setFavouriteClass()}>{setFavouriteButtonText()}</button>
            </div>
            
        </div>
    )
}

export default RecipeCard
