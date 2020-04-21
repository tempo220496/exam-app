import React, { Component } from 'react';
import './Contact.css';
import {connect} from 'react-redux';
import { createContact } from '../../../store/actions/contactAction';
import InputForm from '../InputForm/InputForm';

class Contact extends Component {
    state={
        contact:{
            firstName:'',
            lastName:'',
            email:'',
            message:'',
            phoneNumber:''
        },
        add_contact_form:[
            {name:'firstName',placeholder:'First Name'},
            {name:'lastName',placeholder:'Last Name'},
            {name:'email',placeholder:'E-mail'},
            {name:'phoneNumber',placeholder:'Phone number'}
        ]
    };
    valueChanged=event=>{
        let contact=event.target.name;
        this.setState({
            [contact]:event.target.value
        });
    };
    sendContact=event=>{
        event.preventDefault();
        const contact={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            message:this.state.message
        };
        this.props.onContactSended(contact);
        event.target.reset();
    };
    render() {
        return (
            <div className="contact__background" style={{display:this.props.isShowedContact ? "block":'none'}}>
                <section className="contact">
                <span className="close__contact" onClick={this.props.closeContact}><span>&times;</span></span>
                <h1 className="contact__title" id="contact">
                    Contact us today<br/>
                    <small className="contact__title_small">
                        <strong>or</strong>  login to facebook messenger to live chat with us
                    </small>
                </h1>
                <article className="contact__row">
                    <form className="contact__form" onSubmit={this.sendContact}>
                        <InputForm inputValues={this.state.add_contact_form} valueChanged={this.valueChanged} />
                        <p><i>Message Content</i></p><textarea onChange={this.valueChanged} className="contact__input contact__input_text" name="message" placeholder="Enter your message"/>
                        <div className="contact__buttons">
                            <span className="contact__send contact_cancel" onClick={this.props.closeContact}>Cancel</span>
                            <button type="submit" className="contact__send">Send</button>
                        </div>
                    </form>
                </article>
                </section>
            </div>
        );
    }
};


const mapStateToProps=state=>{
    return{
        contacts:state.contact
    }
};

const mapDispatchToProps=dispatch=>{
    return{
        onContactSended:contact=>dispatch(createContact(contact))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);

