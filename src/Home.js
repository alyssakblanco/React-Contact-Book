import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ListItem from "./components/ListItem";
import AddButton from "./components/AddButton";
import HomeButton from "./components/HomeButton";

function Home({contacts, setContacts, addContact, changeContact}){

  const [isActive, setActive] = useState("");
  const [currentId, setId] = useState("");
  const [currentName, setName] = useState("");

  //Delete Task
  function deleteContact(id) {
    console.log('delete', id)
    setContacts(contacts.filter((contacts) => contacts.id !== id))
    
  }

  //Modal function
  function toggleModal(id, fName) {
    setActive(!isActive);
    setId(id);
    setName(fName)
    console.log(fName)
  }

  //MAIN APP VIEW
  return (
    <div>
      
      <h1>Contact Book</h1>

      {contacts.length > 0 ? (<ListItem contacts={contacts} onDelete={toggleModal} changeContact={changeContact}/>) 
      : ('Your Contact Book is Empty')}
      
      <Link to={{pathname: "/VISA_ContactList/add", data: {addContact: addContact}}}>
      <AddButton/>
      </Link>

      <div className={isActive ? "show" : "hide"}>
        <div id="modal">
          <div id="close" onClick={() => toggleModal()}><HomeButton /></div>
          <p>Are you sure you want to remove {currentName} from your contacts?</p>
          <button id="yes" onClick={() => {deleteContact(currentId); toggleModal()}}>Yes, delete</button>
          <button id="no" onClick={() => toggleModal()}>No, keep contact</button>
        </div> 
      </div>

    </div>
  );
}

export default Home