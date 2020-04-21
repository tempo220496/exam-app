import React from 'react';
import './InfoItem.css'

const InfoItem = ({prop,value,num}) => {
    return (
        <li className="about__item">
            <strong>{num}</strong>
            <span>{prop}</span>: {value}
        </li>
    );
}

export default InfoItem;
