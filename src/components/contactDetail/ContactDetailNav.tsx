import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDeleteContact } from '../../hooks/useDeleteContact';
import { useToggleFavContact } from '../../hooks/useToggleFavContact';


export interface ContactDetailNavProps {
    firstName: string;
    lastName: string;
    isFav: boolean;
    id: string;
}
 
const ContactDetailNav: React.FC<ContactDetailNavProps> = (props) => {
    const {firstName,lastName,isFav,id} = props;
    const history = useHistory();
    const [toggleFavContact] = useToggleFavContact()

    const onCompleted = () => {
        Swal.fire(
            'Deleted!',
            'Your Contact has been deleted.',
            'success'
        )
        history.push("/");
    }

    const [deleteContact] = useDeleteContact(id,onCompleted)

    const [star, setStar] = useState(isFav);

    const toggleStar = () => {
        toggleFavContact({variables: { id: id, fav: !star}});
        setStar(!star);
    }

    const _deleteContact = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteContact();
            }
          })
    }
   
    useEffect(() => {
        setStar(isFav)
    }, [isFav]);

    return ( 
        <div className="contact__detail__nav">
            <div className="nav__background"></div>
            <div className="nav__actions">
                <div className="nav__star nav__icon" onClick={toggleStar}>
                    {star ? <i className='bx bxs-star'></i> : <i className='bx bx-star'></i>}
                </div>

                <div className="nav__actions__right">
                    <div className="nav__edit nav__icon">
                        <i className='bx bxs-edit'></i>
                    </div>
                    <div className="nav__delete nav__icon" onClick={_deleteContact}>
                        <i className='bx bx-trash'></i>
                    </div>
                </div>
            </div> 
       
            <div className="nav__profile">
                <div className="nav__pic">
                    <div className="pic__text">{firstName&&firstName[0].toUpperCase()}</div>
                </div>

                <div className="profile__name">{`${firstName} ${lastName}`}</div>
                <div className="profile__nickname">(Lulu)</div>
            </div>
        </div>
    );
}
 
export default ContactDetailNav;