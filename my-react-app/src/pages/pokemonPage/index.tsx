import React, { useEffect, useState } from "react"
import { IPokemon } from "../../providers/PokemonContext"
import api from "../../service/api"
import { StyledPokemonPage } from "./style"
import { AiOutlineRollback } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

interface IPokemonInfos{
    abilities: IAbilities[]
    moves: IMoves[]
    name: string
    species: IPokemon
    stats: IStats[]
    types: ITypes[]
}

interface IAbilities{
    ability:  IAbility
    is_hidden: boolean
    slot: number
}
interface IAbility{
    name: string
    url: string
}

interface IMoves{
    move: IMove
    version_group_details: object
}
interface IMove{
    name: string
    url: string
}

interface IStats{
    base_stat: number
    effort: number
    stat: IStat
}
interface IStat{
    name: string
    url: string
}

interface ITypes{
    slot: number
    type: IType
}
interface IType{
    name: string
    url: string
}

export const PokemonPage = () => {

    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState<IPokemon>()
    const [pokemonInfos, setPokemonInfos] = useState<IPokemonInfos>()
    
    useEffect(() => {
        const pokemonJson = sessionStorage.getItem("@pokemonFocus")
        if(pokemonJson){
            setPokemon(JSON.parse(pokemonJson))
        }
    },[])
    
    const getPokemonInfos = async () => {
        if(pokemon){
            const resp = await api.get(`/pokemon/${pokemon.url.slice(34,-1)}`)
            setPokemonInfos(resp.data)
            console.log(resp.data)
        }
    }
    if(!pokemonInfos){
        getPokemonInfos()
    }

    console.log(pokemonInfos)

    const backToHome = () => {
        navigate("/")
    }

    return(
        <>
            {
                pokemon ? (
                    <StyledPokemonPage className="divContainer">
                        <button onClick={() => backToHome()} className="buttonBackToHome"><AiOutlineRollback size={24} /></button>
                        <div className="pokemonProfile">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.slice(34,-1)}.png`} alt="" />
                            <h1>{pokemon.name.toUpperCase()}</h1>
                        </div>
                        <div className="pokemonInfos">
                            <div>
                                <h2>Habilidades</h2>
                                {
                                    pokemonInfos ? (
                                        pokemonInfos.abilities.map((item)=>{
                                            return(
                                                <p>{item.ability.name.toUpperCase()}</p>
                                            )
                                        })
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                            <div>
                                <h2>Movimentos</h2>
                                {
                                    pokemonInfos ? (
                                        pokemonInfos.moves.map((item,index)=>{
                                            if(index <= 5){
                                                return(
                                                    <p>{item.move.name.toUpperCase()}</p>
                                                )
                                            }
                                        })
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                            <div>
                                <h2>Status</h2>
                                {
                                    pokemonInfos ? (
                                        pokemonInfos.stats.map((item)=>{
                                            return(
                                                <div className="pokemonStats">
                                                    <p>{item.stat.name.toUpperCase()}</p>
                                                    <p>{item.base_stat}</p>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                            <div>
                                <h2>Tipos</h2>
                                {
                                    pokemonInfos ? (
                                        pokemonInfos.types.map((item)=>{
                                            return(
                                                <p>{item.type.name.toUpperCase()}</p>
                                            )
                                        })
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                    </StyledPokemonPage>
                ) : (
                    <></>
                )
            }
        </>
    )
}