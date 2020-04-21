import React from 'react';
import InputForm from '../../InputForm/InputForm';

const AddAccountInputs = ({inputValues,valueChanged,onFileSelectedHandler}) => {
    const add_account_form=[
        {name:'fullName',placeholder:'Full name'},
        {name:'email',placeholder:'E-mail'},
        {name:'phoneNumber',placeholder:'Phone number'},
        {name:'country',placeholder:'Country'},
        {name:'platform',placeholder:'Platform'},
        {name:'castleLevel',placeholder:'Castle level'},
        {name:'troopsMight',placeholder:'Troops Might'},
        {name:'researchMight',placeholder:'Research Might'},
        {name:'kingdom',placeholder:'Kingdom'},
        {name:'migrations',placeholder:'Migrations'},
        {name:'hasGift',placeholder:'Has Gift'},
        {name:'price',placeholder:'Price'}
    ]
    return (
        <section className="add_account_inputs">
            <InputForm valueChanged={valueChanged} inputValues={add_account_form} required />
            <input type="file" id="file" multiple
            onChange={onFileSelectedHandler}/>
            <label htmlFor="file" id="file__label">
                <i className="material-icons">
                    add_photo_alternate
                </i>&nbsp;
                Choose photos
            </label>
        </section>
    );
}

export default AddAccountInputs;
