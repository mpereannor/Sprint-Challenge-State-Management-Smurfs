import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as reducers from './state/reducers';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const monsterReducer = combineReducers({

    smurfs: reducers.smurfReducer,
    list: reducers.smurfListReducer
  });

const store = createStore(
    monsterReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById("root"));

