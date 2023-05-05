import { useState } from "react";
import Box from "../Box/Box";
import "./Board.css";
import ResultPanel from "../ResultPanel/ResultPanel";
const Board = (props) => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [isAnO, setIsAnO] = useState(false);
  const rowWinPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8]
  ]
  const colWinPattern = [
    [0, 3, 6], [1, 4, 7], [2, 5, 8]
  ]
  const diagonalWinPattern = [
    [0, 4, 8], [2, 4, 6]
  ]

  const winPatterns = [...colWinPattern, ...rowWinPattern, ...diagonalWinPattern]
  const checkIfWinner = (boxes) => {
    for (let i = 0; i < winPatterns.length; i++) {
        
      const [val1, val2, val3] = winPatterns[i];
      if (boxes[val1] && boxes[val1] === boxes[val2] && boxes[val2] === boxes[val3]) {
        return boxes[val1];
      }
      if(i === winPatterns.length - 1 && boxes.indexOf(null) === -1){
        return "Draw"
    }
    }
    
    return null;
  };
  const handleReset = () => {
    setIsAnO(false)
    setBoxes(Array(9).fill(null))
  }
  
  const winner = checkIfWinner(boxes)
  const status = winner ? winner === "Draw" ? `Draw!` : `${winner} wins!` : `${isAnO ? "O" : "X"} to play.` 
  const handleClick = (index) => {
    if(winner){
        return
    }
    let updatedBoxes = [...boxes];
    updatedBoxes[index] = updatedBoxes[index] == null ? isAnO ? "O" : "X" : updatedBoxes[index];
    console.log(updatedBoxes);
    setBoxes(updatedBoxes);
    setIsAnO(!isAnO);
  };
  

  

  return (
    <div className="Board">
      <div className="BoardRow">
        <Box value={boxes[0]} onClick ={() => handleClick(0)}/>
        <Box value={boxes[1]}  onClick ={() => handleClick(1)} />
        <Box value={boxes[2]}  onClick ={() => handleClick(2)} />
      </div>
      <div className="BoardRow">
        <Box value={boxes[3]}  onClick ={() => handleClick(3)} />
        <Box value={boxes[4]}  onClick ={() => handleClick(4)} />
        <Box value={boxes[5]}  onClick ={() => handleClick(5)} />
      </div>
      <div className="BoardRow">
        <Box  value={boxes[6]} onClick ={() => handleClick(6)} />
        <Box  value={boxes[7]} onClick ={() => handleClick(7)} />
        <Box  value={boxes[8]} onClick ={() => handleClick(8)} />
      </div>
      <ResultPanel status = {status} resetHandler ={() => handleReset()}/>
    </div>
  );
};

export default Board;
