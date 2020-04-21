import * as actionTypes from './actionTypes';
import contacts from '../../containers/axios_accounts-contacts';

export const contactRequest=()=>{
    return{type:actionTypes.CONTACT_REQUEST};
};

export const contactSuccess=()=>{
    return{type:actionTypes.CONTACT_SUCCESS};
};


export const contactFailure=()=>{
    return{type:actionTypes.CONTACT_FAILURE};
};

export const initContact=()=>{
    return{type:actionTypes.INIT_CONTACT};
};

export const createContact=contact=>dispatch=>{
    dispatch(contactRequest());
    contacts.post('/contacts.json',contact)
        .then(()=>{
            dispatch(contactSuccess())
        })
        .catch(error=>{
            dispatch(contactFailure(error))
        })
};