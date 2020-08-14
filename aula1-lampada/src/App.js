import React, { useState } from 'react';
import './App.css';
import on from './pic_bulbon.gif'
import off from './pic_bulboff.gif'


function App () {
  
  const [isOn, setOn] = useState(false)
  let light = isOn;

    return (
      <>
        <div className="d-flex justify-content-center align-items-center teste">
          <button className="m-5" onClick={() => setOn(false)}>OFF</button>
            {light ? (
              <img src={on} alt=""/>
              ) : (
              <img src={off} alt=""/>
            )}
          <button className="m-5" onClick={() => setOn(true)}>ON</button>
        </div>
      </>
    )
  }

export default App
