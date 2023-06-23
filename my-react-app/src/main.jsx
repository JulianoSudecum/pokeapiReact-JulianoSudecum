import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { PokemonProvider } from './providers/PokemonContext';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>
      <ToastContainer />
      <App />
      <GlobalStyle />
    </PokemonProvider>
  </React.StrictMode>,
)
