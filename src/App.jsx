import Die from './components/Die'
import { useState, useRef } from 'react'
import Confetti from 'react-confetti'

export default function App() {
  // create initial dice array
  function getNewDiceArr() {
    let initDiceArr = []
    for (let id = 0; id < 10; id++) {
      initDiceArr.push({
        key: id,
        id: id,
        num: getNum(),
        selected: false
      })
    }
    return initDiceArr
  }


  const [dice, setDice] = useState(() => getNewDiceArr())

  // check if we've won every render
  // - are all numbers the same
  // - are all the dice held

  let dieNum = dice[0].num
  let won = dice.every(die => die.num === dieNum && die.selected)
  const buttonRef = useRef(null)

  if (won) { buttonRef.current.focus() }

  function getNum() {
    return Math.ceil(Math.random() * 6)
  }

  function toggleSelected(id) {
    setDice(prevArr => prevArr.map(
      prevDie => (
        prevDie.id === id ? { ...prevDie, selected: !prevDie.selected } : prevDie
      )
    ))
  }

  function reset() {
    setDice(getNewDiceArr())
  }

  function roll() {
    setDice(prevArr => prevArr.map(
      prevDie => (
        prevDie.selected ? prevDie : { ...prevDie, num: getNum() }
      )
    ))
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {dice.map(die => <Die die={die} toggle={toggleSelected} key={die.id} />)}
      </div>
      <button
        ref={buttonRef}
        className="roll-btn"
        onClick={won ? reset : roll}>
        {won ? "New Game" : "Roll"}
      </button>
      {won ? <Confetti /> : null}
      {won ? <div aria-live="polite" className="sr-only">Congratulations, you won! Press new game to start again</div> : null}
    </main>
  )
}