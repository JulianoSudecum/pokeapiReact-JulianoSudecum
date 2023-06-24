import styled from 'styled-components';

export const StyledPokemonPage = styled.div`

height: 100vh;
display: flex;
-webkit-box-align: center;
-webkit-box-pack: center;
justify-content: flex-start;
align-items: center;
flex-direction: column;

.buttonBackToHome{
    position: fixed;
    top: 10px;
    left: 10px;

    background-color: transparent;
    border: none;

    svg{
        background-color: black;
        color: white;
        padding: 0.6rem;
        border-radius: 5px;
        cursor: pointer;

        transition: 0.5s;

        :hover{
            background-color: var(--color-primary);
        }
    }
}

.pokemonProfile{

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;


    img{
        width: 10rem;
    }
}

.pokemonInfos{
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: grid;
    justify-content: center;

    gap: 1.5rem;

    border-radius: 5px;

    background-color:var(--grey-1);
    padding: 1.5rem;

    > div{

        h2{
            margin: 0 auto;
            padding-bottom: 15px;
        }

        background-color: white;
        border-radius: 5px;
        border: 2px solid var(--grey-1);
        padding: 2rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        text-align:center;
        transition: 0.5s;

        :hover{
            border: 2px solid var(--color-primary);

            box-shadow: var(--color-primary) 0px 3px 12px;
            h2{
                color: var(--color-primary);
            }
        }
    }
}

.pokemonStats{
    display:flex;
    flex-direction: row;

    align-items: center;

    gap:5px;
    margin: 20px 0px;



    > p{
        padding: 0px;
        margin: 0px;
    }
}

.divTextContainer{
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 5px;

    img{
        width: 25px;
    }
}

@media(max-width: 1200px){

    h1{
        margin:0px;
    }

    .pokemonInfos{
        grid-template-columns: 1fr 1fr;

        gap: 10px;
        padding: 10px;
    }
}

@media(max-width: 470px){
    .pokemonInfos{
        grid-template-columns: 1fr;
        width: 80%;
    }
}

`