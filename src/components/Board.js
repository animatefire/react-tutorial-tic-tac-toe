import BoardRow from './BoardRow.js'
import Status from './Status'
import calculateWinnerData from './calculateWinnerData.js';

export default function Board({xIsNext, squares, onPlay, history}) {
  
    const winnerData = calculateWinnerData(squares);
    const winningSquares = winnerData[0];
    const winner = winnerData[1]
  
    return (
        <>
          <Status winner={winner? winner : null} xIsNext={xIsNext} history={history}/>
          <BoardRow size={3} startingIndex={0} squares={squares} winningSquares={winningSquares} winner={winner} xIsNext={xIsNext} onPlay={onPlay}/>
          <BoardRow size={3} startingIndex={3} squares={squares} winningSquares={winningSquares} winner={winner} xIsNext={xIsNext} onPlay={onPlay}/>
          <BoardRow size={3} startingIndex={6} squares={squares} winningSquares={winningSquares} winner={winner} xIsNext={xIsNext} onPlay={onPlay}/>
        </>
      )

  }