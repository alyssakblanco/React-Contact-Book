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
            firstName:"Alyssa",
            lastName:"Blanco",
            phone:"(813)480-2369",
            email:"alyssakblanco@outlook.com"
        },
        {
            id: 2,
            firstName:"Peter",
            lastName:"Parker",
            phone:"(555)123-9876",
            email:"notspiderman@outlook.com"
        },
        {
            id: 3,
            firstName:"Elon",
            lastName:"Musk",
            phone:"(555)321-6789",
            email:"rocketman@outlook.com"
        }
    ] 
  )

  //Add Contact
  const addContact = (newContact) => {  
    const contact = {
      id: Math.random(),
      firstName: newContact.fname,
      lastName: newContact.lname,
      phone: newContact.num,
      email: newContact.email
    }
    setContacts((oldArr) => [...oldArr, contact])
  }


  return (
    <div>
      <Route  exact path="/" render={(props) => <Home setContacts={setContacts} contacts={contacts} {...props} />}/>
      <Route exact path="/add" render={(props) => <AddNew {...props} addContact={addContact} />}/>
      <Route exact path="/edit" render={(props) => <Edit {...props} />} />
    </div>
  );
}

export default App;
