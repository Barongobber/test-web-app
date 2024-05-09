/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const LinkButton = styled.button`
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

export const NavBar = styled.button`
    overflow: hidden;
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    /* Style for the Pokémon logo */
    .pokemon-logo {
        width: 100px;
        height: auto;
    }
    
    /* Style for the header title */
    .header-title {
        font-size: 18px;
        color: #333;
        margin-top: 10px;
    }
`;