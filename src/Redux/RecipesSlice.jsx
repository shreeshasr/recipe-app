import { createSlice} from "@reduxjs/toolkit";
const initialState = {
    recipes : [],
    favourite : []
}

export const RecipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {

        fetchAllRecipes:   (state, {payload}) => {
            state.recipes = payload
        },
        addToFavourite: (state, action) => {           
            for(let i=0; i<state.recipes.length;i++){
                if(state.recipes[i].idMeal === action.payload.id){
                    state.favourite.push(state.recipes[i])
                }
            }
        },
        removeFromFavourite: (state, action) => {    
            console.log(JSON.stringify(state.favourite))       
            for(let i=0; i<state.favourite.length;i++){
                if(state.favourite[i].idMeal === action.payload.id){
                    let index = state.favourite.findIndex(x => x.idMeal === action.payload.id);
                    state.favourite.splice(index, 1)
                }
            }
        },
        filterRecipe: (state, action) => {
            state.recipes = state.recipes.filter( (recipe) => recipe.strCategory === action.payload.category)
        }
    }
})

export const {fetchAllRecipes, addToFavourite, removeFromFavourite, filterRecipe} = RecipesSlice.actions

export default RecipesSlice.reducer