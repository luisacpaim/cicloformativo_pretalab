import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Paragrafo from './components/Paragrafo'
import Info from './components/Info'
import Texto from './components/Texto'

function App() {

  return (
    <div>
      <h1>Olá, mundo!</h1>
      <Titulo />
      <Paragrafo />

    <Info quantidade="234" tipo="publicações"/>
    <Info quantidade="7,354" tipo="seguidores"/>
    <Info quantidade="405" tipo="seguindo"/>
    <Texto>Testando o texto como children.</Texto>
    <Texto>Testando novo texto como children.</Texto>
    <Texto>Testando outro texto como children.</Texto>

    
    </div>
  )
} /* as props são usadas como atributos da tag */

export default App
