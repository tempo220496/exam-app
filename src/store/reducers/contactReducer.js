import * as actionTypes from '../actions/actionTypes';

const INITIAL_CONTACT={
    name:'',
    lastName:'',
    email:'',
    message:'',
    phoneNumber:''
};

const initialState={
    contact:{...INITIAL_CONTACT}
};

const contactReducer=(state=initialState,action)=>{
    if(action.type===actionTypes.INIT_CONTACT){
        return{
            ...state,
            contact:{...INITIAL_CONTACT}
        };
    }else{
        return state;
    }
}

export default contactReducer;