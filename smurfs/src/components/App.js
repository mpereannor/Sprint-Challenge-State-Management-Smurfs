import React, { useEffect } from "react";
import {connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import SmurfProfile from './SmurfProfile';
import "./App.css";

function App ({smurfs, error, fetchSmurfs, getSmurfs}) {

  useEffect(() => {
    getSmurfs()
  },[])
  console.log('error', error,)
  console.log( 'fetch' , fetchSmurfs)

  return (
    <div className="App">

      <div>
      {smurfs.map(smurf => (
          <SmurfProfile key= {smurf.id} smurf={smurf} />
        ))}
     
      </div>

    </div>
  );
}

export default connect (
  state => state.smurfs,
  actionCreators
) (App);







//notes typeof smurfs === 'array' && 
// this connotes to if typeof smurfs is equal to an array then execute