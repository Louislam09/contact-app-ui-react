import React, { useState } from 'react';

export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    const [activeTab, setActiveTab] = useState(1);

    const _activeTab = (tabNumber: number) => {
        setActiveTab(tabNumber);
    }

    return ( 
        <div className="footer">
            <div className="footer__items">
                <div className={`footer__item ${activeTab === 0 ? "active" : ""}`} onClick={()=>_activeTab(0)}>
                    <div className={`item__icon`}>
                        <i className='bx bxs-contact'></i>
                    </div>
                    <div className="item__text">
                        Contacts
                    </div>
                </div>
                <div className={`footer__item ${activeTab === 1 ? "active" : ""}`} onClick={()=>_activeTab(1)}>
                    <div className={`item__icon`}>
                        <i className='bx bxs-group' ></i>
                    </div>
                    <div className="item__text">
                        Groups
                    </div>
                </div>
                <div className={`footer__item ${activeTab === 2 ? "active" : ""}`} onClick={()=>_activeTab(2)}>
                    <div className={`item__icon`}>
                        <i className='bx bxs-star' ></i>
                    </div>
                    <div className="item__text">
                        Favorites
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;


