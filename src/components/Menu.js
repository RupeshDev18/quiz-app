import React, { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import "../App.css";
export default function Menu() {
  const { gameState, setGameState,userName,setUserName } = useContext(GameStateContext);

  return (
    <div className="Menu">
      <h3>Enter Your Name</h3>
      <input placeholder="Ex. John Doe" type="text" onChange={(e)=>{
         setUserName(e.target.value);
      }} />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
