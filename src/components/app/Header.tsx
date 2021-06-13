import React from 'react';

export interface HeaderProps {
    title: string;
}
 
const Header: React.FC<HeaderProps> = ({ title }) => {
    return ( 
        <div className="header">
            <div className="header__title">{title}</div>

            <div className="header__items">
                <div className="header__icon">
                    <i className='bx bx-search'></i>
                </div>
                <div className="header__icon">
                    <i className='bx bx-plus' ></i>
                </div>
            </div>        
        </div>
     );
}
 
export default Header;
