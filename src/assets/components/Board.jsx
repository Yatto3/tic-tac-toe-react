import { useState } from "react";


 export default function Board({getWinner}){
    
    let [userTurn ,setUserTurn] = useState(true);

    const handleClick = (e) =>{
        if(e.target.tagName === "BUTTON"){
          if(userTurn) {
                let squares = document.querySelectorAll(".square");
                e.target.textContent = "X";
                checkForWin(Object.entries(squares).filter(square => square[1].textContent === "X"),"X");
                setUserTurn(false);
            } else{
                let squares = document.querySelectorAll(".square");
                e.target.textContent = "O";
                checkForWin(Object.entries(squares).filter(square => square[1].textContent === "O"),"O");
                setUserTurn(true);
            }
        }
    }

    const checkForWin = (squares,currentElement) => {
        const [...positions] = squares.map(square => square[0]);
        const winingPos  = [
            ["0","1","2",],
            ["3","4","5",],
            ["6","7","8"],

            ["0","3","6",],
            ["1","4","7",],
            ["2","5","8"],

            ["0","4","8",],
            ["6","4","2",],
            ["8","4","0",],
            ["2","4","6",],
            
        ]
        
        if(winingPos.some(winPos => winPos.toString() === positions.toString())){
            let board = document.querySelector(".board");
            getWinner(currentElement + " wins");
            board.style.pointerEvents = "none";
        }else {
            let square = document.querySelector(".board").querySelectorAll(".square");
            square = Object.entries(square).map(square => square[1].textContent !== "");
            square.every(value => value === true) ? getWinner("Tie") : "";
        }
        
    }

    return(
        <>
      <div className="board-row" onClick={ (e) => handleClick(e)} >
        <button className="square" ></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="board-row" onClick={ (e) => handleClick(e)} >
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
      <div className="board-row" onClick={ (e) => handleClick(e)}>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>
    </>
    )
}