import React from 'react';
import { TituloPagina } from './styles';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Titulo( match ) {
  return (
      <TituloPagina>
        <h2>{match.nome}</h2>
        {(match.link) && (
          <Link to={match.link}><Button type="primary">{match.textoBotao}</Button></Link>
        )}
      </TituloPagina>
    );
}
