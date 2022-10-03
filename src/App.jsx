import { useState } from 'react'
import Die from "./Die"


function App() {
  const [count, setCount] = useState(0)

function allNewDice() {
 const randomNumbers = [];
 for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.ceil(Math.random() * 6))
 }
 return randomNumbers
}

  return (
    <div className='screen'>
    <div className="App">
      <main>
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
      </main>
    </div>
    </div>
  )
}

export default App
