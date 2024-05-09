import { FC } from 'react';
import {NavBar, LinkButton} from './Header.styled';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <NavBar>
      <LinkButton>Contact List</LinkButton>
      <LinkButton>Edit Contact</LinkButton>
  </NavBar>
  );
}

export default Header;
