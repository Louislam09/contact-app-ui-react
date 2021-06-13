import React from 'react';


export interface ContactDetailNavProps {
    
}
 
const ContactDetailNav: React.FC<ContactDetailNavProps> = () => {
    return ( 
        <div className="contact__detail__nav">
            <div className="nav__background"></div>
            <div className="nav__actions">
                <div className="nav__star nav__icon">
                    <i className='bx bx-star' ></i>
                </div>
                <div className="nav__option nav__icon">
                    <i className='bx bx-dots-vertical-rounded' ></i>
                </div>
            </div> 
       
            <div className="nav__profile">
                <div className="nav__pic">
                    <div className="pic__text">L</div>
                </div>

                <div className="profile__name">Luis Martinez</div>
                <div className="profile__nickname">(Lulu)</div>
            </div>
        </div>
    );
}
 
export default ContactDetailNav;