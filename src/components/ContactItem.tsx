import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { IData } from '../App';
import { IContact } from '../interface';


export interface ContactItemProps {
    contact: IContact;
    toggleFav:Function;
}
 
const ContactItem: React.FC<ContactItemProps> = ({contact,toggleFav}) => {
    const {id,firstName,lastName,isFav: _isFav,email} = contact;
    const [isFav, setIsFav] = useState(_isFav);

    const toggleFavorite = () => {
        setIsFav(!isFav);
        toggleFav(id)
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
                    <div className="pic__text">{firstName[0].toUpperCase()}</div>
                </div>

                <div className="content__info">
                    <div className="info__name">
                        {firstName} {lastName}
                    </div>
                    <small className="info__description">
                       {email||"-"}
                    </small>
                </div>
            </div>

            <div className="show__datail__icon item__icon" >
                <Link 
                    to={`/contact/${id}`}
                >
                    <i className='bx bx-show' ></i>
                </Link>
            </div>
        </div>
    );
}
 
export default ContactItem;