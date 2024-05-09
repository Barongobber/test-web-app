import React, { FC } from 'react';
import ContactList from '../../components/ContactList/ContactList';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
   return (
      <div>
         <ContactList />
      </div>
   );
};

export default HomePage;
