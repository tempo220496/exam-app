import React, { Component } from 'react';

class InputForm extends Component{
    render(){
        return (
            <div>
                {
                    this.props.inputValues.map(account=>{
                        return <div key={account.name}>
                                    <p><i>{account.placeholder}</i></p>
                                    <input onChange={this.props.valueChanged} 
                                    type="text" className="contact__input" 
                                    name={account.name} 
                                    placeholder={account.platform} 
                                    autoComplete='off' 
                                    required/>
                                </div>
                    })
                }
            </div>
        );
    }
}

export default InputForm;
