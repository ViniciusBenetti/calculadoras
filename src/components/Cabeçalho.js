import './Cabeçalho.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Calculadoras from './Calculadoras';
import PaginaInicial from './PaginaInicial';
import Sobre from './Sobre';
import Contato from './Contato';




function Cabeçalho() {
  return (
    <Router>
    <div id="cabecalho"> 
      <header>
        <a href='/'><img src='https://viniciusbenetti.github.io/web-src/Logo.png' alt="logo" id="headerimg"></img></a>
        <nav>
          <ul>
            <li><a href='/'>MENU INICIAL</a></li>
            <li><a href='/Calculadoras'>CALCULADORAS</a></li>
            <li><a href='/Sobre'>SOBRE NÓS</a></li>
            <li><a href='/Contato'>CONTATO</a></li>
          </ul>
          </nav>


      </header>
    <Routes>
          <Route path="/" element={<PaginaInicial/>}>
          </Route>
          <Route path="/Calculadoras" element={<Calculadoras/>}>
          </Route>
          <Route path="/Sobre" element={<Sobre/>}>
          </Route>
          <Route path="/Contato" element={<Contato/>}>
          </Route>

        </Routes>
    </div>

    </Router>
   
  );
}


export default Cabeçalho;