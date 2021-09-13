import {useState} from "react";
import {Route} from 'react-router-dom';
import AddNew from "./AddNew";
import Home from "./Home";
import Edit from "./Edit";

function App() {

  const [contacts, setContacts] = useState(
    [
        {
            id: 1,
            fName:"Alyssa",
            lName:"Blanco",
            num:"(813)480-2369",
            email:"alyssakblanco@outlook.com"
        },
        {
            id: 2,
            fName:"Peter",
            lName:"Parker",
            num:"(555)123-9876",
            email:"notspiderman@outlook.com"
        },
        {
            id: 3,
            fName:"Elon",
            lName:"Musk",
            num:"(555)321-6789",
            email:"rocketman@outlook.com"
        }
    ] 
  )

  //Add Contact
  const addContact = (newContact) => {  
    const contact = {
      id: Math.random(),
      fName: newContact.fName,
      lName: newContact.lName,
      num: newContact.num,
      email: newContact.email
    }
    setContacts((oldArr) => [...oldArr, contact])
  }

  //Change Contact
  const changeContact = (update) => {  
    const contact = contacts.map((item) => {
      if(item.id === update.id){
        const updatedContact = {
          id: update.id,
          fName: update.fName,
          lName: update.lName,
          num: update.num,
          email: update.email
        };
        return updatedContact;
      }
      return item;
    });
    setContacts(contact)
  }


  return (
    <div>
      <Route exact path="/VISA_ContactList/" render={(props) => <Home {...props} contacts={contacts} setContacts={setContacts} />}/>
      <Route exact path="/VISA_ContactList/add" render={(props) => <AddNew {...props} addContact={addContact} />}/>
      <Route exact path="/VISA_ContactList/edit" render={(props) => <Edit {...props} changeContact={changeContact} />}/>
    </div>
  );
}

export default App;
