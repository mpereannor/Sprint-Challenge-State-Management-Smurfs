import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as reducers from './state/reducers';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


// create a combined reducer (4)
const monsterReducer = combineReducers({

    smurfs: reducers.smurfReducer,
    list: reducers.smurfListReducer
  });


// feed the createStore the combined reducer (5)
const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
ReactDOM.render(
// inject the store into the provider (6)
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));

//make new component Surf where w