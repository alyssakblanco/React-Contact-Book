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
        props.history.push("/React-Contact-Book/")
    }


    //name validation
    const nameValidation = (fieldName, fieldValue) => {
        if (fieldValue.trim() === '') {
          return `${fieldName} is required`;
        }
        if (/[^a-zA-Z -]/.test(fieldValue)) {
          return 'Invalid characters';
        }
        if (fieldValue.trim().length < 3) {
          return `${fieldName} needs to be at least three characters`;
        }
        return null;
      };

      //validation function call
    const validate = {
        firstName: name => nameValidation('First Name', name)
      };

    return (
        <div className="relative">
            <h1>New Contact</h1>
            <form className="form" validate={validate} onSubmit={(e) => addContact(e)}>
                <input type="text" name='fName' placeholder="First Name" value={formData.fName} onChange={changeData}/>
                <input type="text" name='lName' placeholder="Last Name" value={formData.lName} onChange={changeData}/>
                <input type="text" name='num' placeholder="Phone Number" value={formData.num}onChange={changeData}/>
                <input type="text" name='email' placeholder="Email" value={formData.email} onChange={changeData}/>
                <button className="submit" type="submit">Save</button>
            </form>
            <div className="topRight"><HomeButton /></div>
        </div>
    )  
}

export default AddNew
