import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main'
import Filme from './components/Filme'
import Anime from './components/Anime'

export default function Roi() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/Filme'>Filme</Link></li>
          <li><Link to='/Anime'>Anime</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Filme />} path='/Filme' />
        <Route element={<Anime />} path='/Anime' />
      </Routes>
    </BrowserRouter>

  )
}

/* 
BrowserRouter é responsavel por permitir que o roteamento aconteça em nossa página além de ser a caixa pai que irá englobar toda e qualquer informação sobre nossas rotas.

Routes é a caixa responsavel que ira guardar cada uma das rotas que nos criamos em nossas paginas, toda e qualquer rota será guardada dentro do routes

Route é nada mais nada menos que a nssa rota, os caminhos que irão acessar nossos componentes, cada componente tem um caminho especifico, se vc tiver 5 componentes deverá criar 5 rotas.

Links é a unica parte que o usuario consegue interagir em nossas rotas, o link tem como 
responsabilidade levar o usuario para o componente especifico no momento que ele clica
*/