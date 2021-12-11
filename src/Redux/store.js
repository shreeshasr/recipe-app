import { configureStore } from "@reduxjs/toolkit";
import recipeReducers  from "../Redux/RecipesSlice"
export const store = configureStore({
    reducer: {
        recipes : recipeReducers
    }
})