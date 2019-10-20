import axios from 'axios';
import * as types from './actionTypes';


const smurfApi = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
    dispatch({type: types.GET_SMURFS});
    axios
    .get(smurfApi)
    .then(response => {
        dispatch({type: types.GET_SMURFS_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error);
        dispatch({type: types.GET_SMURFS_FAILURE, payload: error.message});
    });
}

// export const addSmurf = smurf => dispatch = {
//     axios.post(smurfApi, smurf)
//     .then(response => {
//         dispatch({type: types.GET_SMURFS_SUCCESS, payload: response.data});
//     })
//     .catch(error => {
//         console.log(error)
//     });
// };
//previous method used on friday
/*
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

*/