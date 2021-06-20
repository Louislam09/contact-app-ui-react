import React from 'react';

export interface FooterProps {
    activeTab: number;
    setActiveTab: Function;
}
 
const Footer: React.FC<FooterProps> = ({activeTab,setActiveTab}) => {
    
    return ( 
        <div className="footer">
            <div className="footer__items">
                <div className={`footer__item ${activeTab === 0 ? "active" : ""}`} onClick={()=>setActiveTab(0)}>
                    <div className={`item__icon`}>
                        <i className='bx bxs-contact'></i>
                    </div>
                    <div className="item__text">
                        Contacts
                    </div>
                </div>
                <div className={`footer__item ${activeTab === 1 ? "active" : ""}`} onClick={()=>setActiveTab(1)}>
                    <div className={`item__icon`}>
                        <i className='bx bxs-group' ></i>
                    </div>
                    <div className="item__text">
                        Groups
                    </div>
                </div>
                <div className={`footer__item ${activeTab === 2 ? "active" : ""}`} onClick={()=>setActiveTab(2)}>
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


