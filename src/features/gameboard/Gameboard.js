import { useState } from 'react';
import './Gameboard.scss';

export const Gameboard = () => {

  const generateGameboardState = (amountRows, amountColumns, defaultValue) => {
    let gameboardState = [];

    // one dimensional array solution
    for(let i=0; i < amountRows*amountColumns; i++){
      gameboardState.push(defaultValue);
    }

    
    // two dimensional array solution
    // Creates all lines:
    // for(let i=0; i < amountRows; i++){
  
    //     // Creates an empty line
    //     gameboardState.push([]);
  
    //     // Adds cols to the empty line:
    //     gameboardState[i].push( new Array(amountColumns));
  
    //     for(let j=0; j < amountColumns; j++){
    //       // Initializes:
    //       gameboardState[i][j] = defaultValue;
    //     }
    // }

    // 4 ships 1 length destroyer (d1, d2, d3, d4)
    // 3 ships 2 length submarine (s1, s2, s3)
    // 2 ships 3 length battleship (b1, b2)
    // 1 ship  4 length carrier (c1)

    gameboardState[0] = "d1";
    gameboardState[2] = "d2";
    gameboardState[4] = "d3";
    gameboardState[6] = "d4";

    gameboardState[20] = "s1";
    gameboardState[21] = "s1";
    gameboardState[23] = "s2";
    gameboardState[24] = "s2";
    gameboardState[26] = "s3";
    gameboardState[27] = "s3";

    gameboardState[40] = "b1";
    gameboardState[50] = "b1";
    gameboardState[60] = "b1";

    gameboardState[42] = "b2";
    gameboardState[52] = "b2";
    gameboardState[62] = "b2";

    gameboardState[80] = "c1";
    gameboardState[81] = "c1";
    gameboardState[82] = "c1";
    gameboardState[83] = "c1";
  
    return gameboardState;
  }

  const amountOfRows = 10;
  const amountOfColumns = 10;

  const [gameboard, setGameboard] = useState(generateGameboardState(amountOfRows, amountOfColumns, "empty"));
  console.log(gameboard);

  const handleMove = (event) => {
    console.log(event);
    console.log(gameboard[event.target.id]);
    if (gameboard[event.target.id] !== "empty" 
        && gameboard[event.target.id] !== "hit" 
        && gameboard[event.target.id] !== "miss"
    ) {
      let newState = [...gameboard];
      newState[event.target.id] = "hit";
      setGameboard(newState)
    } else if (gameboard[event.target.id] === "empty") {
      let newState = [...gameboard];
      newState[event.target.id] = "miss";
      setGameboard(newState)
    }
    return;
  }
  return (
    <div className="gameboard gameboard-player" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
      {/* one dimensional array solution */}
      {gameboard.map((cell, id) => (
          <div key={id} id={id} className={`gameboard-cell ${gameboard[id] === "hit" ? " hit" : gameboard[id] === "miss" ? " miss" : ""}`} onClick={handleMove}></div>
      ))}

      {/* two dimensional array solution */}
      {/* {gameboard.map((row, id) => (
        row.map((column, id) => (
          <div key={id} className="gameboard-cell"></div>
        ))
      ))} */}
    </div>
  )
}
