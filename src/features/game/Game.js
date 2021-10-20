import { useEffect, useState } from 'react';
// import { createGameboard } from './createGameboard/createGameboard';
import { getRandomIndexFromArray } from './getRandomIndexFromArray/getRandomIndexFromArray';
import { deleteArrayIndexValue } from './deleteArrayIndexValue/deleteArrayIndexValue';
import { isHiddenShipGameboardCell } from './isHiddenShipGameboardCell/isHiddenShipGameboardCell';
import { isEmptyGameboardCell } from './isEmptyGameboardCell/isEmptyGameboardCell';
import './Game.scss';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  const emptyGameboardValue = "empty";
  const hitGameboardValue = "hit";
  const missGameboardValue = "miss";
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  useEffect(() => {
    if (!isPlayerTurn) {
      const computerTurnTimeout = setTimeout(() => {
        handleMoveComputer();
      }, 50);
      return () => clearTimeout(computerTurnTimeout);
    }
  }, [isPlayerTurn]);

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

  // update the gameboard with a hit or miss value
  const updateGameboardCellHitOrMiss = (gameboard, index, setGameboard) => {
    if (isHiddenShipGameboardCell(gameboard, index, emptyGameboardValue, hitGameboardValue, missGameboardValue)) {
      let newState = [...gameboard];
      newState[index] = hitGameboardValue;
      setGameboard(newState);
      // setIsPlayerTurn(!isPlayerTurn);
    } else if (isEmptyGameboardCell(gameboard, index, emptyGameboardValue)) {
      let newState = [...gameboard];
      newState[index] = missGameboardValue;
      setGameboard(newState);
      // setIsPlayerTurn(!isPlayerTurn);
    }
  }

  // update the gameboard with player click event on gameboard cell
  const handleMovePlayer = (event) => {
    updateGameboardCellHitOrMiss(gameboardPlayer, event.target.id, setGameboardPlayer);
    setIsPlayerTurn(false);
  }


  // make an array from numbers 0 to 99
  let initialRandomComputerNumberArray = Array.from(Array(100).keys());
  // store gameboardComputer cells here that aren't picked yet
  const [gameboardComputerCellsAvailable, setGameboardComputerCellsAvailable] = useState(initialRandomComputerNumberArray);

  const handleMoveComputer = () => {
    // pick a random indexvalue based on the amount of gameboardComputer cells that aren't picked yet
    let randomIndexGameboardComputerCellsAvailable = getRandomIndexFromArray(gameboardComputerCellsAvailable);
    // random gameboardComputer cell value that gets picked with the index
    let randomGameboardComputerCellNumber = gameboardComputerCellsAvailable[randomIndexGameboardComputerCellsAvailable];
    // remove the choosen randomGameboardComputerCellNumber from the copyGameboardComputerCellsAvailable
    let copyGameboardComputerCellsAvailableWithoutPickedComputerNumber = deleteArrayIndexValue(gameboardComputerCellsAvailable, randomIndexGameboardComputerCellsAvailable);
    // update gameboardComputerCellsAvailable to remove the picked randomGameboardComputerCellNumber
    setGameboardComputerCellsAvailable(copyGameboardComputerCellsAvailableWithoutPickedComputerNumber);
    // update the gameboardComputer state with a "hit" or "miss" value depending if the randomly picked index randomGameboardComputerCellNumber is a ship or not
    updateGameboardCellHitOrMiss(gameboardComputer, randomGameboardComputerCellNumber, setGameboardComputer);
    setIsPlayerTurn(true);
  }

  return (
    <div className="gameboard-wrapper">
      <div className="gameboard gameboard-player" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardPlayer.map((cell, id) => (
            <div key={id} id={id} className={`gameboard-cell ${gameboardPlayer[id] === hitGameboardValue ? " hit" : gameboardPlayer[id] === missGameboardValue ? " miss" : ""}`} onClick={isPlayerTurn ? (gameboardPlayer[id] !== hitGameboardValue && gameboardPlayer[id] !== missGameboardValue) ? handleMovePlayer : null : null}></div>
        ))}
      </div>
      <div className="gameboard gameboard-computer" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardComputer.map((cell, id) => (
            <div key={id} id={id} className={`gameboard-cell ${gameboardComputer[id] === hitGameboardValue ? " hit" : gameboardComputer[id] === missGameboardValue ? " miss" : ""}`}></div>
        ))}
      </div>
  </div>
  )
}


