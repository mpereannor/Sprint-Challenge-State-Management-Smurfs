import axios from 'axios';
import * as types from './actionTypes';


const smurfApi = 'http://localhost:3333/smurfs';

export function getSmurfs(smurfs) {
    return {

        type: types.GET_SMURFS,
        payload: smurfs
    }
};

export const getAllSmurfs = () => dispatch => {
    debugger
    axios.get(smurfApi)
    .then(response => {
        
        const smurfs = response.data;
        dispatch(getSmurfs(smurfs))
    });
};

