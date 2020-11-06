import React from 'react';
import { NavLink } from 'react-router-dom'
import ImgBg from 'assets/img/atul-vinayak-J8c1hkwrr-8-unsplash.jpg'
import './App.css';

function App() {

  return (
    <div>
      <img src={ImgBg} alt="BgImg" className="imgBg"></img>
      <div className=" pokeApp">
        <h1>Pokemon</h1>
        <div>
          <NavLink className="btn btn-outline-success" to="/pokemonList">Pokemon List</NavLink>
        </div>
        <div>
          <NavLink className="btn btn-outline-success" to="/pokemonList">My Pokemon</NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
