import { types } from "util";

/*
import { types } from "util"

const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ''
}

export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.actionStart: 
        return {
            ...state,
            isFetching: true, 
            error: ''
        }

        case types.actionSuccess: 
        return {
            ...state, 
            smurfs: action.payload,
            isFetching: false
        }

        case types.actionFailure:
            return {
                ...state, 
                isFetching: false,
                error: action.payload
            }
        
        case types.actionPostStart:
            return {
                ...state,
                isPosting: true,
                error: ''
            }
        
        case types.actionPostSuccess: 
            return {
                ...state,
                smurfs: action.payload,
                isPosting: false
            }

        case types.actionPostFailure:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        
        default: 
            return state;
    }
}

export const getSmurf = () => dispatch => {
    dispatch({type: types.actionStart})
    axios
    .get('api')
    .then(res => {
        dispatch({type: types.actionSuccess, payload: res.data})
    })
    .catch(err => {
        dispatch({type: types.actionFailure, payload: err})
    })
}

export const addSmurf = (smurf) => dispatch => {
    dispatch({type: types.actionPostStart })
    axios
    .post('api', smurf)
    .then(res => {
        dispatch({type: types.actionPostSuccess, 
        payload: res.data})
    })
    .catch(err => {
        dispatch({type: types.actionPostFailure, payload: err })
    })
}


const store = createStore(

    monsterReducer,
    {},
    compose(
        applyMiddleware(thunk),
        window
    ),

)
*/
const fruitsPromise = axios.get(fruitsApi);

const meatsPromise = axios.get(meatsApi);

Promise.all([fruitsPromise, meatsPromise])
.then(([fruitsApiResponse, meatsApiResponse]) => {
    const fruits = fruitsApiResponse.data;
    const meats = meatsApiResponse.data;

    dispatch({type:types.ADD_FRUITS, payload: fruits});

    dispatch({type: types.ADD_MEATS, payload: meats});
}) 