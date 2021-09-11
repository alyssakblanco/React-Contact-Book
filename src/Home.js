import React, {useState } from 'react';
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";


function Home(){

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

  //Add Task
  // const addTask = (task) => {
  //   console.log(contact)
  // }

  const [isActive, setActive] = useState("");
  const [currentId, setId] = useState(0);
  //console.log('before ' + currentId);

  
  //delete task
  function deleteContact(id) {
    // console.log('during ' + currentId);
    console.log('delete', id)
    //look up filter
    setContacts(contacts.filter((contacts) => contacts.id !== id))
  }

  function toggleModal(id) {
    setActive(!isActive);
    setId(id);
    // console.log('after ' + id);
    // console.log('after ' + currentId);
  }

  return (
    <div>
      
      <h1>VISA Contact List</h1>

      {contacts.length > 0 ? (<ListItem contacts={contacts} onDelete={toggleModal}/>) 
      : ('Your Contact Book is Empty')}
      

      <AddButton/>

      <div className={isActive ? "show" : "hide"}>
        <h3>delete contact?</h3>
        <button onClick={toggleModal}>no</button>
        <button onClick={() => {deleteContact(currentId); toggleModal()}}>yes</button>
      </div>

    </div>
  );
}

export default Home