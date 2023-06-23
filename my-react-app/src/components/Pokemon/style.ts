import styled from 'styled-components';

export const StyledPokemon = styled.li`
    background-color: var(--grey-0);
    list-style:none;
    width: 250px;
    display: flex;
    align-items: center;
    justify-content:center;
    border-radius: 5px;
    border: 2px solid var(--grey-0);
    transition:0.5s;

    img{
        text-align:center;
    }

    p{
        text-align: center;
    }

    :hover{
        border: 2px solid var(--color-primary);
        transform: scale(1.05);
    }

    .divPokemonContainer{
        width: 90%;
        height: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .divPokemonDescription{
        background-color: white;
        width: 100%;
        height:250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        border-radius: 5px;

        > p{
            display:flex;
            align-items: center;
            gap:30px;

            >img{
                width:30px;
            }
        }
    }

    .divPokemonTypes{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:  20px;

        > img{
            width:30px;
        }
    }
`