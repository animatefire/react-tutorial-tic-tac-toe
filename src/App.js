// import logo from './logo.svg';
import './App.css';
import './index.css';
import { useState } from 'react';

export default function Game(){
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[currentMove];
  const [isReversed, setReversed] = useState(false);
  
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

function Board({xIsNext, squares, onPlay}) {

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winnerData = calculateWinnerData(squares);
  const winningSquares = winnerData[0];
  const winner = winnerData[1]
  let status;

  if (winnerData) {
    status = "Winner: " + winner; 
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function Square( {value, onSquareClick, i} ){

    return (
      <button 
        key = {i}
        className = { 
        i === winningSquares[0] || i === winningSquares[1] || i === winningSquares[2] ? 
        "winner" : "square"}
        onClick={onSquareClick}>
        { value }
      </button>
    )
  }

  function calculateWinnerData(squares){
    
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
    for (let i = 0; i < lines.length; i++) {
      let [a,b,c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return [lines[i], squares[a]]
      }
    }
    return [[null, null, null], null];
  }

  function RenderSquares({size, startingIndex}) {
    console.log(winningSquares)
    const row = []
    for (let i = startingIndex; i < size + startingIndex; i++) {
      row.push (
      <Square 
        key={i} 
        value={squares[i]} 
        onSquareClick={() => handleClick(i)} 
        i={i}
      />
      )
    }
    return row
  }

  function BoardRow(size, startingIndex){
      return ( 
        <div className="board-row">
          {
            RenderSquares(size, startingIndex)
          }
        </div> 
      )
  }

  return (
      <>
        <div className="status">{status}</div>
        <BoardRow size={3} startingIndex={0}/>
        <BoardRow size={3} startingIndex={3}/>
        <BoardRow size={3} startingIndex={6}/>
      </>
    )

}