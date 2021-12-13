import React from 'react'
import Filters from '../Filters/Filters'
import MyFavourites from '../MyFavourites/MyFavourites'
import Navbar from '../Navbar/Navbar'
import Recipes from '../Recipes/Recipes'

function Home(props) {
    return (
        <div>
            <Navbar setThemeBasedOnInput={props.setThemeBasedOnInput} theme={props.theme}/>
            <Filters/>
            <Recipes/>
            <MyFavourites/>
        </div>
    )
}

export default Home
