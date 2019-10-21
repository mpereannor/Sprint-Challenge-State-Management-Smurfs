import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../state/actionCreators';
import * as actionCreators from '../state/actionCreators';

const initialForm = {
    name: '', 
    age: '',
    height: ''
}

const SmurfForm = props => {
    const { addSmurf } = props; 
    const [smurf, setSmurf] = useState(initialForm);

    const handleChange = event => {
        setSmurf({ ...smurf, [event.target.name] : event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        addSmurf(smurf);
        setSmurf(initialForm);
    }
    
    return ( 
        
    <form onSubmit ={handleSubmit}>
        <h2>Populate Smurf Village </h2>

        <label>Smurf Name:</label>
        <input type='text' name='name' value={smurf.name} onChange={handleChange}/>

        <label>Smurf Age:</label>
        <input type='text' name='age' value={smurf.age} onChange={handleChange}/>

        <label>Smurf Height:</label>
        <input type='text' name='height' value={smurf.height} onChange={handleChange}/>

        <button type='submit'>Add Smurf</button>
    </form>
)

}
export default connect(state => state.addSmurf, actionCreators) (SmurfForm);