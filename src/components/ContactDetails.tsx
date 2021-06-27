import React from 'react';
import { Link } from 'react-router-dom';
import { IContact } from '../interface';
import ContactDetailNav from './contactDetail/ContactDetailNav'

export interface ContactDetailsProps {
    contact: IContact | any;
}
 
const ContactDetails: React.FC<ContactDetailsProps> = ({ contact }) => {

    return ( 
        <div className="contact__details">
            <ContactDetailNav {...contact} />

            <div className="other__details">
                <div className="info__item">
                    <div className="info__icon">
                        <i className='bx bx-mobile' ></i>
                    </div>
                    <div className="info__item__content">
                        <div className="info__label">Mobile</div>
                        <div className="info__content">{contact?.phone}</div>
                    </div>
                </div>
                
                <div className="info__item">
                    <div className="info__icon">
                        <i className='bx bx-mail-send'></i>
                    </div>

                    <div className="info__item__content">
                        <div className="info__label">Email</div>
                        <div className="info__content">{contact?.email}</div>

                    </div>
                </div>

                <div className="info__item">
                    <div className="info__icon">
                        <i className='bx bx-street-view' ></i>
                    </div>
                    <div className="info__item__content">
                        <div className="info__label">Address</div>
                        <div className="info__content">{contact?.address}</div>
                    </div>
                </div>
            </div>
        
            <div className="contact__detail__close">
                <Link to="/">
                    <i className='bx bx-x'></i>
                </Link>
            </div>
        </div>
    );
}
 
export default ContactDetails;
