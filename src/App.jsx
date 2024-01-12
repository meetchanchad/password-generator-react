import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div id='main'>

      <div className='pass-gen-main'>

        <div className="pass-gen-wrapper">

          <div className='pass-gen-txt'>
            <h1>Password Generator</h1>
          </div>

          <div className='pass-gen-input'>
            <div><input type="text" readOnly /><button>Copy</button></div>
          </div>

          <div className='pass-gen-length'>
            <div className='range'><input type="range" id='range' /><label htmlFor="range">length</label></div>
            <div className='checkbox'>
              <div><input type="checkbox" id='numbers' /><label htmlFor="numbers">Numbers</label></div>
              <div><input type="checkbox" id='char' /><label htmlFor="char">Charactors</label></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
