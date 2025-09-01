import React from "react";
import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    let updateBlue = () => {
    // moves.blue += 1;
    // setMoves({...moves}); // spread operator to create a new object
    // setMoves({ ...moves, blue: moves.blue + 1 });
    setMoves((prev) => {
      return { ...prev, blue: prev.blue + 1 };
    });
    };

    let updateYellow = () => {
    setMoves((prev) => {
      return { ...prev, yellow: prev.yellow + 1 };
    });
    };

    let updateGreen = () => {
    setMoves((prev) => {
      return { ...prev, green: prev.green + 1 };
    });
    };

    let updateRed = () => {
    setMoves((prev) => {
      return { ...prev, red: prev.red + 1 };
    });
    };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button onClick = {updateBlue} style={{ backgroundColor: "blue" }}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button onClick = {updateYellow} style={{ backgroundColor: "yellow", color: "black" }}>
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button onClick = {updateGreen} style={{ backgroundColor: "green" }}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button onClick = {updateRed} style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}
