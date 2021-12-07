import React, {useState} from 'react';
import HomeButton from "./components/HomeButton"

function Edit(props) {

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

    //submit function
    const changeContact = (e) => {
        e.preventDefault();
        props.changeContact(formData)
        props.history.push("/React-Contact-Book/")
    }
    
    return (
        <div className="relative">
            <h1>Edit Contact</h1>

            <form className="form" onSubmit={(e) => changeContact(e)}>
                <input type="text" name='fName' placeholder="First Name" value={formData.fName} onChange={changeData}/>
                <input type="text" name='lName' placeholder="Last Name" value={formData.lName} onChange={changeData} />
                <input type="text" name='num' placeholder="Phone Number" value={formData.num} onChange={changeData}/>
                <input type="text" name='email' placeholder="Email" value={formData.email} onChange={changeData}/>
                <button className="submit" type="submit">Save</button>
            </form>

            <div className="topRight"><HomeButton /></div>
        </div>
    )
    
}

export default Edit