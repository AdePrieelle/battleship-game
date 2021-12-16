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
import { getAvailableRandomGameboardComputerCellNumber } from './getAvailableRandomGameboardComputerCellNumber/getAvailableRandomGameboardComputerCellNumber';
import { getGameboardAfterHitLogic } from './getGameboardAfterHitLogic/getGameboardAfterHitLogic';
import { getGameboardAfterMissLogic } from './getGameboardAfterMissLogic/getGameboardAfterMissLogic';
import { createRandomGameboard } from './createRandomGameboard/createRandomGameboard';
import { generateRandomValidShipPosition } from './generateRandomValidShipPosition/generateRandomValidShipPosition';
import { ships } from './ships';
import { isAllShipsSunken } from './isAllShipsSunken/isAllShipsSunken';
import { GameboardPlayerGrid } from './GameboardPlayerGrid';
import { GameboardComputerGrid } from './GameboardComputerGrid';
import { isValidPlayerTurn } from './isValidPlayerTurn/isValidPlayerTurn';
// import { CreateNewRandomGameboardButton } from './CreateNewRandomGameboardButton/CreateNewRandomGameboardButton';
// import { StartGameButton } from './StartGameButton/StartGameButton';
// import { NewGameButton } from './NewGameButton/NewGameButton';
import { isValidComputerTurn } from './isValidComputerTurn/isValidComputerTurn';
import { GameboardShipStats } from './GameboardShipStats/GameboardShipStats';
import { getPreviousHitDirectionNotSunkenShip } from './getPreviousHitDirectionNotSunkenShip/getPreviousHitDirectionNotSunkenShip';
import { isSunkenShipAfterHit } from './isSunkenShipAfterHit/isSunkenShipAfterHit';
import { getAvailableNextSmartComputerMovesAfterHit } from './getAvailableNextSmartComputerMovesAfterHit/getAvailableNextSmartComputerMovesAfterHit';
import { isShipOrEmptyGameboardValue } from './isShipOrEmptyGameboardValue/isShipOrEmptyGameboardValue';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { ModalButtonsWrapper } from './ModalButtonsWrapper/ModalButtonsWrapper';
import { ModalMessage } from './ModalMessage/ModalMessage';
import { GameboardPlayerGridShipPlacement } from './GameboardPlayerGridShipPlacement';
// import { NextButton } from './NextButton/NextButton';
import './Game.scss';
import { createGameboard } from './createGameboard/createGameboard';
import { sortArrayOfObjectsBasedOnAPropertyValue } from './sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue';
import { isValidShipPosition } from './isValidShipPosition/isValidShipPosition';
import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from './checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds';
import { getFirstDigitOfNumber } from './getFirstDigitOfNumber/getFirstDigitOfNumber';
import { checkIfShipIsNotSurroundedByAnotherShip } from './checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip';
import { calculateShipCoords } from './calculateShipCoords/calculateShipCoords';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  const emptyGameboardValue = "empty";
  const hitGameboardValue = "hit";
  const missGameboardValue = "miss";
  const freemissGameboardValue = "freemiss";
  const horizontalDirectionValue = "horizontal";
  const verticalDirectionValue = "vertical";
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [computerHitTurnAgainCount, setComputerHitTurnAgainCount] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerOneWonGame, setPlayerOneWonGame] = useState(false);
  const [playerTwoWonGame, setPlayerTwoWonGame] = useState(false);
  const [computerWonGame, setComputerWonGame] = useState(false);
  const [isPlayerTwoComputer, setIsPlayerTwoComputer] = useState(true);

  // const [gameboardPlayerOneInitialState, setGameboardPlayerOneInitialState] = useState([
  //   "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
  //   "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  //   "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
  //   "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  //   "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  //   "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  //   "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  //   "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  //   "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
  //   "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  // ]);

  const [gameboardPlayerOneInitialState, setGameboardPlayerOneInitialState] = useState([
    "hit", "miss", "hit", "miss", "hit", "miss", "hit", "miss", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "c1", "c1", "c1", "c1", "miss", "miss", "hit", "hit", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "hit", "hit", "miss", "hit", "hit", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  ]);

  // const [gameboardPlayerInitialState, setGameboardPlayerInitialState] = useState([
  //   "hit", "miss", "hit", "miss", "hit", "miss", "d4", "miss", "miss", "empty",
  //   "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
  //   "s1", "s1", "miss", "hit", "hit", "miss", "hit", "hit", "miss", "empty",
  //   "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
  //   "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
  //   "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
  //   "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  //   "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  //   "hit", "hit", "hit", "hit", "miss", "miss", "miss", "miss", "miss", "miss",
  //   "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  // ]);

  const [gameboardPlayerTwoInitialState, setGameboardPlayerTwoInitialState] = useState([
    "hit", "miss", "hit", "miss", "hit", "miss", "hit", "miss", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "c1", "c1", "c1", "c1", "miss", "miss", "hit", "hit", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "hit", "hit", "miss", "hit", "hit", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  ]);
  
  // const [gameboardPlayerOneInitialState, setGameboardPlayerOneInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard));
  const [gameboardPlayerOne, setGameboardPlayerOne] = useState([]);

  // const [gameboardPlayerTwoInitialState, setGameboardPlayerTwoInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard));
  const [gameboardPlayerTwo, setGameboardPlayerTwo] = useState([]);

  useEffect(() => {
    setGameboardPlayerOne(gameboardPlayerOneInitialState);
  }, [gameboardPlayerOneInitialState]);

  useEffect(() => {
    setGameboardPlayerTwo(gameboardPlayerTwoInitialState);
  }, [gameboardPlayerTwoInitialState]);

  useEffect(() => {
    if (isValidComputerTurn(isPlayerTwoComputer, isPlayerOneTurn, isGameStarted, isGameOver)) {
      if (!computerHitTurnAgainCount) {
        const computerTurnTimeout = setTimeout(() => {
          handleComputerMove();
        }, 500);
        return () => clearTimeout(computerTurnTimeout);
      }
      // if the computer hits a ship increase the "virtual thinking time" for the next step
      if (computerHitTurnAgainCount) {
        const computerTurnTimeout = setTimeout(() => {
          handleComputerMove();
        }, 1000);
        return () => clearTimeout(computerTurnTimeout);
      }
    }
  }, [isPlayerTwoComputer, isPlayerOneTurn, isGameStarted, isGameOver, gameboardPlayerOne, computerHitTurnAgainCount]);

  

  const previousHitComputerCellsNotSunkenShipDefaultValue = [];
  const previousHitDirectionNotSunkenShipHorizontalValue = "horizontal";
  const previousHitDirectionNotSunkenShipVerticalValue = "vertical";
  const [previousHitComputerCellsNotSunkenShip, setPreviousHitComputerCellsNotSunkenShip] = useState(previousHitComputerCellsNotSunkenShipDefaultValue);
  const [previousHitDirectionNotSunkenShip, setPreviousHitDirectionNotSunkenShip] = useState(null);

  useEffect(() => {
    if (previousHitComputerCellsNotSunkenShip.length === 2 && !previousHitDirectionNotSunkenShip) {
      const previousHitDirectionNotSunkenShipValue = getPreviousHitDirectionNotSunkenShip(
        previousHitDirectionNotSunkenShipVerticalValue, 
        previousHitDirectionNotSunkenShipHorizontalValue,
        previousHitComputerCellsNotSunkenShip,
      );
      setPreviousHitDirectionNotSunkenShip(previousHitDirectionNotSunkenShipValue);
    }
  }, [previousHitComputerCellsNotSunkenShip, previousHitDirectionNotSunkenShip]);

  // update the gameboard with a hit or miss or freemiss value
  const updateGameboardCellHitOrMiss = (gameboard, index, setGameboard, gameboardInitialState, isComputer, isPlayerOne) => {
    if (isHiddenShipGameboardCell(gameboard, index, emptyGameboardValue, hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
      const newGameboardStateAfterHitLogicWithFreeMissCells = getGameboardAfterHitLogic(
        gameboard, 
        index, 
        hitGameboardValue, 
        isSunkenShip,
        getAllIndexesOfAnArrayValue, 
        gameboardInitialState,
        addFreeMissGameboardValueCellsAroundSunkenShip, 
        freemissGameboardValue, 
        emptyGameboardValue,
        addFreeMissGameboardValueCellsAroundCellDiagonally
      )
      if (isComputer) {
        if (isSunkenShipAfterHit(gameboard, index, hitGameboardValue, isSunkenShip)) {
          // currently "hit" ship is sunken
          setPreviousHitComputerCellsNotSunkenShip(previousHitComputerCellsNotSunkenShipDefaultValue);
          setPreviousHitDirectionNotSunkenShip(null);
        } else {
          // currently "hit" ship isn't sunken
          let copyPreviousHitComputerCellNumbersInfo = [...previousHitComputerCellsNotSunkenShip];
          copyPreviousHitComputerCellNumbersInfo.push(+index);
          setPreviousHitComputerCellsNotSunkenShip(copyPreviousHitComputerCellNumbersInfo);
        }
        setComputerHitTurnAgainCount(computerHitTurnAgainCount + 1);
      }
      // updated gameboard
      setGameboard(newGameboardStateAfterHitLogicWithFreeMissCells);
      // logic for isGameOver
      const allShipsSunken = isAllShipsSunken(newGameboardStateAfterHitLogicWithFreeMissCells, ships);
      if (allShipsSunken) {
        handleIsGameOver(isComputer);
      }
    } else if (isEmptyGameboardCell(gameboard, index, emptyGameboardValue)) {
      const newGameboardStateAfterMissLogicWithMissCell = getGameboardAfterMissLogic(gameboard, index, missGameboardValue);
      setGameboard(newGameboardStateAfterMissLogicWithMissCell);
      // setIsPlayerOneTurn(!isPlayerOneTurn);
      if (isComputer) {
        setComputerHitTurnAgainCount(0);
      }
      // if (isPlayerOne && !isComputer && !isPlayerTwoComputer) {
      //   setShowModalGameSwitchTurnToPlayerTwo(true);
      // }
      // if (!isPlayerOne && !isComputer && !isPlayerTwoComputer) {
      //   setShowModalGameSwitchTurnToPlayerOne(true);
      // }
      if (isPlayerTwoComputer) {
        setIsPlayerOneTurn(!isPlayerOneTurn);
      }
      if (!isComputer && !isPlayerTwoComputer) {
        setDisablePlayerMove(true);
        setDisableButtonGameSwitchPlayerTurn(false);
      }
    }
  }

  const handlePlayerMove = (event, gameboardPlayer, isPlayerOneTurn, setGameboardPlayer, gameboardPlayerInitialState, isPlayerOne) => {
    if (isValidPlayerTurn(
      gameboardPlayer, 
      +event.target.id,
      isPlayerOneTurn, 
      hitGameboardValue, 
      missGameboardValue, 
      freemissGameboardValue,
      isGameStarted,
      isGameOver
    )) {
      updateGameboardCellHitOrMiss(gameboardPlayer, +event.target.id, setGameboardPlayer, gameboardPlayerInitialState, false, isPlayerOne);
    }
  }
  
  const handleComputerMove = () => {
    if (previousHitComputerCellsNotSunkenShip.length === 0) {
      // array of indexes of computercells that are either "empty" or a hidden ship
      const gameboardComputerCellsAvailable = getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips(gameboardPlayerOne, hitGameboardValue, missGameboardValue, freemissGameboardValue);
      const randomGameboardComputerCellNumber = getAvailableRandomGameboardComputerCellNumber(
        getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips,
        gameboardPlayerOne,
        hitGameboardValue,
        missGameboardValue,
        freemissGameboardValue,
        getRandomIndexFromArray,
        );
      if (gameboardComputerCellsAvailable.length > 0) {
        // update the gameboardComputer state with a "hit" or "miss" value depending if the randomly picked index randomGameboardComputerCellNumber is a ship or not
        updateGameboardCellHitOrMiss(gameboardPlayerOne, randomGameboardComputerCellNumber, setGameboardPlayerOne, gameboardPlayerOneInitialState, true, false);
      }
    } else if (previousHitComputerCellsNotSunkenShip.length > 0) {
      // array of indexes for next possible smart computer move if a ship has been hit but isn't sunken yet
      const availableNextSmartComputerMovesAfterHit = getAvailableNextSmartComputerMovesAfterHit(
        gameboardPlayerOne,
        previousHitComputerCellsNotSunkenShip,
        previousHitDirectionNotSunkenShip,
        hitGameboardValue,
        missGameboardValue,
        freemissGameboardValue,
        previousHitDirectionNotSunkenShipHorizontalValue,
        previousHitDirectionNotSunkenShipVerticalValue,
        isShipOrEmptyGameboardValue
      );
      const availableNextSmartComputerMovesAfterHitRandomIndex = getRandomIndexFromArray(availableNextSmartComputerMovesAfterHit);
      const smartComputerMoveIndex = availableNextSmartComputerMovesAfterHit[availableNextSmartComputerMovesAfterHitRandomIndex];
      updateGameboardCellHitOrMiss(gameboardPlayerOne, smartComputerMoveIndex, setGameboardPlayerOne, gameboardPlayerOneInitialState, true, false);
    }
  }


  const resetRandomGameboards = () => {
    setGameboardPlayerOneInitialState([...gameboardPlayerOneInitialState]);
    setGameboardPlayerTwoInitialState([...gameboardPlayerTwoInitialState]);
    // setGameboardPlayerOneInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard));
    // setGameboardPlayerTwoInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard));
  }
  
  const handleIsGameOver = (isComputer) => {
    setIsGameStarted(false);
    setIsGameOver(true);
    if (isComputer) {
      setComputerHitTurnAgainCount(0);
      setComputerWonGame(true);
    } else if (!isComputer) {
      if (isPlayerOneTurn) {
        setPlayerOneWonGame(true);
      } else if (!isPlayerOneTurn) {
        setPlayerTwoWonGame(true);
      }
    }
    setShowModalGameOver(true);
  };
  
  const handleStartGame = () => {
    setIsGameOver(false);
    setIsPlayerOneTurn(true);
    setComputerHitTurnAgainCount(0);
    setGameboardPreGameActive(false);
    setIsGameStarted(true);
  }
  
  const handleNewGame = () => {
    setIsGameOver(false);
    setIsGameStarted(false);
    setComputerWonGame(false);
    setPlayerOneWonGame(false);
    setPlayerTwoWonGame(false);
    setPreviousHitComputerCellsNotSunkenShip(previousHitComputerCellsNotSunkenShipDefaultValue);
    setPreviousHitDirectionNotSunkenShip(null);
    resetRandomGameboards();
    setGameboardPreGameActive(true);
  }
  
  // prevent faded low opacity gameboard-inactive in pre game
  const [gameboardPreGameActive, setGameboardPreGameActive] = useState(false);

  // names for players and computer
  const [playerOneName, setPlayerOneName] = useState("Player 1");
  const [playerTwoName, setPlayerTwoName] = useState("Player 2");
  const [computerName, setComputerName] = useState("Computer");

  // game over modal logic
  const [showModalGameOver, setShowModalGameOver] = useState(false);

  // new game modal logic
  const [showModalPickOpponent, setShowModalPickOpponent] = useState(false);

  // pre game logic for opponent is computer
  const [showModalPreGamePlayerOneNameAgainstComputer, setShowModalPreGamePlayerOneNameAgainstComputer] = useState(false);
  const [showModalPreGamePlayerOneGameboardAgainstComputer, setShowModalPreGamePlayerOneGameboardAgainstComputer] = useState(false);
  
  // pre game logic for opponent is a player
  const [showModalPreGamePlayerOneName, setShowModalPreGamePlayerOneName] = useState(false);
  const [showModalPreGamePlayerTwoName, setShowModalPreGamePlayerTwoName] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerOneGameboard, setShowModalPreGameSwitchTurnToPlayerOneGameboard] = useState(false);
  const [showModalPreGamePlayerOneGameboard, setShowModalPreGamePlayerOneGameboard] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerTwoGameboard, setShowModalPreGameSwitchTurnToPlayerTwoGameboard] = useState(false);
  const [showModalPreGamePlayerTwoGameboard, setShowModalPreGamePlayerTwoGameboard] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerOne, setShowModalPreGameSwitchTurnToPlayerOne] = useState(false);

  // game logic for opponent is a player
  const [showModalGameSwitchTurnToPlayerTwo, setShowModalGameSwitchTurnToPlayerTwo] = useState(false);
  const [showModalGameSwitchTurnToPlayerOne, setShowModalGameSwitchTurnToPlayerOne] = useState(false);

  // disable player moves once missed before handing over to other player
  const [disablePlayerMove, setDisablePlayerMove] = useState(false);

  // show button for players to hand over
  const [disableButtonGameSwitchPlayerTurn, setDisableButtonGameSwitchPlayerTurn] = useState(true);

  // new game modal logic
  const handleButtonNewGame = () => {
    // handleNewGame();
    setShowModalGameOver(false);
    setShowModalPickOpponent(true);
  }

  // Pre game opponent is a computer logic
  const handleModalPickOpponentComputer = () => {
    setShowModalPickOpponent(false);
    handleNewGame();
    setIsPlayerTwoComputer(true);
    setShowModalPreGamePlayerOneNameAgainstComputer(true);
  }

  const handleModalPreGamePlayerOneNameAgainstComputer = () => {
    setShowModalPreGamePlayerOneNameAgainstComputer(false);
    setShowModalPreGamePlayerOneGameboardAgainstComputer(true);
  }

  const handleModalPreGamePlayerOneGameboardAgainstComputer = () => {
    setShowModalPreGamePlayerOneGameboardAgainstComputer(false);
    handleStartGame();
  }

  // Pre game opponent is a player logic
  const handleModalPickOpponentPlayer = () => {
    setShowModalPickOpponent(false);
    handleNewGame();
    setIsPlayerTwoComputer(false);
    setShowModalPreGamePlayerOneName(true);
  }

  const handleModalPreGamePlayerOneName = () => {
    setShowModalPreGamePlayerOneName(false);
    setShowModalPreGamePlayerTwoName(true);
  }

  const handleModalPreGamePlayerTwoName = () => {
    setShowModalPreGamePlayerTwoName(false);
    setShowModalPreGameSwitchTurnToPlayerOneGameboard(true);
  }

  const handleModalPreGameSwitchToPlayerOneGameboard = () => {
    setShowModalPreGameSwitchTurnToPlayerOneGameboard(false);
    setShowModalPreGamePlayerOneGameboard(true);
  }

  const handleModalPreGamePlayerOneGameboard = () => {
    setShowModalPreGamePlayerOneGameboard(false);
    setShowModalPreGameSwitchTurnToPlayerTwoGameboard(true);
  }

  const handleModalPreGameSwitchTurnToPlayerTwo = () => {
    setShowModalPreGameSwitchTurnToPlayerTwoGameboard(false);
    setShowModalPreGamePlayerTwoGameboard(true);
  }

  const handleModalPreGamePlayerTwoGameboard = () => {
    setShowModalPreGamePlayerTwoGameboard(false);
    setShowModalPreGameSwitchTurnToPlayerOne(true);
  }

  const handleModalPreGameSwitchTurnToPlayerOne = () => {
    setShowModalPreGameSwitchTurnToPlayerOne(false);
    handleStartGame();
  }


  // modal game switch turns for opponent is a player
  const handleModalGameSwitchTurnToPlayerTwo = () => {
    setShowModalGameSwitchTurnToPlayerTwo(false);
  }

  const handleModalGameSwitchTurnToPlayerOne = () => {
    setShowModalGameSwitchTurnToPlayerOne(false);
  }

  // handle button to hand over turns
  const handleButtonGameSwitchPlayerTurn = () => {
    setDisablePlayerMove(false);
    setDisableButtonGameSwitchPlayerTurn(true);
    if (isPlayerOneTurn) {
      setShowModalGameSwitchTurnToPlayerTwo(true);
    } else if (!isPlayerOneTurn) {
      setShowModalGameSwitchTurnToPlayerOne(true);
    }
    setIsPlayerOneTurn(!isPlayerOneTurn);
  }


  return (
          <GameboardPlayerGridShipPlacement
            gameboardPlayer={gameboardPlayerOne}
            amountOfColumns={amountOfColumns}
            amountOfRows={amountOfRows}
            hitGameboardValue={hitGameboardValue}
            missGameboardValue={missGameboardValue}
            freemissGameboardValue={freemissGameboardValue}
            emptyGameboardValue={emptyGameboardValue}
            handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState, false)}
            isPlayerTurn={!isPlayerOneTurn}
            isPlayerOne={false}
            isPlayerTwoComputer={isPlayerTwoComputer}
            isGameStarted={isGameStarted}
            isGameOver={isGameOver}
            gameboardPreGameActive={gameboardPreGameActive}
            disablePlayerMove={disablePlayerMove}
            ships={ships}
            createGameboard={createGameboard}
            gameboardPlayerInitialState={gameboardPlayerOneInitialState}
            setGameboardPlayerInitialState={setGameboardPlayerOneInitialState}
            sortArrayOfObjectsBasedOnAPropertyValue={sortArrayOfObjectsBasedOnAPropertyValue}
            isValidShipPosition={isValidShipPosition}
            isEmptyGameboardCell={isEmptyGameboardCell}
            checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds={checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds}
            horizontalDirectionValue={horizontalDirectionValue}
            verticalDirectionValue={verticalDirectionValue}
            getFirstDigitOfNumber={getFirstDigitOfNumber}
            checkIfShipIsNotSurroundedByAnotherShip={checkIfShipIsNotSurroundedByAnotherShip}
            calculateShipCoords={calculateShipCoords}
          />
    // <div className="game">
    //   {
    //       (
    //            !showModalPreGamePlayerOneNameAgainstComputer
    //         && !showModalPreGamePlayerOneGameboardAgainstComputer
    //         && !showModalPreGamePlayerOneName
    //         && !showModalPreGamePlayerTwoName
    //         && !showModalPreGameSwitchTurnToPlayerOneGameboard
    //         && !showModalPreGamePlayerOneGameboard
    //         && !showModalPreGamePlayerOneGameboard
    //         && !showModalPreGameSwitchTurnToPlayerTwoGameboard 
    //         && !showModalPreGamePlayerTwoGameboard
    //         && !showModalPreGameSwitchTurnToPlayerOne 
    //         && !showModalGameSwitchTurnToPlayerTwo 
    //         && !showModalGameSwitchTurnToPlayerOne
    //       )
    //     ? 
    //       <>
    //         <div className="gameboard-wrapper">
    //           {
    //               (!isPlayerOneTurn && !isPlayerTwoComputer)
    //             ? 
    //               <>
    //                 <GameboardPlayerGrid 
    //                   gameboardPlayer={gameboardPlayerOne}
    //                   amountOfColumns={amountOfColumns}
    //                   amountOfRows={amountOfRows}
    //                   hitGameboardValue={hitGameboardValue}
    //                   missGameboardValue={missGameboardValue}
    //                   freemissGameboardValue={freemissGameboardValue}
    //                   emptyGameboardValue={emptyGameboardValue}
    //                   handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState, false)}
    //                   isPlayerTurn={!isPlayerOneTurn}
    //                   isPlayerOne={false}
    //                   isPlayerTwoComputer={isPlayerTwoComputer}
    //                   isGameStarted={isGameStarted}
    //                   isGameOver={isGameOver}
    //                   gameboardPreGameActive={gameboardPreGameActive}
    //                   disablePlayerMove={disablePlayerMove}
    //                 />
    //                 <GameboardPlayerGrid 
    //                   gameboardPlayer={gameboardPlayerTwo}
    //                   amountOfColumns={amountOfColumns}
    //                   amountOfRows={amountOfRows}
    //                   hitGameboardValue={hitGameboardValue}
    //                   missGameboardValue={missGameboardValue}
    //                   freemissGameboardValue={freemissGameboardValue}
    //                   emptyGameboardValue={emptyGameboardValue}
    //                   handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, isPlayerOneTurn, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, true)}
    //                   isPlayerTurn={isPlayerOneTurn}
    //                   isPlayerOne={true}
    //                   isPlayerTwoComputer={isPlayerTwoComputer}
    //                   isGameStarted={isGameStarted}
    //                   isGameOver={isGameOver}
    //                   gameboardPreGameActive={gameboardPreGameActive}
    //                   disablePlayerMove={disablePlayerMove}
    //                 />
    //               </>
    //           :
    //             <>
    //               <GameboardPlayerGrid 
    //                 gameboardPlayer={gameboardPlayerTwo}
    //                 amountOfColumns={amountOfColumns}
    //                 amountOfRows={amountOfRows}
    //                 hitGameboardValue={hitGameboardValue}
    //                 missGameboardValue={missGameboardValue}
    //                 freemissGameboardValue={freemissGameboardValue}
    //                 emptyGameboardValue={emptyGameboardValue}
    //                 handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, isPlayerOneTurn, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, true)}
    //                 isPlayerTurn={isPlayerOneTurn}
    //                 isPlayerOne={true}
    //                 isPlayerTwoComputer={isPlayerTwoComputer}
    //                 isGameStarted={isGameStarted}
    //                 isGameOver={isGameOver}
    //                 gameboardPreGameActive={gameboardPreGameActive}
    //                 disablePlayerMove={disablePlayerMove}
    //               />
    //               <GameboardPlayerGrid 
    //                 gameboardPlayer={gameboardPlayerOne}
    //                 amountOfColumns={amountOfColumns}
    //                 amountOfRows={amountOfRows}
    //                 hitGameboardValue={hitGameboardValue}
    //                 missGameboardValue={missGameboardValue}
    //                 freemissGameboardValue={freemissGameboardValue}
    //                 emptyGameboardValue={emptyGameboardValue}
    //                 handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState, false)}
    //                 isPlayerTurn={!isPlayerOneTurn}
    //                 isPlayerOne={false}
    //                 isPlayerTwoComputer={isPlayerTwoComputer}
    //                 isGameStarted={isGameStarted}
    //                 isGameOver={isGameOver}
    //                 gameboardPreGameActive={gameboardPreGameActive}
    //                 disablePlayerMove={disablePlayerMove}
    //               />
    //             </>
    //           }
    //         </div>
    //         <Button buttonOnClick={handleButtonNewGame}>New game</Button>
    //         {
    //             isPlayerTwoComputer
    //           ? null
    //           : 
    //             <Button 
    //               buttonOnClick={handleButtonGameSwitchPlayerTurn} 
    //               disableButtonGameSwitchPlayerTurn={disableButtonGameSwitchPlayerTurn}
    //             >
    //               Hand over
    //             </Button>
    //         }
    //         <GameboardShipStats 
    //           gameboard={gameboardPlayerTwo}
    //           ships={ships}
    //         />
    //         <GameboardShipStats 
    //           gameboard={gameboardPlayerOne}
    //           ships={ships}
    //         />
    //       </>
    //     : null 
    //   }
      
    //   {/* showModalGameOver */}
    //   {
    //       showModalGameOver
    //     ? <Modal 
    //         setShowModal={setShowModalGameOver}
    //       >
    //         <ModalMessage 
    //           modalMessage={`${playerOneWonGame ? playerOneName : playerTwoWonGame ? playerTwoName : computerWonGame ? computerName : "Noone"} won!`}
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleButtonNewGame}>Play again</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    //   {/* showModalPickOpponent */}
    //   {
    //       showModalPickOpponent
    //     ? <Modal 
    //         setShowModal={setShowModalPickOpponent}
    //       >
    //         <ModalMessage 
    //           modalMessage={"Pick your opponent"}
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalPickOpponentComputer}>Computer</Button>
    //           <Button buttonOnClick={handleModalPickOpponentPlayer}>Player</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    //   {
    //       showModalPreGamePlayerOneNameAgainstComputer
    //     ? 
    //       <Modal 
    //         setShowModal={setShowModalPreGamePlayerOneNameAgainstComputer}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={
    //             <>
    //               <h1>{`Enter Player 1's name`}</h1>
    //               <input 
    //                 type="text" 
    //                 className="input-name"
    //                 value={playerOneName}
    //                 onChange={(e) => setPlayerOneName(e.target.value)}
    //               />
    //             </>
    //           }
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalPreGamePlayerOneNameAgainstComputer}>Next</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    //   {
    //       showModalPreGamePlayerOneGameboardAgainstComputer
    //     ? 
    //       <>
    //         <h1>{`${playerOneName}'s ship placements`}</h1>
    //         <div className="gameboard-wrapper">
    //           <GameboardPlayerGrid 
    //             gameboardPlayer={gameboardPlayerOne}
    //             amountOfColumns={amountOfColumns}
    //             amountOfRows={amountOfRows}
    //             hitGameboardValue={hitGameboardValue}
    //             missGameboardValue={missGameboardValue}
    //             freemissGameboardValue={freemissGameboardValue}
    //             emptyGameboardValue={emptyGameboardValue}
    //             handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState, false)}
    //             isPlayerTurn={!isPlayerOneTurn}
    //             isPlayerOne={false}
    //             isPlayerTwoComputer={isPlayerTwoComputer}
    //             isGameStarted={isGameStarted}
    //             isGameOver={isGameOver}
    //             gameboardPreGameActive={gameboardPreGameActive}
    //             disablePlayerMove={disablePlayerMove}
    //           />
    //           {/* <GameboardPlayerGridShipPlacement
    //             gameboardPlayer={gameboardPlayerOne}
    //             amountOfColumns={amountOfColumns}
    //             amountOfRows={amountOfRows}
    //             hitGameboardValue={hitGameboardValue}
    //             missGameboardValue={missGameboardValue}
    //             freemissGameboardValue={freemissGameboardValue}
    //             emptyGameboardValue={emptyGameboardValue}
    //             handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState, false)}
    //             isPlayerTurn={!isPlayerOneTurn}
    //             isPlayerOne={false}
    //             isPlayerTwoComputer={isPlayerTwoComputer}
    //             isGameStarted={isGameStarted}
    //             isGameOver={isGameOver}
    //             gameboardPreGameActive={gameboardPreGameActive}
    //             disablePlayerMove={disablePlayerMove}
    //             ships={ships}
    //             createGameboard={createGameboard}
    //             gameboardPlayerInitialState={gameboardPlayerOneInitialState}
    //             setGameboardPlayerInitialState={setGameboardPlayerOneInitialState}
    //             sortArrayOfObjectsBasedOnAPropertyValue={sortArrayOfObjectsBasedOnAPropertyValue}
    //           /> */}
    //         </div>
    //         <Button buttonOnClick={() => setGameboardPlayerOneInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard))}>
    //           <div className="button-text-wrapper">
    //             <div>Randomise</div>
    //             <i className="fas fa-sync-alt randomise-icon"></i>
    //           </div>
    //         </Button>
    //         <Button buttonOnClick={handleModalPreGamePlayerOneGameboardAgainstComputer}>Start game</Button>
    //       </>
    //   : null
    //   }

    //   {
    //       showModalPreGamePlayerOneName
    //     ? 
    //       <Modal 
    //         setShowModal={setShowModalPreGamePlayerOneName}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={
    //             <>
    //               <h1>{`Enter Player 1's name`}</h1>
    //               <input 
    //                 type="text" 
    //                 className="input-name"
    //                 value={playerOneName}
    //                 onChange={(e) => setPlayerOneName(e.target.value)}
    //               />
    //             </>
    //           }
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalPreGamePlayerOneName}>Next</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    //   {
    //       showModalPreGamePlayerTwoName
    //     ? 
    //       <Modal 
    //         setShowModal={setShowModalPreGamePlayerTwoName}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={
    //             <>
    //               <h1>{`Enter Player 2's name`}</h1>
    //               <input 
    //                 type="text" 
    //                 className="input-name"
    //                 value={playerTwoName}
    //                 onChange={(e) => setPlayerTwoName(e.target.value)}
    //               />
    //             </>
    //           }
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalPreGamePlayerTwoName}>Next</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    //   {
    //       showModalPreGameSwitchTurnToPlayerOneGameboard
    //     ? 
    //       <Modal 
    //         setShowModal={setShowModalPreGameSwitchTurnToPlayerOneGameboard}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={`Hand over to ${playerOneName}`}
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalPreGameSwitchToPlayerOneGameboard}>Next</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null 
    //   }

    //   {
    //       showModalPreGamePlayerOneGameboard
    //     ? 
    //       <>
    //         <h1>{`${playerOneName}'s ship placements`}</h1>
    //         <div className="gameboard-wrapper">
    //           <GameboardPlayerGrid 
    //             gameboardPlayer={gameboardPlayerOne}
    //             amountOfColumns={amountOfColumns}
    //             amountOfRows={amountOfRows}
    //             hitGameboardValue={hitGameboardValue}
    //             missGameboardValue={missGameboardValue}
    //             freemissGameboardValue={freemissGameboardValue}
    //             emptyGameboardValue={emptyGameboardValue}
    //             handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState, false)}
    //             isPlayerTurn={!isPlayerOneTurn}
    //             isPlayerOne={false}
    //             isPlayerTwoComputer={isPlayerTwoComputer}
    //             isGameStarted={isGameStarted}
    //             isGameOver={isGameOver}
    //             gameboardPreGameActive={gameboardPreGameActive}
    //             disablePlayerMove={disablePlayerMove}
    //           />
    //         </div>
    //         <Button buttonOnClick={() => setGameboardPlayerOneInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard))}>
    //           <div className="button-text-wrapper">
    //             <div>Randomise</div>
    //             <i className="fas fa-sync-alt randomise-icon"></i>
    //           </div>
    //         </Button>
    //         <Button buttonOnClick={handleModalPreGamePlayerOneGameboard}>Next</Button>
    //       </>
    //     : null
    //   }
    //   {
    //       showModalPreGameSwitchTurnToPlayerTwoGameboard
    //     ? <Modal 
    //         setShowModal={setShowModalPreGameSwitchTurnToPlayerTwoGameboard}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={`Hand over to ${playerTwoName}`}
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalPreGameSwitchTurnToPlayerTwo}>Next</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }
    //   {
    //       showModalPreGamePlayerTwoGameboard
    //     ? 
    //       <>
    //         <h1>{`${playerTwoName}'s ship placements`}</h1>
    //         <div className="gameboard-wrapper">
    //           <GameboardPlayerGrid 
    //             gameboardPlayer={gameboardPlayerTwo}
    //             amountOfColumns={amountOfColumns}
    //             amountOfRows={amountOfRows}
    //             hitGameboardValue={hitGameboardValue}
    //             missGameboardValue={missGameboardValue}
    //             freemissGameboardValue={freemissGameboardValue}
    //             emptyGameboardValue={emptyGameboardValue}
    //             handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, isPlayerOneTurn, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, true)}
    //             isPlayerTurn={isPlayerOneTurn}
    //             isPlayerOne={true}
    //             isPlayerTwoComputer={isPlayerTwoComputer}
    //             isGameStarted={isGameStarted}
    //             isGameOver={isGameOver}
    //             gameboardPreGameActive={gameboardPreGameActive}
    //             disablePlayerMove={disablePlayerMove}
    //           />
    //         </div>
    //         <Button buttonOnClick={() => setGameboardPlayerTwoInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard))}>
    //           <div className="button-text-wrapper">
    //             <div>Randomise</div>
    //             <i className="fas fa-sync-alt randomise-icon"></i>
    //           </div>
    //         </Button>
    //         <Button buttonOnClick={handleModalPreGamePlayerTwoGameboard}>Next</Button>
    //       </>
    //     : null
    //   }
    //   {
    //       showModalPreGameSwitchTurnToPlayerOne
    //     ? <Modal 
    //         setShowModal={setShowModalPreGameSwitchTurnToPlayerOne}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={`Hand over to ${playerOneName}`}
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalPreGameSwitchTurnToPlayerOne}>Start game</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    //   {
    //       showModalGameSwitchTurnToPlayerTwo
    //     ? <Modal 
    //         setShowModal={setShowModalGameSwitchTurnToPlayerTwo}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={`Hand over to ${playerTwoName}`}
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalGameSwitchTurnToPlayerTwo}>Go</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    //   {
    //       showModalGameSwitchTurnToPlayerOne
    //     ? <Modal 
    //         setShowModal={setShowModalGameSwitchTurnToPlayerOne}
    //         HideCloseButton={true}
    //       >
    //         <ModalMessage 
    //           modalMessage={`Hand over to ${playerOneName}`}
    //         />
    //         <ModalButtonsWrapper>
    //           <Button buttonOnClick={handleModalGameSwitchTurnToPlayerOne}>Go</Button>
    //         </ModalButtonsWrapper>
    //       </Modal>
    //     : null
    //   }

    // </div>
  )
}
