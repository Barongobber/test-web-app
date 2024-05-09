import { FC } from "react";
import { ContactLists } from "./ContactList.styled";
import AddContact from "../AddContact/AddContact";
import ContactCard from "../ContactCard/ContactCard";
// import axios from "axios";

interface ContactListProps {}

const roughData = [
  {
     name: "Ron",
     phoneNumber: "05462131"
  },
  {
     name: "Test",
     phoneNumber: "05462131"
  },
  {
     name: "Gobi",
     phoneNumber: "05462131"
  },
  {
     name: "Ramadhan",
     phoneNumber: "05462131"
  },
  {
     name: "Natanegara",
     phoneNumber: "05462131"
  },
];


// const apiRequest = async () => {
//   try { 
//     const resp = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/0`
//     );
//   } catch (e) {
//     console.log(e)
//   }
// }

const ContactList: FC<ContactListProps> = () => {
  // const [test, setTest] = useState(0);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.getElementById("ContactCardsTitle")!.innerHTML = `You clicked ${test} times`;
  // });

  // const addTest = () => {
  //   setTest((prev) => prev+1);
  //   console.log(test);
  // };

  return (
    <>
      <ContactLists>
            {roughData.map((value, index) => {              
              return (
                <ContactCard {...value}/>
              )
            })}
      </ContactLists>
      <AddContact/>
    </>
  );
}

export default ContactList;
