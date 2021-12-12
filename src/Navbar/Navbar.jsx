import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css'
function Navbar() {
    let favourites = useSelector(state => state.recipes.favourite);
    useDispatch()
    return (
        <div className="navbar">
            <div className="navbarHeading">FOOD RECIPES</div>
            <a href="#favourites"><div className="favouritesButton"><button >My Favorites ({favourites.length})</button></div></a>
        </div>
    )
}

export default Navbar
