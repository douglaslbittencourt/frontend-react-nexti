import styled from 'styled-components';

export const TituloPagina = styled.div `
  text-align: center;
  padding-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 20px;
      padding-bottom: 20px;
      position: relative;
      color: #333;
    }

    h2::before {
      content: '';
      position: absolute;
      display: block;
      width: 120px;
      height: 1px;
      background: #ddd;
      bottom: 1px;
      left: calc(50% - 60px);
    }

    h2::after {
      content: '';
      position: absolute;
      display: block;
      width: 40px;
      height: 3px;
      background: #e84e0f;
      bottom: 0;
      left: calc(50% - 20px);
    }

    Button {
      margin-bottom: 0;
      background: #333;
      border-color : #444;
      :hover {
        background: #444;
        border-color : #555;
      }
    }


`;
