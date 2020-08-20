import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './styles';
import Logo from '../../assets/nexti.png'

export default function Header() {
  return (
      <Menu>
        <li><Link to="/"><img src={Logo} alt="logo"/></Link></li>
        <li><Link to="/cliente">Cliente</Link></li>
        <li><Link to="/produto">Produto</Link></li>
        <li><Link to="/pedido">Pedido</Link></li>
      </Menu>
    );
}
