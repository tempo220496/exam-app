import React from 'react';
import './Header.css'
import Top from './Top/Top';

const Header = ({showAddForm,showContact}) => {
    return (
        <header className="news__header">
            <Top 
            showAddForm={showAddForm}
            showContact={showContact}/>
            <h1 className="header__title">Header Title</h1>
            <h2 className="header__intro">Marketplace for strategy games</h2>
        </header>
    );
}

export default Header;