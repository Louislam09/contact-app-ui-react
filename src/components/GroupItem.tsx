import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  IGroup } from '../interface';


export interface GroupItemProps {
    group: IGroup;
}
 
const GroupItem: React.FC<GroupItemProps> = ({group}) => {
    const {id,name,members} = group;
    const [isFav, setIsFav] = useState(false);

    const toggleFavorite = () => {
        setIsFav(!isFav);
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
                <div className="content__pic" style={{background: '#b6c0ff'}}>
                    <div className="pic__text">{name[0].toUpperCase()}</div>
                </div>

                <div className="content__info">
                    <div className="info__name">
                        {name} 
                    </div>
                    <small className="info__description">
                       {`Number of members: ${members.length}`}
                    </small>
                </div>
            </div>

            <div className="show__datail__icon item__icon" >
                <Link 
                    to={`/group/${id}`}
                >
                    <i className='bx bx-show' ></i>
                </Link>
            </div>
        </div>
    );
}
 
export default GroupItem;