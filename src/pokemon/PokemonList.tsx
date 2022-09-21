import {useEffect, useState} from "react";
import {Pokemon} from "./Pokemon";
import {getList} from "./PokemonApi";

type PokemonListProps = {
    pokemonList:Pokemon[]
}

export function pokemonList(props:PokemonListProps) {
    const {pokemonList}= props
    const [pokemon]= useState<Pokemon[]>([])

    useEffect(()=>{
        getList()
    },[pokemon])

    return (
        <>
        {pokemon.map((pokemonList, id)=>{
            <div key={id}>{pokemonList.imageSrc}</div>
        })}

        </>
        )

}
