import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext'

function App() {
 // let [number, setNumber] = useState (45);
 let value = useState (48);
  
  return (
    <div>
      Hello World
      <Parent></Parent>
      <button onClick = {()=>setNumber(++number)}>Update Number</button>
    </div>
  );
}

export default App;
