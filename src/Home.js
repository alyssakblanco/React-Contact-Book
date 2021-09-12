import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";

function Home({contacts, setContacts, addTask}){

  const [isActive, setActive] = useState("");
  const [currentId, setId] = useState(0);

  //Delete Task
  function deleteContact(id) {
    console.log('delete', id)
    setContacts(contacts.filter((contacts) => contacts.id !== id))
  }

  //Modal function
  function toggleModal(id) {
    setActive(!isActive);
    setId(id);
  }

  //MAIN APP VIEW
  return (
    <div>
      
      <h1>VISA Contact List</h1>

      {contacts.length > 0 ? (<ListItem contacts={contacts} onDelete={toggleModal}/>) 
      : ('Your Contact Book is Empty')}
      
      <Link to={{pathname: "/add", data: {addTask: addTask}}}>
      <AddButton/>
      </Link>

      <div className={isActive ? "show" : "hide"}>
        <h3>Are you sure you want to delete this contact?</h3>
        <button onClick={() => toggleModal()}>No</button>
        <button onClick={() => {deleteContact(currentId); toggleModal()}}>Yes</button>
      </div>

    </div>
  );
}

export default Home