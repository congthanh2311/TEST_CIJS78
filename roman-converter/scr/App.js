import React from 'react';
import { useState } from 'react';

import './App.css';

function App() {

  const [inputVal, setInputVal] = useState('');
  const [result, setResult] = useState('');

  function handleChange(event){
    setInputVal(event.target.value);
    setResult(romanize(event.target.value));
  }

  let inputChecked = false;
  if(inputVal <= 3000){
    inputChecked = true;
  }

  function romanize(num) {
    var lookup = {
      M:1000,
      CM:900,
      D:500,
      CD:400,
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      IX:9,
      V:5,
      IV:4,
      I:1
    },roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

  return (
    <div className="App">
      <h1>Integer to Roman</h1>
      <p>A simple app converting integer to roman number</p>
      <input 
      className='input-box'
      name="inputVal"
      type="text"
      placeholder='Enter a number smaller than or equal to 3000'
      onChange={handleChange}></input>
      <p>check input: {inputVal}</p>
      {inputVal && <p>{inputChecked ? 'Good' : "input must be an integer less than or equal to 3000"}</p>}
      <h2>{inputChecked && result? result : 'Result'}</h2>

    </div>
  );
}

export default App;