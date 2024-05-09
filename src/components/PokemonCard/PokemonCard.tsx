import React, { FC } from 'react';
import { PokemonCardWrapper } from './PokemonCard.styled';

interface PokemonCardProps {
   pokemonName: string,
   pokemonImage: string
}

const PokemonCard: FC<PokemonCardProps> = ({pokemonName, pokemonImage} : PokemonCardProps) => {
 return (
   <PokemonCardWrapper>
         <img src={pokemonImage} alt={pokemonName} />
         <h2>{pokemonName}</h2>
   </PokemonCardWrapper>
 )
};

export default PokemonCard;
