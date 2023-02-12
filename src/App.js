// import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';
import Board from './components/Board.js'

export default function Game(){
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[currentMove];
  const [isReversed, setReversed] = useState(false);
  // const [winner, setWinner] = useState(null);


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove (nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
      let description;
      if (move === history.length - 1) {
        description = 'You are at move #' + move;
      } else if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }

      return (
        <li key={move}>  
          <button onClick={()=>jumpTo(move)}>{description}</button>
        </li>
      )
    })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol> { !isReversed? moves : moves.reverse() } </ol>
      </div>
      <button onClick={()=>setReversed(!isReversed)}>Reverse Order</button>
    </div>
  )
}

