import { StyledHeader } from "./style"
import {BiSearch} from "react-icons/bi"
import {SiPokemon} from "react-icons/si"
import React from "react"
import { useState } from "react"
import { useContext } from "react"
import { IPokemon, PokemonContext } from "../../providers/PokemonContext"
import { toast } from "react-toastify"

export const Header = () => {
    const {pokemonList, setFilteredPokemons} = useContext(PokemonContext)
    const [searchValue, setSearchValue] = useState<string>("")
    
    const inputChangeEvent = (inputValue:string) => {

        if(inputValue == ""){
            setFilteredPokemons([])
        }
        setSearchValue(inputValue)
    }

    const searchPokemonClick = () => {
        const filteredArray = pokemonList.filter((pokemon:IPokemon) => pokemon.name.includes(searchValue))
        setFilteredPokemons(filteredArray)

        if(filteredArray.length == pokemonList.length){
            toast.error("Nenhum pokemon foi encontrado", {autoClose: 3000, position: "bottom-right"})
        }
    }

    return(
        <StyledHeader>
            <SiPokemon className="pokemonHeaderLogo" size={150}/>
            <div className="divSearch">
                <input onChange={(e) => inputChangeEvent(e.target.value)} type="text" />
                <button onClick={() => searchPokemonClick()}><BiSearch /></button>
            </div>
        </StyledHeader>
    )
}