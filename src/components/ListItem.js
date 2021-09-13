import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function ListItem({contacts, onDelete, changeContact}) {

    //dropdown state declare and set function
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }

    return (
        <div id="list">

            {contacts.map((item, i) => (
                <div className="listItem" key={item.id}>
                    <div>
                        <h2 className="pointer" onClick={() => toggle(i)}>{item.fName} {item.lName}</h2>
                        <p>{item.num}</p>
                    </div>
                    <div className={selected === i ? 'open' : 'closed'}>
                        <p>{item.email}</p>
                    </div>
                    <div id="btnHolder">
                            <Link to={{pathname: '/edit', data:{contact: item, changeContact: changeContact}}}>
                            <EditButton />
                            </Link>
                            
                            <DeleteButton onDelete={onDelete} id={item.id} fName={item.fName}/>
                        </div>

                </div>
            ))}
              
        </div>
    )
}

export default ListItem
