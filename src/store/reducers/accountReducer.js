import * as actionTypes from '../actions/actionTypes';

const INITIAL_ACCOUNT={
    fullName:'',
    email:'',
    phoneNumber:'',
    country:'',
    platform:'',
    castleLevel:'',
    troopsMight:'',
    researchMight:'',
    kingdom:'',
    migrations:'',
    hasGift:'',
    describe:'',
    price:'',
    infoList:[],
    filesUrls:[]
};

const initialState={
    account:{...INITIAL_ACCOUNT}
};

const accountReducer=(state=initialState,action)=>{
    if(action.type===actionTypes.INIT_ACCOUNT){
        return{
            ...state,
            account:{...INITIAL_ACCOUNT}
        };
    }else{
        return state;
    }
}

export default accountReducer;