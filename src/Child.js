import React, { useContext, useReducer } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child() {

    let Value = useContext (ValueContext);
    let updateValue = Value[1];
  return (
    <div>

        Child number {Value[0]}
        <button onClick = {()=>{updateValue(++Value[0])}}> Update Value </button>     
    </div>
  );
}

export default Child;