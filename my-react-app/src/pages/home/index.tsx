import React, { useContext, useEffect } from "react"
import { Header } from "../../components/Header"
import { Pokemon } from "../../components/Pokemon"
import { PokemonContext } from "../../providers/PokemonContext"

export const Home = () => {
    const { pokemonList, pokemonRequest, filteredPokemons } = useContext(PokemonContext)

    useEffect(()=> {
      pokemonRequest()
    },[])
  
    return (
      <div className='divContainer'>
        <Header />
        <ul className='pokemonList'>
          {
            !filteredPokemons.length ? (
              pokemonList.map((pokemon, index) => {
                return(
                  <Pokemon pokemon={pokemon} index={index} key={index}/>
                )
              })
            ) : (
              filteredPokemons.map((pokemon, index) => {
                return(
                  <Pokemon pokemon={pokemon} index={index} key={index}/>
                )
              })
            )
          }
        </ul>
      </div>
    )
}