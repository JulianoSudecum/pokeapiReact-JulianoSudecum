import  styled  from 'styled-components';

export const StyledHeader = styled.header`

position:sticky;
top:0;
width: 100%;
height: 100px;
backdrop-filter: blur(5px);
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-around;

.pokemonHeaderLogo{
    color: var(--color-primary);
}

input, button{
    padding: 0.6rem 1.2rem;
}

.divSearch{
    display:flex;
}

.divSearch > button{
    border-radius: 0px 5px 5px 0px;
    border: 2px solid var(--color-primary); 
    cursor: pointer;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    svg{
        color: white;
    }
}

.divSearch > input{ 
    border-radius: 5px 0px 0px 5px;
    border:none;
    border-top: 2px solid var(--grey-1);
    border-left: 2px solid var(--grey-1);
    border-bottom: 2px solid var(--grey-1);
    outline:none;
    background-color: var(--grey-0);
    transition: 0.5s;
    :focus{
        border-top: 2px solid var(--color-primary);
        border-left: 2px solid var(--color-primary);
        border-bottom: 2px solid var(--color-primary);
    }
}

@media(max-width:536px){
    flex-direction:column;
}
`