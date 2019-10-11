import React, { useEffect } from "react";
import {connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import SmurfProfile from './SmurfProfile';


import "./App.css";
export function App ({smurfs, getSmurfs, addSmurfs, getAllSmurfs} ) {

  useEffect(() => {
    getAllSmurfs();
  })
    
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {smurfs.map(profile => (
      <SmurfProfile profile={profile}/>))}
    </div>
  );

}

export default connect (
  state => state,
  actionCreators,
) (App);
