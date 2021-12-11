import React from 'react';
import './App.css';
import Filters from './Filters/Filters';
import MyFavourites from './MyFavourites/MyFavourites';
import Navbar from './Navbar/Navbar';
import Recipes from './Recipes/Recipes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filters/>
      <Recipes/>
      <MyFavourites/>
    </div>
  );
}

export default App;
