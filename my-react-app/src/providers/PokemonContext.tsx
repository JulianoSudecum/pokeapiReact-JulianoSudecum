import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { IPokemonInfos } from "../pages/pokemonPage";
import api from "../service/api";

interface IPokemonProps{
    children: React.ReactNode
}

interface IPokemonContext{
    pokemonList: IPokemon[]
    pokemonRequest: () => Promise<void>
    filteredPokemons: IPokemon[]
    setFilteredPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>
    pokemonFullBody: IPokemonInfos[]
    setPokemonFullBody: React.Dispatch<React.SetStateAction<IPokemonInfos[]>>
}

export interface IPokemon{
    name: string
    url: string
}

export const PokemonContext = createContext({} as IPokemonContext)

export const PokemonProvider = ({children}: IPokemonProps) => {
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])
    const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([])
    const [pokemonFullBody, setPokemonFullBody] = useState<IPokemonInfos[]>([])

    const pokemonRequest = async () => {
        try {
            const resp = await api.get("/pokemon")
            setPokemonList(resp.data.results)
        } catch (error) {
            toast.error("Ocorreu um erro na coleta dos dados", {autoClose:3000, position: "bottom-right"})
        }
    }
    
    return(
        <PokemonContext.Provider value={{pokemonList, pokemonRequest, filteredPokemons , setFilteredPokemons, pokemonFullBody, setPokemonFullBody}}>
            {children}
        </PokemonContext.Provider>
    )
}