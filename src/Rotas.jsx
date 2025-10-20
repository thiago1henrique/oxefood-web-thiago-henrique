import React from 'react';
import { Route, Routes } from "react-router-dom";

import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';
import ListCliente from "./views/cliente/ListCliente";
import ListEntregador from "./views/entregador/ListEntregador";
import Listproduto from "./views/produto/ListProduto";
import ListCategoriaProdutos from "./views/categoriaProdutos/ListCategoriaProdutos";
import FormCategoriaProduto from "./views/categoriaProdutos/FormCategoriaProduto";

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <Listproduto/> } />
                <Route path="list-categoria-produtos" element={ <ListCategoriaProdutos/> } />
                <Route path="form-categoria-produtos" element={ <FormCategoriaProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                <Route path="list-entregador" element={ <ListEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas
