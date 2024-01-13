import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('')
  const [length, setLength] = useState(7)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)


  const passwordGeneretor = useCallback(() => {

    let pass = ''
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'

    if (numberAllowed) str += '1234567890'
    if (charAllowed) str += '+_)(*&^%$#@!~{}[]'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {

    passwordGeneretor()

  }, [length, numberAllowed, charAllowed, passwordGeneretor])


  return (
    <div id='main'>

      <div className='pass-gen-main'>

        <div className="pass-gen-wrapper">

          <div className='pass-gen-txt'>
            <h1>Password Generator</h1>
          </div>

          <div className='pass-gen-input'>
            <div><input type="text" readOnly value={password} /><button>Copy</button></div>
          </div>

          <div className='pass-gen-length'>
            <div className='range'><input value={length} type="range" id='range' min={7} max={50} onChange={(e) => { setLength(e.target.value) }} /><label htmlFor="range">length: {length}</label></div>
            <div className='checkbox'>
              <div><input type="checkbox" id='numbers' defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} /><label htmlFor="numbers">Numbers</label></div>
              <div><input type="checkbox" id='char' defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} /><label htmlFor="char" >Charactors</label></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
