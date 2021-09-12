import React, {useState} from 'react';
import HomeButton from './components/HomeButton';

function AddNew(props) {

    //form helper functions
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        num: "",
        email: ""
    })
    const changeData = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    //submit function
    const addContact = (e) => {
        props.addContact(formData)
        props.history.push("/")
    }

    return (
        <div>
            <h1>Add New</h1>
            <form id="addNew" onSubmit={(e) => addContact(e)}>
                <input type="text" name='fname' placeholder="First Name" value={formData.fname} onChange={changeData}/>
                <input type="text" name='lname' placeholder="Last Name" value={formData.lname} onChange={changeData}/>
                <input type="text" name='num' placeholder="Phone Number" value={formData.num}onChange={changeData}/>
                <input type="text" name='email' placeholder="Email" value={formData.email} onChange={changeData}/>
                <button type="submit">Add Contact</button>
            </form>
            <HomeButton />
        </div>
    )  
}

export default AddNew
