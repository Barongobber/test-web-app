import React, { FC } from 'react';
import { DetailWrapper } from './Detail.styled';
import { useLocation } from 'react-router';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

interface DetailProps {}

const Detail: FC<DetailProps> = () => {
   const location = useLocation();
   const {state: {name: pokemonName, pokemonImg}} = location;

   return (
      <DetailWrapper>
         <PokemonCard pokemonName={pokemonName} pokemonImage={pokemonImg} />
      </DetailWrapper>
   );
};

export default Detail;
