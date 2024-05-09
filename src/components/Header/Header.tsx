import { FC } from 'react';
import {NavBar, LinkButton} from './Header.styled';
import { useNavigate } from 'react-router';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();
  
  return (
    <NavBar>
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Pokémon Logo" className="pokemon-logo"></img>
      <LinkButton className='header-title' onClick={() => navigate("/")}>Homepage</LinkButton>
    </NavBar>
  );
}

export default Header;
