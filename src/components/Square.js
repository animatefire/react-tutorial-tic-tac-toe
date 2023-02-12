export default function Square( {value, onSquareClick, i, winningSquares} ){
  
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