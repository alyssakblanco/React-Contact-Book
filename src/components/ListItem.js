import React, { useState} from 'react';
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

function ListItem({contacts, onDelete}) {


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
                        <h2 className="pointer" onClick={() => toggle(i)}>{item.firstName} {item.lastName}</h2>
                        <p>{item.phone}</p>
                        <EditButton />
                        <DeleteButton onDelete={onDelete} id={item.id}/>
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
