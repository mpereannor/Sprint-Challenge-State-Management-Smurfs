import * as types from './actionTypes';

const initialState = {
    fetchSmurfs: false,
    error: null,
    smurfs: []
};

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SMURFS:
            return {
                ...state,
                fetchSmurfs: true, 
                error: null
            };

        case types.GET_SMURFS_SUCCESS:
            return {
                ...state,
                fetchSmurfs: false,
                smurfs: action.payload
            };

        case types.GET_SMURFS_FAILURE:
            return {
                ...state,
                fetchSmurfs: false,
                error: action.payload
            };

            case types.ADD_SMURFS_SUCCESS:
                return {
                    ...state,
                    smurfs: action.payload.data
                };
        
        default: 
            return state;
    }
}

//previous method used on friday
/*
const initialSmurfList = [];

export function smurfListReducer(state = initialSmurfList, action){
    switch(action.type) {
        case types.ADD_SMURFS:
            return state.concat(action.payload);
        
        default:
            return state
    }
}

const initialState = {
    smurfs: []
}

export function smurfReducer (state = initialState, action
){
    switch(action.type) {
        case types.GET_SMURFS:
            return {
                ...state,
                state: action.payload,
                }; 
        
        default:
            return state

    }
}
*/
