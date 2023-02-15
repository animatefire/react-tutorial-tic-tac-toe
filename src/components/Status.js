export default function Status({winner, xIsNext, history}){
    let status;
    console.log(history.length)
    // TODO Add "You Tied!" status...
    if (winner) {
      status = "Winner: " + winner; 
    } else if (
        history.length > 9 && !winner) {
        status = "Tied match!"
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
    return <p className={winner? "winner" : "status"}>{status}</p>
  }