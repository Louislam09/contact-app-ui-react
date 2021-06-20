import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem'
import { IContact } from '../interface';
// import { IData } from '../App';

export interface ContactListProps {
    data: IContact[];
    toggleFav: Function;
}
 
const ContactList: React.FC<ContactListProps> = ({data,toggleFav}) => {
    const [_data, setData] = useState(data)

    useEffect(() => {
        setData(data)
    }, [data])
    
    return ( 
        <div className="page__content contact__container">
            {data.length ===0 && (
                <div style={{fontSize: "3rem",width: "100%",height: "80vh",display: "flex",alignItems: "center",justifyContent:"center"}}>Empty List</div>
            )}
            {_data.map(contact=> (
                <ContactItem key={contact.id} contact={contact} toggleFav={toggleFav} />
            ))}
        </div>
    );
}
 
export default ContactList;