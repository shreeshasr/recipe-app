import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './FullRecipe.css'
function FullRecipe() {
    let { id } = useParams();
    let requiredRecipie;
    const recipies = useSelector(state => state.recipes.recipes);

    const getFullDetailsOfRecipeFromId = () => {
        console.log("ID = "  +id)
        console.log("recipies.length = "  +recipies.length)
            for(let i=0; i<recipies.length;i++){
                if(recipies[i].idMeal === id){
                    requiredRecipie = recipies[i]
                }
            }
    }
    return (
        <>
        <div className="fullRecipe">
           { 
                getFullDetailsOfRecipeFromId()
           }
            <img className="fullDetailsImage" src={requiredRecipie.strMealThumb} alt="recipeimage"></img>
            <div className="detailsRight">
                <div className="instructions">Instructions : </div>
                <div className="fullDetailsInstructions">{requiredRecipie.strInstructions}</div>
                <div className="youtubeLink">Youtube Link : </div>
                <a href={requiredRecipie.strYoutube} className="fullDetailsYoutubeLink">{requiredRecipie.strYoutube}</a>
            </div>
        </div>
        <div className="backButton">
            <button><Link to={'/'}>Go back</Link></button>
        </div>
            
        </>
    )
}

export default FullRecipe
