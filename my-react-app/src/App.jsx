import React from "react"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { PokemonProvider } from "./providers/PokemonContext"
import RouterMain from './routes'
import { GlobalStyle } from './GlobalStyle';

function App() {
  return(
    <>
    <ToastContainer />
      <PokemonProvider>
        <RouterMain />
      </PokemonProvider>
    <GlobalStyle />
    </>
  )
}

export default App
