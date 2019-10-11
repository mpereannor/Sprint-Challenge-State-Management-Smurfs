import axios from 'axios';
import * as types from './actionTypes';

//design action creators that will activate the reducers (7 deepwood motte)
const smurfApi = `http://localhost:3333/smurfs`;

export function getSmurfs (smurfs) {
    return {

        type: types.GET_SMURFS,
        payload: smurfs
    }
};

export function addSmurfs(ID) {
    return {

        type: types.ADD_SMURFS,
        payload: ID, 
    }
}

export const getAllSmurfs = () => dispatch => {
    debugger
    axios.get(smurfApi)
    .then(response => {
        response.data
        dispatch(getSmurfs(smurfs))
    });
};

