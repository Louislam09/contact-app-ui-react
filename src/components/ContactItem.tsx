import React, { useState } from 'react';
// import { IData } from '../App';
import { IContact } from '../interface';


export interface ContactItemProps {
    contact: IContact;
    toggleFav:Function;
}
 
const ContactItem: React.FC<ContactItemProps> = ({contact,toggleFav}) => {
    const [isFav, setIsFav] = useState(contact.isFav);

    const toggleFavorite = () => {
        setIsFav(!isFav);
        toggleFav(contact.id)
    }

    return ( 
        <div className="contact__item" >
            <div className="contact__star" onClick={toggleFavorite}>
            {isFav ? 
                <i className='bx bxs-star' ></i>
                :    
                <i className='bx bx-star' ></i>
            }
            </div>

            <div className="contact__content">
                <div className="content__pic">
                    <div className="pic__text">{contact.firstName[0].toUpperCase()}</div>
                </div>

                <div className="content__info">
                    <div className="info__name">
                        {contact.firstName} {contact.lastName}
                    </div>
                    <small className="info__description">
                        Description here
                    </small>
                </div>
            </div>

            <div className="show__datail__icon item__icon" onClick={() => console.log("click a contact")}>
                <i className='bx bx-show' ></i>
            </div>
        </div>
    );
}
 
export default ContactItem;