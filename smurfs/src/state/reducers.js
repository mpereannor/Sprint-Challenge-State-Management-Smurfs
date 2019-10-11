import * as types from './actionTypes';

const initialSmurfList = [];

export function smurfListReducer(state = initialSmurfList, action){
    switch(action.type) {
        case types.ADD_SMURFS:
            return state.concat(action.payload);
        
        default:
            return state
    }
}

// const initialSmurf = [
//     {
//         "name": "Brainey",
//         "age": 200,
//         "height": "5cm",
//         "id": 0
//     }
// ];

const initialState = {
    smurfs: []
}

export function smurfReducer (state = initialState, action
){
    switch(action.type) {
        case types.GET_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
                }; 
        
        default:
            return state

    }
}

