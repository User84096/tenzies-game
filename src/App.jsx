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

  function newDie() {
setDie(allNewDice())}

const dice = die.map(dice => <Die value={dice} /> )

  return (
    <div className="App">
      <main>
        <div className='text'>
          <h1>Tenzies</h1>
          <h3>Roll until all dice are the same. Click each die to 
          freeze it at its current value between rolls.</h3>
        </div>
        {dice}
        <div className='button-div' onClick={newDie}><button>Roll</button></div>
      </main>
      
    </div>
  )
}

export default App
