import React from "react"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { PokemonPage } from "../pages/pokemonPage"

const RouterMain = () => {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/pokemon" element={ <PokemonPage /> } />
        </Routes>
    )
}

export default RouterMain