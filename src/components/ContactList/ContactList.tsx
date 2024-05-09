import { FC, useEffect, useState } from "react";
import { ContactLists } from "./ContactList.styled";
import ContactCard from "../ContactCard/ContactCard";
import axios from "axios";

interface ContactListProps {}

const ContactList: FC<ContactListProps> = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apirequest();
    setLoading(false);
  });

  const apirequest = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon`
      );
      setPokemons(response.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  return ( loading ? null :
    <>
      <ContactLists>
            {pokemons.map((value, index) => {              
              return (
                <ContactCard value={value} index={index}/>
              )
            })}
      </ContactLists>      
    </>
  );
}

export default ContactList;
