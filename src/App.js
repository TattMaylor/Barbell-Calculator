import React from 'react';
import Plates from './Plates'
import WeightSlider from './WeightSlider';
import './App.css'

function App() {
  const plates = { 100: 0, 55: 0, 45: 0, 35: 0, 25: 0, 15: 0, 10: 0, 5: 0, 2.5: 0, 1.25: 0 };
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <WeightSlider value='0' heading='Target Weight' id='Target' max='1000' />
            </td>
          </tr>
          <tr>
            <td>
              <WeightSlider value='0' heading='Bar Weight' id='Bar' max='200' />
            </td>
          </tr>
          <tr>
            <td>
              <Plates plates={plates} />
            </td>
          </tr>
          <tr>
            <td>
              <button>Calculate</button>
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
    </>
  )
}

export default App;
