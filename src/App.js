import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {BarraNavegacao} from './components';
import Rodape from './components/Rodape';
import TabelaLivros from './components/Livro/TabelaLivros';
import {Home} from './pages/Home';
import {Contato} from './pages/Contato';
import Livro from './components/Livro/Livro';
import CadastroUsuario from "./pages/CadastroUsuario/CadastroUsuario";
import {Login} from "./pages/Login";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <BarraNavegacao/>
                <div className="container mx-auto mb-20 px-4 sm:px-6 py-6">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/contato" element={<Contato/>}/>
                        <Route path="/usuario/cadastro" element={<CadastroUsuario/>}/>
                        <Route path="/usuario/editar:cpf" element={<CadastroUsuario/>}/>
                        <Route path="/livros" element={<TabelaLivros/>}/>
                        <Route path="/livro/cadastro" element={<Livro/>}/>
                        <Route path="/livro/editar/:isbn" element={<Livro/>}/>
                    </Routes>
                </div>
                <Rodape/>
            </BrowserRouter>
        </>
    );
}
