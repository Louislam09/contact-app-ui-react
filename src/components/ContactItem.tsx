import React, { useState } from 'react';


export interface ContactItemProps {
    
}
 
const ContactItem: React.FC<ContactItemProps> = () => {
    const [isFav, setIsFav] = useState(false);

    const toggleFavorite = () => {
        setIsFav(!isFav);
    }

    return ( 
        <div className="contact__item" onClick={() => console.log("click a contact")}>
            <div className="contact__star" onClick={toggleFavorite}>
            {isFav ? 
                <i className='bx bxs-star' ></i>
                :    
                <i className='bx bx-star' ></i>
            }
            </div>

            <div className="contact__content">
                <div className="content__pic">
                    <div className="pic__text">C</div>
                </div>

                <div className="content__info">
                    <div className="info__name">
                        Claire Groux
                    </div>
                    <small className="info__description">
                        Amada de Luis
                    </small>
                </div>
            </div>
        </div>
    );
}
 
export default ContactItem;