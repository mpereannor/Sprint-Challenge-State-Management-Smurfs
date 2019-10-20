import React from "react";

export default function SmurfProfile (props){
      return (
        <div>
            <h1>{props.smurf.name}</h1> 
            <h1>{props.smurf.age}</h1> 
            <h1>{props.smurf.height}</h1> 


        </div>
      )
  };