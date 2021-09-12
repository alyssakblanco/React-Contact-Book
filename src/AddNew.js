import React, {useState} from 'react';
import HomeButton from './components/HomeButton';

function AddNew(props) {

    //form helper functions
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
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
            <form className="form" onSubmit={(e) => addContact(e)}>
                <input type="text" name='fName' placeholder="First Name" value={formData.fName} onChange={changeData}/>
                <input type="text" name='lName' placeholder="Last Name" value={formData.lName} onChange={changeData}/>
                <input type="text" name='num' placeholder="Phone Number" value={formData.num}onChange={changeData}/>
                <input type="text" name='email' placeholder="Email" value={formData.email} onChange={changeData}/>
                <button type="submit">Add Contact</button>
            </form>
            <HomeButton />
        </div>
    )  
}

export default AddNew
