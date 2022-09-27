import React, { useState, useEffect } from 'react'
import {Pokemon} from "./Pokemon";
import axios from 'axios'

export default function PokemonList() {
    const url = 'http://interview-server.useabacus.io/test-data?project_code=luis-abacus-project'
    const [pokemonList, setPokemonList] = useState<Pokemon[]>()
    let content = null

    useEffect( () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPokemonList(data);
            });
        }, [] )

    if(pokemonList) {
        return (
            <div>
                {pokemonList.map(pokemon => (
                <div key={pokemon.id}>
                    <img src={pokemon.image_src} height={200} width={200}/>
                    <h2>{pokemon.name}</h2>
                    <h4>Type: {pokemon.type}</h4>
                    <h4>Description: <br/> <span>{pokemon.description}</span></h4>
                    <h4><span>Notes: {pokemon.notes}</span></h4>
                </div>
            ))}
            </div>
        )
    }

    return (
        <div>

        </div>
    )
}