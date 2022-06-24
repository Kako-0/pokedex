import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './common/assets/scss/Main.scss';
import Header from './components/header/Header';
import './index.css'
import PokemonPage from './pages/pokemonPage/PokemonPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='Pokemon' element={<PokemonPage />} />
    </Routes>
  </BrowserRouter>
)
