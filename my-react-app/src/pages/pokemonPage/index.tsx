import React, { useEffect, useState } from "react"
import { IPokemon } from "../../providers/PokemonContext"
import api from "../../service/api"
import { StyledPokemonPage } from "./style"
import { AiOutlineRollback, AiOutlineHeart } from "react-icons/ai"
import { PiSwordDuotone, PiSwordBold } from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import { GiWalkingBoot } from "react-icons/gi"
import { BiShield, BiSolidShield } from "react-icons/bi"
import { TbArrowBigRightLines } from "react-icons/tb"
import { LuDna } from "react-icons/lu"

export interface IPokemonInfos{
    abilities: IAbilities[]
    moves: IMoves[]
    name: string
    species: IPokemon
    stats: IStats[]
    types: ITypes[]
    id: number
    weight: number
    base_experience: number
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
        }
    }
    if(!pokemonInfos){
        getPokemonInfos()
    }

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
                                                <div className="divTextContainer">
                                                    <img src="skill-development.png" alt="" />
                                                    <p>{item.ability.name.toUpperCase()}</p>
                                                </div>
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
                                                    <div className="divTextContainer">
                                                        <GiWalkingBoot />
                                                        <p>{item.move.name.toUpperCase()}</p>
                                                    </div>
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
                                                    {
                                                        item.stat.name == "hp" ? (
                                                            <AiOutlineHeart />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                    {
                                                        item.stat.name == "attack" ? (
                                                            <PiSwordDuotone />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                    {
                                                        item.stat.name == "defense" ? (
                                                            <BiShield />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                    {
                                                        item.stat.name == "special-attack" ? (
                                                            <PiSwordBold />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                    {
                                                        item.stat.name == "special-defense" ? (
                                                            <BiSolidShield />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                    {
                                                        item.stat.name == "speed" ? (
                                                            <TbArrowBigRightLines />
                                                        ) : (
                                                            <></>
                                                        )
                                                    }
                                                    <p>{item.stat.name.toUpperCase()}: </p>
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
                                                <div className="divTextContainer">
                                                    <LuDna />
                                                    <p>{item.type.name.toUpperCase()}</p>
                                                </div>
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