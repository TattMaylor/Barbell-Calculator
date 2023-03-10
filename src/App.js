import React from 'react';
import Plates from './Plates'
import WeightSlider from './WeightSlider';
import './App.css'

function App() {
  return(
  <>
  <table>
    <tr>
      <td>
        <WeightSlider value='0' heading='Target Weight' id='Target' max='1000'/>
      </td>
    </tr>
    <tr>
      <td>
        <WeightSlider value='0' heading='Bar Weight' id='Bar' max='200'/>
      </td>
    </tr>
    <tr>
      <td>
      <Plates />
      </td>
    </tr>
    <tr>
      <td>
        <button>Calculate</button>
      </td>
    </tr>
  </table>
  <br></br>
  </>
  )
}

export default App;
