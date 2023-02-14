import { useState } from 'react';

export default function Moves({history, setCurrentMove}){
const [isReversed, setReversed] = useState(false);


    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
      }

//    console.log(history)

    const moves = history.map((key, move) => {
        let description;
        if (move === history.length - 1) {
            description = 'You are at move #' + move;
        } else if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return(
            <li key={move}>  
                <button onClick={()=>jumpTo(move)}>{description}</button>
            </li>
        )
  })

    console.log(moves)

    return (
        <>
            <button onClick={()=>setReversed(!isReversed)}>Reverse Order</button>
            <ol> { !isReversed? moves : moves.reverse() } </ol>  
        </>
    )

}

