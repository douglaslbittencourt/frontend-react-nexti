import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Cliente from './pages/Cliente';
import Produto from './pages/Produto';
import Pedido from './pages/Pedido';
import FormCliente from './pages/Cliente/Form';
import FormProduto from './pages/Produto/Form';
import FormPedido from './pages/Pedido/Form';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/cliente" exact component={Cliente}/>
        <Route path="/produto" exact component={Produto}/>
        <Route path="/pedido" exact component={Pedido}/>
        <Route path="/cliente/form/:clienteId" component={FormCliente}/>
        <Route path="/produto/form/:produtoId" component={FormProduto}/>
        <Route path="/pedido/form/:pedidoId" component={FormPedido}/>
        <Route path="/cliente/form" exact component={FormCliente}/>
        <Route path="/produto/form" exact component={FormProduto}/>
        <Route path="/pedido/form" exact component={FormPedido}/>
      </Switch>
    </BrowserRouter>
  )
}
