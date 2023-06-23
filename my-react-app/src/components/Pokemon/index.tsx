import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { toast } from "react-toastify"
import { PokemonContext } from "../../providers/PokemonContext"
import api from "../../service/api"
import { StyledPokemon } from "./style"

interface IPokemonType{
    name:string
    url:string
}

interface IPokemonStats{
    slot: number
    type: IPokemonType
}

export const Pokemon = ({pokemon, index}) => {
    let renderedPokemonDesc:boolean

    const { pokemonRequest } = useContext(PokemonContext)
    const [pokemonFullBody, setPokemonFullBody] = useState<any>([])
    const pokemonIndex = pokemon.url.slice(34,-1)

    useEffect(() => {
        async function fetchPokemonStats() {
            if(!renderedPokemonDesc){
                try {
                    const { data } = await api.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
                    setPokemonFullBody([...pokemonFullBody, data])
                } catch (error) {
                    toast.error("Erro ao obter os stats do Pokémon", {autoClose:3000});
                }
            }
        }
        fetchPokemonStats();
    }, [pokemonRequest]);

    return(
        <StyledPokemon key={index}>
            <div className="divPokemonContainer">
                <p>{pokemon.name.toUpperCase()}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`} alt="" />
                    {
                        pokemonFullBody.map((pokemonStats) => {
                            if(pokemonStats.id == pokemon.url.slice(34,-1)){
                                renderedPokemonDesc = true
                                return(
                                    <div className="divPokemonDescription">
                                        <p><img src="weight.png" alt="" /> {pokemonStats.weight}</p>
                                        <p><img src="xp.png" alt="" /> {pokemonStats.base_experience}</p>
                                        <div className="divPokemonTypes">
                                            <img src="element.png" alt="" />
                                            <div>
                                            {
                                                pokemonStats.types.map((item:IPokemonStats) => {
                                                    return(
                                                        <p>{item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}</p>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
            </div>
        </StyledPokemon>
    )
}