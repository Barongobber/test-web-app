/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const LinkButton = styled.button`
  float: left;
  display: block;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

const NavBar = styled.button`
  overflow: hidden;
  background-color: #333;
`;


function Header(): any {
  return (
    <NavBar
    css={css`
      overflow: hidden;
      background-color: #333;
    `}
    >
      <LinkButton>Contact List</LinkButton>
      <LinkButton>Edit Contact</LinkButton>
  </NavBar>
  );
}

export default Header;
