import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css'
function Navbar(props) {
    let buttonClass;
    let buttonText;
    let favourites = useSelector(state => state.recipes.favourite);
    useDispatch()
    
    const setButtonClass = () => {
        return props.theme === "Light Mode" ? "buttonDark" : "buttonLight"
    }

    const setButtonText = () => {
        return props.theme === "Dark Mode" ? "Light Mode" : "Dark Mode" 
    }

    return (
        <div className="navbar">
            <div className="navbarHeading">FOOD RECIPES</div>
            <a href="#favourites"><div className="favouritesButton"><button >FAVORITES ({favourites.length})</button></div></a>
            <button className={'themeChangeButton ' +setButtonClass()} onClick={ () => props.setThemeBasedOnInput()}>{setButtonText()}</button>
        </div>
    )
}

export default Navbar
