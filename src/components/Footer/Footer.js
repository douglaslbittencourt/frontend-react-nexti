import React from 'react';
import Logo from '../../assets/logo-nexti.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FooterPrincipal } from './styles'
import { Link } from 'react-router-dom';

export default function Footer() {
  return(
  <FooterPrincipal >
    <div class="footer-left" >
      <h3><img src={Logo} alt="logo"/></h3>
      <p class="footer-links">
        <Link to="/" class="link-1">Home</Link>
        <Link to="/cliente">Cliente</Link>
        <Link to="/produto">Produto</Link>
        <Link to="/Pedido">Pedido</Link>
      </p>
      <p class="footer-company-name">Douglas Linhares Bittencourt</p>
    </div>
    <div class="footer-center">
      <div>
        <i><FontAwesomeIcon icon={faMapMarkedAlt} /></i>
        <p>Santa Catarina</p>
      </div>

      <div>
        <i><FontAwesomeIcon icon={faPhone} /></i>
        <p>+55 (47) 99197-1512</p>
      </div>

      <div>
        <i><FontAwesomeIcon icon={faEnvelope} /></i>
        <p><a href="mailto:douglaslbittencourt@gmail.com">douglaslbittencourt@gmail.com</a></p>
      </div>
    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>Sobre o Douglas</span>
        Formado em Engenharia de software em 2018, programador backend com experiencia de 1 ano e 6 meses em PhP e 1 ano e 6 meses em JavaSpring (https://www.linkedin.com/in/douglas-bittencourt-130277180/)
      </p>

    </div>
  </FooterPrincipal>
  )
}
