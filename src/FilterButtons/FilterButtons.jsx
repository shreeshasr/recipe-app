import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipes, filterRecipe } from '../Redux/RecipesSlice'
import './FilterButtons.css'
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function FilterButtons() {
    useSelector(state => state.recipes.favourite);
    const dispatch = useDispatch()
    let filters = ["All", "Side", "Vegetarian", "Pork", "Chicken", "Dessert", "Sea food", "Pasta", "Miscellaneous"]

    const refillAndFilterRecipies = async (filter) => {
        await axios.get(searchApi).then( response => {
            dispatch(fetchAllRecipes(response.data.meals))
        })
        if(!(filter === "All")){
            dispatch(filterRecipe({category: filter}))
        }
        
    }
    return (
        <div className="filterButton">
            {
                filters.map( (filter) => {
                   return <button onClick={ () => refillAndFilterRecipies(filter)}>{filter}</button>
                })
            }
           
        </div>
    )
}

export default FilterButtons
