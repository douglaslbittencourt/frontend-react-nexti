import styled from 'styled-components';

export const Menu = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;

  li:first-child a:hover {
    background-color: transparent;
  }

  li {
  float: left;

    a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;

      &:hover{
        background-color: #111;
      }


      img {
        max-width: 25px;
        height: auto;
        border-radius: 10px;
      }
    }
  }


`;
