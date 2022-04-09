import React from 'react';
import './menu-item.component.scss'
import {useLocation, useNavigate} from "react-router-dom";


const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    const navigate = useNavigate();
    const location = useLocation()
    return (
        <div className={`${size} menu-item`} onClick={() => navigate(`${location.pathname}${linkUrl}`)}>
            <div className='background-image' style={
                {backgroundImage: `url(${imageUrl})`}
            }/>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;