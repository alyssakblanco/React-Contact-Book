import React, { useState } from 'react';
import HomeButton from './components/HomeButton';

 

function AddNew() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [num, setNumber] = useState('');
    const [email, setEmail] = useState('');

    
        return (
            <div>
                <h1>Add New</h1>
                <form id="addNew">
                    <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)}/>
                    <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}/>
                    <input type="text" placeholder="Phone Number" value={num} onChange={(e) => setNumber(e.target.value)}/>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <button type="submit">Add</button>
                </form>
                <HomeButton />
            </div>
        )
    
}

export default AddNew
