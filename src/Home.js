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

  //delete task
  const deleteContact = (id) => {
    console.log('delete', id)
  }

  return (
    <div>
      
      <h1>VISA Contact List</h1>
      
      <ListItem contacts={contacts} onDelete={deleteContact}/>

      <AddButton/>

    </div>
  );
}

export default Home