import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import FullRecipe from './FullRecipe/FullRecipe';
import Home from './Home/Home';

function App() {

  return (
    <div className="App">
      
      <Routes>  
            <Route path="/" exact element={<Home/>} />
            <Route path="/about/:id" element={<FullRecipe/>} />
      </Routes>
    </div>
  );
}

export default App;
