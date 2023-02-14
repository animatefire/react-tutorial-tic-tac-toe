// import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';
import Board from './components/Board.js'
import Moves from './components/Moves';

export default function Game(){
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[currentMove];
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove (nextHistory.length - 1)
  }
  
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
       <Moves history={history} setCurrentMove={setCurrentMove}/>
    </div>
  )
}

