import React, { FC } from 'react';
import { ContactCards } from './ContactCard.styled';

interface ContactCardProps {
   name: string,
   phoneNumber: string
}

const ContactCard: FC<ContactCardProps> = (props) => {
 const { name, phoneNumber } = props;

 return (
   <ContactCards>
      <h2>{ name }</h2>
      <p>{ phoneNumber }</p>
   </ContactCards>
 )
};

export default ContactCard;
