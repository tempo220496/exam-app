import * as actionTypes from './actionTypes';
import accounts from '../../containers/axios_accounts-contacts';

export const accountRequest=()=>{
    return {type:actionTypes.ACCOUNT_REQUEST};
};

export const accountSuccess=()=>{
    return {type:actionTypes.ACCOUNT_SUCCESS};
};

export const accountFailure=()=>{
    return {type:actionTypes.ACCOUNT_FAILURE};
};

export const initAccount=()=>{
    return {type:actionTypes.INIT_ACCOUNT};
};

export const createAccount=account=>dispatch=>{
    dispatch(accountRequest());
    accounts.post('/accounts.json',account)
        .then(()=>{
            dispatch(accountSuccess())
        })
        .catch(error=>{
            dispatch(accountFailure(error))
        });
}