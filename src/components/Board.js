import BoardRow from './BoardRow.js'

export default function Board({xIsNext, squares, onPlay}) {
  
    const winnerData = calculateWinnerData(squares);
    const winningSquares = winnerData[0];
    const winner = winnerData[1]
    let status;
  
    // TODO Add "You Tied!" status...
    if (winner) {
      status = "Winner: " + winner; 
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
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
  
    return (
        <>
          <div className="status">{status}</div>
          <BoardRow size={3} startingIndex={0} squares={squares} winningSquares={winningSquares} winner={winner} xIsNext={xIsNext} onPlay={onPlay}/>
          <BoardRow size={3} startingIndex={3} squares={squares} winningSquares={winningSquares} winner={winner} xIsNext={xIsNext} onPlay={onPlay}/>
          <BoardRow size={3} startingIndex={6} squares={squares} winningSquares={winningSquares} winner={winner} xIsNext={xIsNext} onPlay={onPlay}/>
        </>
      )

  }