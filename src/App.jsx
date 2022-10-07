import { useState, useEffect } from 'react'
import Die from "./Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [die, setDie] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const theNumber = die[0].value
     if (die.every(dice => dice.isHeld) &&
      die.every(dice => theNumber === dice.value)) {
         setTenzies(!tenzies);
     } 
  }, [die])

  function newGame() {
    setTenzies(!tenzies)
    setDie(allNewDice)
  }

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

const buttonStatus = tenzies ? "New Game" : "Roll";

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
          {tenzies && <Confetti />}
          <h1>Tenzies</h1>
          <h3>Roll until all dice are the same. Click each die to 
          freeze it at its current value between rolls.</h3>
        </div>
        {dice}
        <div className='button-div' onClick={tenzies ? newGame : newDie}><button>{buttonStatus}</button></div>
      </main>
      
    </div>
  )
}

export default App
