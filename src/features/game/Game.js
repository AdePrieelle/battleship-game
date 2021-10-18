import { useState } from 'react';
// import { createGameboard } from './createGameboard/createGameboard';
import './Game.scss';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  // const [gameboard, setGameboard] = useState(createGameboard(amountOfRows, amountOfColumns, "empty"));

  // place ships on default positions to test functionality
  const [gameboardPlayer, setGameboardPlayer] = useState([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]);
  // console.log(gameboardPlayer);
  const [gameboardComputer, setGameboardComputer] = useState([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]);
  // console.log(gameboardComputer);


  // check if the gameboard cell is a hidden ship
  const isHiddenShipGameboardCell = (array, id) => {
    if (array[id] !== "empty" && array[id] !== "hit" && array[id] !== "miss") {
      return true;
    }
    return false;
  }

  // check if the gameboard cell is "empty" and hasn't been clicked before
  const isEmptyGameboardCell = (array, index) => {
    if (array[index] === "empty") {
      return true;
    }
    return false;
  }

  // update the gameboard with a hit or miss value
  const updateGameboardCellHitOrMiss = (gameboard, index, setGameboard) => {
    if (isHiddenShipGameboardCell(gameboard, index)) {
      let newState = [...gameboard];
      newState[index] = "hit";
      setGameboard(newState);
    } else if (isEmptyGameboardCell(gameboard, index)) {
      let newState = [...gameboard];
      newState[index] = "miss";
      setGameboard(newState);
    }
    return;
  }

  // update the gameboard with player click event on gameboard cell
  const handleMovePlayer = (event) => {
    updateGameboardCellHitOrMiss(gameboardPlayer, event.target.id, setGameboardPlayer);
  }


  // make an array from numbers 0 to 99
  let initialRandomComputerNumberArray = Array.from(Array(100).keys());
  // store gameboardComputer cells here that aren't picked yet
  const [gameboardComputerCellsAvailable, setGameboardComputerCellsAvailable] = useState(initialRandomComputerNumberArray);

  const handleMoveComputer = () => {
    // pick a random indexvalue based on the amount of gameboardComputer cells that aren't picked yet
    let randomIndexGameboardComputerCellsAvailable = Math.floor(Math.random() * gameboardComputerCellsAvailable.length);

    // random gameboardComputer cell value that gets picked with the index
    let randomGameboardComputerCellNumber = gameboardComputerCellsAvailable[randomIndexGameboardComputerCellsAvailable];

    // copy gameboardComputerCellsAvailable to update the state
    let copyGameboardComputerCellsAvailable = [...gameboardComputerCellsAvailable];
    // console.log(copyRandomComputerNumberArray);

    // remove the choosen randomGameboardComputerCellNumber from the copyGameboardComputerCellsAvailable
    copyGameboardComputerCellsAvailable.splice(randomIndexGameboardComputerCellsAvailable, 1);

    // update gameboardComputerCellsAvailable to remove the picked randomGameboardComputerCellNumber
    setGameboardComputerCellsAvailable(copyGameboardComputerCellsAvailable);

    // update the gameboardComputer state with a "hit" or "miss" value depending if the randomly picked index randomGameboardComputerCellNumber is a ship or not
    updateGameboardCellHitOrMiss(gameboardComputer, randomGameboardComputerCellNumber, setGameboardComputer);
  }

  return (
    <div className="gameboard-wrapper">
      <div className="gameboard gameboard-player" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardPlayer.map((cell, id) => (
            <div key={id} id={id} className={`gameboard-cell ${gameboardPlayer[id] === "hit" ? " hit" : gameboardPlayer[id] === "miss" ? " miss" : ""}`} onClick={handleMovePlayer}></div>
        ))}
      </div>
      <div className="gameboard gameboard-computer" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardComputer.map((cell, id) => (
            <div key={id} id={id} className={`gameboard-cell ${gameboardComputer[id] === "hit" ? " hit" : gameboardComputer[id] === "miss" ? " miss" : ""}`} onClick={handleMoveComputer}></div>
        ))}
      </div>
  </div>
  )
}


