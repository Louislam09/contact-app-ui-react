import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useGetContact } from '../../hooks/useGetContact';
import { IContact } from '../../interface';
import ContactDetails from '../ContactDetails';

interface ContactPageProps {

}

const ContactPage: React.FC<ContactPageProps> = ({}) => {
    let { id } = useParams<any>();
    const {data,loading} = useGetContact(id);
    const [contact, setContact] = useState<IContact>(data?.contact);

    useEffect(()=>{
        setContact(data?.contact);
    },[data,loading]) 

    

    return (
        <>
            {/* <ContactDetails contact={contact} />  */}
            {loading 
            ? 
                <div style={{width: "100%",height: "100vh",display: "grid", placeItems: "center", fontSize: "4rem"}}>loading...</div> 
            :
                <ContactDetails contact={contact} />
            } 
        </>
    );
}

export default ContactPage;