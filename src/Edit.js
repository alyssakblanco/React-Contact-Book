import React, { useState} from 'react';
import HomeButton from "./components/HomeButton"

function Edit(props) {
    
  //console.log('edit '+ props.location.data.contact.fName)

  //form helper functions
    const [formData, setFormData] = useState({
        id: props.location.data.contact.id,
        fName: props.location.data.contact.fName,
        lName: props.location.data.contact.lName,
        num: props.location.data.contact.num,
        email: props.location.data.contact.email
    })
    const changeData = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    //submit function //not linked from app.js
    const changeContact = (e) => {
        e.preventDefault();
        props.changeContact(formData)
        props.history.push("/")
        // console.log(formData)
    }
    
    return (
        <div>
            <h1>Edit Contact</h1>

            <form className="form" onSubmit={(e) => changeContact(e)}>
            {/* <form className="form"> */}
                <input type="text" name='fName' placeholder="First Name" value={formData.fName} onChange={changeData}/>
                <input type="text" name='lName' placeholder="Last Name" value={formData.lName} onChange={changeData} />
                <input type="text" name='num' placeholder="Phone Number" value={formData.num} onChange={changeData}/>
                <input type="text" name='email' placeholder="Email" value={formData.email} onChange={changeData}/>
                <button type="submit">Save</button>
            </form>

            <HomeButton />
        </div>
    )
    
}

export default Edit