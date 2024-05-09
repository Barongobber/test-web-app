import { FC, useEffect, useState } from 'react';
import { ContactCards } from './ContactCard.styled';
import axios from 'axios';
import { useNavigate } from 'react-router';

interface ContactCardProps {
   value: Contact,
   index: number,
}

type Contact = {
   name: string,
   url: string
};

const ContactCard: FC<ContactCardProps> = ({value, index} : ContactCardProps) => {
   const [pokemonImg, setPokemonImg] = useState("");
   const [pokemonAbilities, setPokemonAblities] = useState([]);
   const { name } = value;
   const navigate = useNavigate();

   
   useEffect(() => {
      const getPokemonImg = async () => {
         try {
           const response = await axios.get(
             `https://pokeapi.co/api/v2/pokemon-form/${index+1}`
           );
     
           setPokemonImg(response.data.sprites.front_default);
         } catch (e) {
           console.log(e);
         }
      };

      getPokemonImg();
   }, [pokemonImg]);

 return (
   <ContactCards onClick={() => navigate("/detail", { state: { name ,pokemonImg } })}>
      <img src={pokemonImg} alt={name} />
      <h2>{ name }</h2>
   </ContactCards>
 )
};

export default ContactCard;
