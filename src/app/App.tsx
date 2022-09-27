import React, { useState, } from 'react'
import PokemonList from './PokemonList'
import PokemonPost from "./PokemonPost";


function App() {

    return (
         // this class is how tailwind is implemented, kind of like bootstrap.
        <div className={'p-4 bg-slate-300'}>
            <h1>This is the Pokemon page</h1>
            <span><PokemonList/></span>
        </div>

    );
}

export default App;
