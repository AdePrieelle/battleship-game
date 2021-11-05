import { useEffect, useState } from 'react';
// import { createGameboard } from './createGameboard/createGameboard';
import { getRandomIndexFromArray } from './getRandomIndexFromArray/getRandomIndexFromArray';
import { isHiddenShipGameboardCell } from './isHiddenShipGameboardCell/isHiddenShipGameboardCell';
import { isEmptyGameboardCell } from './isEmptyGameboardCell/isEmptyGameboardCell';
import { addFreeMissGameboardValueCellsAroundSunkenShip } from './addFreeMissGameboardValueCellsAroundSunkenShip/addFreeMissGameboardValueCellsAroundSunkenShip';
import { addFreeMissGameboardValueCellsAroundCellDiagonally } from './addFreeMissGameboardValueCellsAroundCellDiagonally/addFreeMissGameboardValueCellsAroundCellDiagonally';
import { getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips } from './getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips/getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips';
import { isSunkenShip } from './isSunkenShip/isSunkenShip';
import { getAllIndexesOfAnArrayValue } from './getAllIndexesOfAnArrayValue/getAllIndexesOfAnArrayValue';
import './Game.scss';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  const emptyGameboardValue = "empty";
  const hitGameboardValue = "hit";
  const missGameboardValue = "miss";
  const freemissGameboardValue = "freemiss";
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [computerHitTurnAgain, setComputerHitTurnAgain] = useState(false);

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

  const [gameboardPlayerInitialState, setGameboardPlayerInitialState] = useState([
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
  const [gameboardComputerInitialState, setGameboardComputerInitialState] = useState([
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

  useEffect(() => {
    if (!isPlayerTurn && !computerHitTurnAgain) {
      const computerTurnTimeout = setTimeout(() => {
        handleMoveComputer();
      }, 150);
      return () => clearTimeout(computerTurnTimeout);
    }
    // if the computer hits a ship increase the "virtual thinking time" for the next step
    if (!isPlayerTurn && computerHitTurnAgain) {
      const computerTurnTimeout = setTimeout(() => {
        handleMoveComputer();
      }, 750);
      return () => clearTimeout(computerTurnTimeout);
    }
  }, [isPlayerTurn, gameboardComputer, computerHitTurnAgain]);

  // update the gameboard with a hit or miss or freemiss value
  const updateGameboardCellHitOrMiss = (gameboard, index, setGameboard, gameboardInitialState, isComputer) => {
    if (isHiddenShipGameboardCell(gameboard, index, emptyGameboardValue, hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
      let newState = [...gameboard];
      const shipName = newState[index];
      newState[index] = hitGameboardValue;
      const isShipNameSunken = isSunkenShip(newState, shipName);
      let newStateWithFreeMissCells = newState;
      // add freemiss cell values around all the cells of a ship if they are empty and the ship is sunken
      if (isShipNameSunken) {
        const shipCoordsShipName = getAllIndexesOfAnArrayValue(gameboardInitialState, shipName);
        newStateWithFreeMissCells = addFreeMissGameboardValueCellsAroundSunkenShip(newState, shipCoordsShipName, freemissGameboardValue, emptyGameboardValue);
      } else {
        // add diagonally freemiss cell values around a single hit cell if the cell is empty
        newStateWithFreeMissCells = addFreeMissGameboardValueCellsAroundCellDiagonally(newState, index, freemissGameboardValue, emptyGameboardValue);
      }
      setGameboard(newStateWithFreeMissCells);
      if (isComputer) {
        setComputerHitTurnAgain(true);
      }
    } else if (isEmptyGameboardCell(gameboard, index, emptyGameboardValue)) {
      let newState = [...gameboard];
      newState[index] = missGameboardValue;
      setGameboard(newState);
      setIsPlayerTurn(!isPlayerTurn);
      if (isComputer) {
        setComputerHitTurnAgain(false);
      }
    }
  }

  const handleMovePlayer = (event) => {
    updateGameboardCellHitOrMiss(gameboardPlayer, +event.target.id, setGameboardPlayer, gameboardPlayerInitialState, false);
  }
  
  const handleMoveComputer = () => {
    // array of indexes of computercells that are either "empty" or a hidden ship
    const gameboardComputerCellsAvailable = getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips(gameboardComputer, hitGameboardValue, missGameboardValue, freemissGameboardValue);
    // pick a random index from the gameboardComputerCellsAvailable
    let randomIndexGameboardComputerCellsAvailable = getRandomIndexFromArray(gameboardComputerCellsAvailable);
    // random gameboardComputer cell value that gets picked with the random index
    let randomGameboardComputerCellNumber = gameboardComputerCellsAvailable[randomIndexGameboardComputerCellsAvailable];
    if (gameboardComputerCellsAvailable.length > 0) {
      // update the gameboardComputer state with a "hit" or "miss" value depending if the randomly picked index randomGameboardComputerCellNumber is a ship or not
      updateGameboardCellHitOrMiss(gameboardComputer, randomGameboardComputerCellNumber, setGameboardComputer, gameboardComputerInitialState, true);
    }
  }

  return (
    <div className="gameboard-wrapper">
      <div className="gameboard gameboard-player" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardPlayer.map((cell, id) => (
            <div 
              key={id} 
              id={id} 
              className={`gameboard-cell ${
                    gameboardPlayer[id] === hitGameboardValue 
                  ? " hit" 
                  : gameboardPlayer[id] === missGameboardValue 
                  ? " miss" 
                  : gameboardPlayer[id] === freemissGameboardValue 
                  ? " freemiss" 
                  : ""
                }`
              } 
              onClick={
                  isPlayerTurn 
                ? (gameboardPlayer[id] !== hitGameboardValue && gameboardPlayer[id] !== missGameboardValue && gameboardPlayer[id] !== freemissGameboardValue) 
                ? handleMovePlayer 
                : null 
                : null
              }>
            </div>
        ))}
      </div>
      <div className="gameboard gameboard-computer" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardComputer.map((cell, id) => (
            <div 
            key={id} 
            id={id} 
            className={`gameboard-cell ${
                  gameboardComputer[id] === hitGameboardValue 
                ? " hit" 
                : gameboardComputer[id] === missGameboardValue 
                ? " miss" 
                : gameboardComputer[id] === freemissGameboardValue 
                ? " freemiss" 
                : ""
              }`
            } 
            onClick={
                !isPlayerTurn 
              ? (gameboardComputer[id] !== hitGameboardValue && gameboardComputer[id] !== missGameboardValue && gameboardComputer[id] !== freemissGameboardValue) 
              ? handleMoveComputer
              : null 
              : null
            }>
          </div>
        ))}
      </div>
  </div>
  )
}
