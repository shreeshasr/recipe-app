import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Navbar.css'
function Navbar(props) {
    let buttonClass;
    let buttonText;
    let favourites = useSelector(state => state.recipes.favourite);
    useDispatch()
    
    const setButtonClass = () => {
        if(props.theme === "Light Mode"){
          buttonClass = "buttonDark"
        }
        else{
          console.log("Setting dark")
          buttonClass = "buttonLight"
        }
        return buttonClass
    }

    const setButtonText = () => {
        if(props.theme === "Dark Mode"){
          buttonText = "Light Mode"
        }
        else{
            buttonText = "Dark Mode"
        }
        return buttonText
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
