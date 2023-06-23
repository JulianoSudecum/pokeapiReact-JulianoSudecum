import { useContext, useEffect } from 'react'
import React from "react"
import './App.css'
import { PokemonContext } from './providers/PokemonContext'
import { Pokemon } from './components/Pokemon'
import { Header } from './components/Header'

function App() {
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

export default App
