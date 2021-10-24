import { useEffect, useState } from 'react';
// import { createGameboard } from './createGameboard/createGameboard';
import { getRandomIndexFromArray } from './getRandomIndexFromArray/getRandomIndexFromArray';
import { deleteArrayIndexValue } from './deleteArrayIndexValue/deleteArrayIndexValue';
import { isHiddenShipGameboardCell } from './isHiddenShipGameboardCell/isHiddenShipGameboardCell';
import { isEmptyGameboardCell } from './isEmptyGameboardCell/isEmptyGameboardCell';
import { addFreeMissGameboardValueCellsAroundSunkenShip } from './addFreeMissGameboardValueCellsAroundSunkenShip/addFreeMissGameboardValueCellsAroundSunkenShip';
import { isSunkenShip } from './isSunkenShip/isSunkenShip';
// import { isShipNameSunken } from './isShipNameSunken/isShipNameSunken';
import './Game.scss';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  const emptyGameboardValue = "empty";
  const hitGameboardValue = "hit";
  const missGameboardValue = "miss";
  const freemissGameboardValue = "freemiss";
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameboardPlayerHitShots, setGameboardPlayerHitShots] = useState([]);

  // const [d1, setD1] = useState([0]);
  // const [d2, setD2] = useState([2]);
  // const [d3, setD3] = useState([4]);
  // const [d4, setD4] = useState([6]);

  // const [s1, setS1] = useState([20, 21]);
  // const [s2, setS2] = useState([23, 24]);
  // const [s3, setS3] = useState([26, 27]);
  
  // const [b1, setB1] = useState([40, 50, 60]);
  // const [b2, setB2] = useState([42, 52, 62]);

  // const [c1, setC1] = useState([80, 81, 82, 83]);

  const [shipCoords, setShipCoords] = useState({
    d1: [0],
    d2: [2],
    d3: [4],
    d4: [6],
    s1: [20, 21],
    s2: [23, 24],
    s3: [26, 27],
    b1: [40, 50, 60],
    b2: [42, 52, 62],
    c1: [80, 81, 82, 83],
  })

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
  const updateGameboardCellHitOrMiss = (gameboard, index, setGameboard, setGameboardHitShots, gameboardHitShots, shipCoords) => {
    if (isHiddenShipGameboardCell(gameboard, index, emptyGameboardValue, hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
      let newState = [...gameboard];
      console.log(newState);

      // function that takes as input newState[index] value and depending on that use setState to at cell to 

      let copyGameboardHitShots = [...gameboardHitShots];
      console.log(copyGameboardHitShots);

      copyGameboardHitShots.push(index);
      console.log(copyGameboardHitShots);

      // add index to gameboardPlayerHitShots
      setGameboardHitShots(copyGameboardHitShots);
      // updating doesnt work????
      
      // check if some ships coords are all in gameboardPlayerHitShots and if so 
      const shipName = newState[index];
      newState[index] = hitGameboardValue;



      // if shipname is b2(example)  check if isSunkenShip 

      // let isSunkenShipName = isShipNameSunken()

      // const isASunkenShip = (shipName, gameboardHitShots, shipCoords) => {
      //   let shipCoordsCells = shipCoords[shipName];
      //   return (isSunkenShip(gameboardHitShots, shipCoordsCells));
      // }

      const isShipNameSunken = isSunkenShip(copyGameboardHitShots, shipCoords, shipName);
      console.log(isShipNameSunken);


      // let newStateWithFreeMissCells = newState;
      let newStateWithFreeMissCells;



      if (isShipNameSunken) {
        const shipCoordsShipName = shipCoords[shipName];
        newStateWithFreeMissCells = addFreeMissGameboardValueCellsAroundSunkenShip(newState, shipCoordsShipName, freemissGameboardValue, emptyGameboardValue)
      }


      // else { return diagonalFreeMissCells function for coord}

      
      // if not sunken then add diagonal free miss cells
      // { if sunken add free miss to all the coordinates of b2}



      // add free miss to all surrounding spots where there isnt a "hit"
      // else add only diagonal freemiss shots to the gameboard[index] value


      // newState[index] = hitGameboardValue;
      

      // let newStateWithFreeMissCells = addFreeMissGameboardValueCellsAfterHitSingleCellShip(newState, +index, freemissGameboardValue, emptyGameboardValue);

      setGameboard(newStateWithFreeMissCells);
      // setGameboard(newState);
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
    updateGameboardCellHitOrMiss(gameboardPlayer, +event.target.id, setGameboardPlayer, setGameboardPlayerHitShots, gameboardPlayerHitShots, shipCoords);
    // setIsPlayerTurn(false);
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
            <div key={id} id={id} className={`gameboard-cell ${gameboardPlayer[id] === hitGameboardValue ? " hit" : gameboardPlayer[id] === missGameboardValue ? " miss" : gameboardPlayer[id] === freemissGameboardValue ? " freemiss" : ""}`} onClick={isPlayerTurn ? (gameboardPlayer[id] !== hitGameboardValue && gameboardPlayer[id] !== missGameboardValue) ? handleMovePlayer : null : null}></div>
        ))}
      </div>
      <div className="gameboard gameboard-computer" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
        {gameboardComputer.map((cell, id) => (
            <div key={id} id={id} className={`gameboard-cell ${gameboardComputer[id] === hitGameboardValue ? " hit" : gameboardComputer[id] === missGameboardValue ? " miss" : gameboardComputer[id] === freemissGameboardValue ? " freemiss" : ""}`}></div>
        ))}
      </div>
  </div>
  )
}


