import Square from './Square.js'

function RenderSquares({size, startingIndex, winningSquares, squares, winner, xIsNext, onPlay}) {
    function handleClick(i) {
        if (squares[i] || winner) {
          return; // If a square already exists, or there's a winner.
        } 
    
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[i] = "X";
        } else {
          nextSquares[i] = "O";
        }
        onPlay(nextSquares);
      }
    
    const row = []
    for (let i = startingIndex; i < size + startingIndex; i++) {
      row.push (
      <Square 
        key={i} 
        value={squares[i]} 
        onSquareClick={() => handleClick(i)} 
        i={i}
        winningSquares = {winningSquares}
      />
      )
    }
    return row
  }

export default function BoardRow(size, startingIndex, winningSquares, squares, winner, xIsNext, onPlay){
    return ( 
      <div className="board-row">
        {
          RenderSquares(size, startingIndex, winningSquares, squares, winner, xIsNext, onPlay)
        }
      </div> 
    )
}