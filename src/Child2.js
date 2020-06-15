import React, { useContext, useReducer } from 'react';
import './App.css';
import numberReducer from './numberReducer'

function Child2() {

    let [state,dispatch] = useReducer (numberReducer,52);
   
  return (
    <div>

        Child 2 {state}
        <button onClick = {()=>{dispatch ({type : "INCREMENT", val : 67}); }} > Increase </button>
        <button onClick = {()=>{dispatch ({type : "DECREMENT", val : 34}); }} > Decrease </button>
        
    </div>
  );
}

export default Child2;