import { useState, useEffect } from 'react'
import Die from "./Die"
import { nanoid } from 'nanoid'

function App() {
  const [die, setDie] = useState(allNewDice)

function rollingDice() {
        return {
          value: Math.ceil(Math.random() * 6), 
          id: nanoid(),
          isHeld: false
        }}

function allNewDice() {
 const randomNumbers = [];
 for (let i = 0; i < 10; i++) {
  randomNumbers.push(rollingDice())}
  return randomNumbers
}

  function newDie() {
    setDie(oldDice => {
      return oldDice.map(dice =>
        dice.isHeld ? dice : rollingDice() 
        )})
    }

function holdDice(id) {
  setDie(oldDice => {
     return oldDice.map(dice => dice.id === id ? 
      {...dice, isHeld: !dice.isHeld} :
      dice
     )})
}

const dice = die.map(dice => (
  <Die 
    key={dice.id} 
    value={dice.value} 
    held={dice.isHeld} 
    hold={() => holdDice(dice.id)}
    />
))

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
