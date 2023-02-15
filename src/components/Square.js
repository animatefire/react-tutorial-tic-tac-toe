export default function Square( {value, onSquareClick, i, winningSquares} ){
  
    return (
      <button 
        key = {i}
        className = { 
          i === winningSquares[0] ||  // If any button
          i === winningSquares[1] ||  // is a winning button
          i === winningSquares[2] ?  
          "winner" : "square"         // assign it .winner css class
        }
        onClick={onSquareClick}>
        { value }
      </button>
    )
  }