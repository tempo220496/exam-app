import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
      return (
        <footer className="footer">
          <ul className="footer__list">
            <li className="footer__item">
                <span className="footer__nav_link">Main</span>
            </li>
            <li className="footer__item">
                <span className="footer__nav_link">Accounts</span>
            </li>
            <li className="footer__item">
                <span className="footer__nav_link" onClick={this.props.showAddForm}>Account Offer</span>
            </li>
            <li className="footer__item">
                <span className="footer__nav_link" onClick={this.props.showContact}>Contact</span>
            </li>
          </ul>
          <img src="https://upload.wikimedia.org/wikipedia/en/1/10/Lords_Mobile_logo.png" alt="Footer logo" className="footer__logo"/>
        </footer>
    );
    }
};

export default Footer;
