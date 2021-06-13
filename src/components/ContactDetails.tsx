import React from 'react';
import ContactDetailNav from './contactDetail/ContactDetailNav'

export interface COntactDetailsProps {
    
}
 
const ContactDetails: React.FC<COntactDetailsProps> = () => {
    return ( 
        <div className="contact__details">
            <ContactDetailNav />

            <div className="other__details">
                <div className="info__item">
                    <div className="info__icon">
                        <i className='bx bx-mobile' ></i>
                    </div>
                    <div className="info__item__content">
                        <div className="info__label">Mobile</div>
                        <div className="info__content">+1 829 (286) 7606 </div>
                    </div>
                </div>
                
                <div className="info__item">
                    <div className="info__icon">
                        <i className='bx bx-mail-send'></i>
                    </div>

                    <div className="info__item__content">
                        <div className="info__label">Email</div>
                        <div className="info__content">Louislam09@hotmail.com</div>

                    </div>
                </div>

                <div className="info__item">
                    <div className="info__icon">
                        <i className='bx bx-street-view' ></i>
                    </div>
                    <div className="info__item__content">
                        <div className="info__label">Address</div>
                        <div className="info__content">Santo Domingo Norte</div>
                    </div>
                </div>
            </div>
        
            <div className="contact__detail__close">
                <i className='bx bx-x'></i>
            </div>
        </div>
    );
}
 
export default ContactDetails;
