import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import RecipeCard from '../RecipeCard/RecipeCard'
import { fetchAllRecipes, filterRecipe } from '../Redux/RecipesSlice'
import './Recipes.css'
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Recipes() {
    let recipes = useSelector(state => state.recipes.recipes)
    const favourites = useSelector(state => state.recipes.favourite);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(searchApi).then( response => {
            dispatch(fetchAllRecipes(response.data.meals))
        })

    }, [])

    return (
        <div className="recipesAndFavourites">
            <div className="recipes">
                {
                    recipes.map( (recipe) => {
                        return <RecipeCard  strMealThumb={recipe.strMealThumb} idMeal={recipe.idMeal} strMeal={recipe.strMeal} strCategory={recipe.strCategory}/>
                    })
                }
            </div>

            
        </div>
    )
}

export default Recipes
