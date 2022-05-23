import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <text className='nombre'>Diego Franco</text>
      <div className='otro'>
        ¿Que lenguajes se?
      </div>
    </div>
  )
}

export default App
