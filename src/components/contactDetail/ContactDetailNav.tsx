import React, { useState } from 'react';


export interface ContactDetailNavProps {
    
}
 
const ContactDetailNav: React.FC<ContactDetailNavProps> = () => {
    const [star, setStar] = useState(false);

    const toggleStar = () => {
        setStar(!star);
    }

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
                    <div className="nav__delete nav__icon">
                        <i className='bx bx-trash'></i>
                    </div>
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