import React from 'react';
import './Top.css'

const Top = ({showAddForm,showContact}) => {
    return (
        <div className="top__line">
            <nav className="top__line_nav">
                <h1 className="top__logo" id="main">LOGO TYPE</h1>
                <ul className="top__list">
                    <li className="top__item">
                        <span className="top__link">Main</span>
                    </li>
                    <li className="top__item">
                        <span className="top__link">Accounts</span>
                    </li>
                    <li className="top__item">
                        <span className="top__link" onClick={showAddForm}>Account Offer</span>
                    </li>
                    <li className="top__item">
                        <span className="top__link" onClick={showContact}>Contact</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Top;
