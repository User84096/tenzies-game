import { useState } from 'react'
import Die from "./Die"


function App() {
  const [die, setDie] = useState(allNewDice())

function allNewDice() {
 const randomNumbers = [];
 for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.ceil(Math.random() * 6))
 }
 return randomNumbers
}

const dice = die.map(dice => <Die value={dice} /> )

  return (
    <div className='screen'>
    <div className="App">
      <main>
        {dice}
      </main>
    </div>
    </div>
  )
}

export default App
