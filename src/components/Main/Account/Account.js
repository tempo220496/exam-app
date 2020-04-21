import React from 'react';
import './Account.css'
import { Component } from 'react';

class Account extends Component{
    render(){
        return (
          <article className="account">
              <img src={this.props.img} alt="account name" className="account__img"/>
              <section className="acc__info">
                  <div>
                      <span className='acc-desc'>Platform: {this.props.platform}</span>
                      <span className='acc-desc'>Research: {this.props.researchMight}</span>
                      <span className='acc-desc'>Migrations: {this.props.migrations} </span>
                  </div>
                  <div className="second">
                      <span className='acc-desc'>Castle Level: {this.props.castleLevel} </span>
                      <span className='acc-desc'>Troops: {this.props.troopsMight} </span>
                      <span className='acc-desc'>Kingdom: {this.props.kingdom} </span>
                  </div>
              </section>
              <div className="acc__choice">
                  <span className="acc-price">Price: ${this.props.price} (USD)</span>
                  <span className="account__about" onClick={this.props.readMore}>Read More
                  </span>
              </div>
          </article>
        );
    }
}

export default Account;
//<div className="close__account"><span>&times;</span></div>