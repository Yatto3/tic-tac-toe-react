import { useState } from 'react'
import './App.css'
import Board from './assets/components/Board'

function App() {
  let [winner,setWinner] = useState();
  const getWinner = (winner) =>{
    setWinner(winner);
  }
  return(
   
    <div className='tic-tac-container'>
      <b><h1>React Tic-Tac-Toe Game</h1></b>
      {winner ? <h1>{winner}</h1> : ""}

      <div className='board'>
        <Board getWinner = {getWinner} />
      </div>
    </div>
  )
}

export default App
