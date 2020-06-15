import React, { useState, useReducer, useContext } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext'

function App() {
 // let [number, setNumber] = useState (45);
 let value = useState (48);
 let number = useReducer ();
  
  return (
    <ValueContext.Provider value = {value}>
    <div>
      Hello World
      <Parent></Parent>
    
    </div>
    </ValueContext.Provider>
  );
}

export default App;
