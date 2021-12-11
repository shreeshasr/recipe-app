import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './MyFavourites.css'
function MyFavourites() {
    let favourites = useSelector(state => state.recipes.favourite);
    const dispatch = useDispatch()

    const favouritesToDisplay = () => {
        if(favourites.length == 0){
            return(
                <>
                <div className="noFavouirte">There are no favourites! ⭐</div>
                <div className="noFavouirte">Add your favourites from the cards 😊 </div>
                </>
            )
        }
        else{
            return(
                <>
                <div className="favoriteList">Your favourites ⭐ are </div>
                <ol>
                {
                    
                    favourites.map( (favourite) => {
                        return <li className="favouriteItem">{favourite.strMeal} - ({favourite.strCategory})</li>
                    })
                }
                </ol> 
                </>
            )
        }
    }
    return (
        <div className="myFavourites" id="favourites">
            {
                favouritesToDisplay()  
            }
        </div>
    )
}

export default MyFavourites
