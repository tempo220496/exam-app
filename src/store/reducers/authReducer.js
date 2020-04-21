import * as actionTypes from '../actions/actionTypes'

const initialState={
    isAuth:false,
    loading: false,
    error:null
};

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth:true
            };
        case actionTypes.AUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error:action.error
            };
        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                loading:false,
                isAuth:false
            }
        default:
            return state;
    }
};

export default authReducer;