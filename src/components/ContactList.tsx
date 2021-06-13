import React from 'react';
import ContactItem from './ContactItem'
import { useGetContacts } from '../hooks/useGetContacts';

export interface ContactListProps {}
 
const ContactList: React.FC<ContactListProps> = () => {
    // const {data, loading }: {data: IData ,loading: boolean} = useGetContacts()

    // useEffect(() => {
    //   console.log({data})
        
    // }, [loading])
    
    return ( 
        <div className="page__content contact__container">
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
            <ContactItem />
        </div>
    );
}
 
export default ContactList;