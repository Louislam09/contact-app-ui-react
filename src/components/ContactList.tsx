import React, { useEffect, useState } from 'react';
import ContactItem from './ContactItem'
import { IContact, IGroup } from '../interface';
import GroupItem from './GroupItem';
// import { IData } from '../App';

export interface ContactListProps {
    data: IContact[] | IGroup[] | any;
    toggleFav: Function;
    isGroup?: boolean;
}
 
const ContactList: React.FC<ContactListProps> = ({data,toggleFav,isGroup}) => {
    const [_data, setData] = useState(data)

    useEffect(() => {
        setData(data)
    }, [data])
    
    return ( 
        <div className="page__content contact__container">
            {data.length ===0 && (
                <div style={{fontSize: "3rem",width: "100%",height: "80vh",display: "flex",alignItems: "center",justifyContent:"center"}}>Empty List</div>
            )}


            {isGroup &&_data.map((group: IGroup)=> (
                <GroupItem key={group.id} group={group}  />
            ))}

            {!isGroup &&_data.map((contact: IContact) => (
                <ContactItem key={contact.id} contact={contact} toggleFav={toggleFav} />
            ))}
        </div>
    );
}
 
export default ContactList;