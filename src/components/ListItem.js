import React, { useState} from 'react';
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function ListItem({contacts}) {


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
                <div className="listItem">
                    <div>
                        <h2 className="pointer" onClick={() => toggle(i)}>{item.firstName} {item.lastName}</h2>
                        <p>{item.phone}</p>
                        <EditButton />
                        <DeleteButton />
                    </div>
                    <div className={selected === i ? 'open' : 'closed'}>
                        <p>{item.email}</p>
                    </div>
                </div>
            ))}
            
            
            
        </div>
    )
}


export default ListItem
