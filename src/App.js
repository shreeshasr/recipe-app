import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import FullRecipe from './FullRecipe/FullRecipe';
import Home from './Home/Home';

function App() {
  let background;
  const [theme, setTheme] = useState("Light Mode")
  
    const setThemeBasedOnInput = () => {
        setTheme(theme==="Light Mode" ? "Dark Mode" : "Light Mode")
        console.log("theme set to " + theme)
    }
  
    const setBackgroundClass = () => {
      if(theme === "Light Mode"){
        background = "light"
        document.body.style = 'background: white;';
      }
      else{
        background = "dark"
        document.body.style = 'background: black;';
      }
      return background
  }

  return (
    <div className={'App ' + setBackgroundClass()}>
      
      <Routes>  
            <Route path="/" exact element={<Home setThemeBasedOnInput={setThemeBasedOnInput} theme={theme}/>} />
            <Route path="/about/:id" element={<FullRecipe/>} />
      </Routes>
    </div>
  );
}

export default App;
