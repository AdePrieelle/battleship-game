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
import { CreateNewRandomGameboardButton } from './CreateNewRandomGameboardButton/CreateNewRandomGameboardButton';
import { StartGameButton } from './StartGameButton/StartGameButton';
import { NewGameButton } from './NewGameButton/NewGameButton';
import { isValidComputerTurn } from './isValidComputerTurn/isValidComputerTurn';
import { GameOverModal } from './GameOverModal/GameOverModal';
import { GameboardShipStats } from './GameboardShipStats/GameboardShipStats';
import { getPreviousHitDirectionNotSunkenShip } from './getPreviousHitDirectionNotSunkenShip/getPreviousHitDirectionNotSunkenShip';
import { isSunkenShipAfterHit } from './isSunkenShipAfterHit/isSunkenShipAfterHit';
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
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerWonGame, setPlayerWonGame] = useState(false);
  const [computerWonGame, setComputerWonGame] = useState(false);
  const [showGameOverModal, setShowGameOverModal] = useState(false);

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

  const [gameboardComputerInitialState, setGameboardComputerInitialState] = useState([
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
  
  // const [gameboardPlayerInitialState, setGameboardPlayerInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
  const [gameboardPlayer, setGameboardPlayer] = useState([]);

  // const [gameboardComputerInitialState, setGameboardComputerInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
  const [gameboardComputer, setGameboardComputer] = useState([]);

  useEffect(() => {
    setGameboardPlayer(gameboardPlayerInitialState);
  }, [gameboardPlayerInitialState]);

  useEffect(() => {
    setGameboardComputer(gameboardComputerInitialState);
  }, [gameboardComputerInitialState]);

  useEffect(() => {
    if (isValidComputerTurn(isPlayerTurn, isGameStarted, isGameOver)) {
      if (!computerHitTurnAgain) {
        const computerTurnTimeout = setTimeout(() => {
          handleComputerMove();
        }, 500);
        return () => clearTimeout(computerTurnTimeout);
      }
      // if the computer hits a ship increase the "virtual thinking time" for the next step
      if (computerHitTurnAgain) {
        const computerTurnTimeout = setTimeout(() => {
          handleComputerMove();
        }, 1000);
        return () => clearTimeout(computerTurnTimeout);
      }
    }
  }, [isPlayerTurn, isGameStarted, isGameOver, gameboardComputer, computerHitTurnAgain]);


  const handleIsGameOver = (isComputer) => {
    setIsGameStarted(false);
    setIsGameOver(true);
    if (isComputer) {
      setComputerWonGame(true);
    } else if (!isComputer) {
      setPlayerWonGame(true);
    }
    setShowGameOverModal(true);
  };

  const handleStartGame = () => {
    setIsGameOver(false);
    setIsPlayerTurn(true);
    setComputerHitTurnAgain(false);
    setIsGameStarted(true);
  }

  const handleNewGame = () => {
    setIsGameOver(false);
    setIsGameStarted(false);
    setComputerWonGame(false);
    setPlayerWonGame(false);
    setPreviousHitComputerCellsNotSunkenShip(previousHitComputerCellsNotSunkenShipDefaultValue);
    setPreviousHitDirectionNotSunkenShip(null);
    // setGameboardPlayerInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
    setGameboardPlayerInitialState([...gameboardPlayerInitialState]);
    // setGameboardComputerInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
    setGameboardComputerInitialState([...gameboardComputerInitialState]);
  }

  const handleNewGameCloseGameOverModal = () => {
    setShowGameOverModal(false);
    handleNewGame();
  }

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

  // console.log(previousHitComputerCellsNotSunkenShip, previousHitDirectionNotSunkenShip);

  

  // update the gameboard with a hit or miss or freemiss value
  const updateGameboardCellHitOrMiss = (gameboard, index, setGameboard, gameboardInitialState, isComputer) => {
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
        setComputerHitTurnAgain(true);
      }

      setGameboard(newGameboardStateAfterHitLogicWithFreeMissCells);
      
      // logic for isGameOver
      const allShipsSunken = isAllShipsSunken(newGameboardStateAfterHitLogicWithFreeMissCells, ships);
      if (allShipsSunken) {
        handleIsGameOver(isComputer);
      }


    } else if (isEmptyGameboardCell(gameboard, index, emptyGameboardValue)) {
      const newGameboardStateAfterMissLogicWithMissCell = getGameboardAfterMissLogic(gameboard, index, missGameboardValue);
      setGameboard(newGameboardStateAfterMissLogicWithMissCell);
      setIsPlayerTurn(!isPlayerTurn);
      if (isComputer) {
        setComputerHitTurnAgain(false);
      }
    }
  }

  const handlePlayerMove = (event) => {
    if (isValidPlayerTurn(
      gameboardPlayer, 
      +event.target.id,
      isPlayerTurn, 
      hitGameboardValue, 
      missGameboardValue, 
      freemissGameboardValue,
      isGameStarted,
      isGameOver
    )) {
      updateGameboardCellHitOrMiss(gameboardPlayer, +event.target.id, setGameboardPlayer, gameboardPlayerInitialState, false);
    }
  }
  
  const handleComputerMove = () => {
    // array of indexes of computercells that are either "empty" or a hidden ship
    const gameboardComputerCellsAvailable = getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips(gameboardComputer, hitGameboardValue, missGameboardValue, freemissGameboardValue);
    const randomGameboardComputerCellNumber = getAvailableRandomGameboardComputerCellNumber(
      getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips,
      gameboardComputer,
      hitGameboardValue,
      missGameboardValue,
      freemissGameboardValue,
      getRandomIndexFromArray,
    )
    if (gameboardComputerCellsAvailable.length > 0) {
      // update the gameboardComputer state with a "hit" or "miss" value depending if the randomly picked index randomGameboardComputerCellNumber is a ship or not
      updateGameboardCellHitOrMiss(gameboardComputer, randomGameboardComputerCellNumber, setGameboardComputer, gameboardComputerInitialState, true);
    }
  }

  return (
    <div className="game">
      <div className="gameboard-wrapper">
        <GameboardPlayerGrid 
          gameboardPlayer={gameboardPlayer}
          amountOfColumns={amountOfColumns}
          amountOfRows={amountOfRows}
          hitGameboardValue={hitGameboardValue}
          missGameboardValue={missGameboardValue}
          freemissGameboardValue={freemissGameboardValue}
          handlePlayerMove={handlePlayerMove}
          isPlayerTurn={isPlayerTurn}
          isGameStarted={isGameStarted}
        />
        <GameboardComputerGrid 
          gameboardComputer={gameboardComputer}
          amountOfColumns={amountOfColumns}
          amountOfRows={amountOfRows}
          hitGameboardValue={hitGameboardValue}
          missGameboardValue={missGameboardValue}
          freemissGameboardValue={freemissGameboardValue}
          emptyGameboardValue={emptyGameboardValue}
          isPlayerTurn={isPlayerTurn}
          isGameStarted={isGameStarted}
        />
      </div>
      <CreateNewRandomGameboardButton
        setGameboardComputerInitialState={setGameboardComputerInitialState}
        createRandomGameboard={createRandomGameboard}
        amountOfColumns={amountOfColumns}
        amountOfRows={amountOfRows}
        emptyGameboardValue={emptyGameboardValue}
        generateRandomValidShipPosition={generateRandomValidShipPosition}
        ships={ships}
        isGameStarted={isGameStarted}
        isGameOver={isGameOver}
      />
      <StartGameButton 
        handleStartGame={handleStartGame}
        isGameStarted={isGameStarted}
        isGameOver={isGameOver}
      />
      <NewGameButton 
        handleNewGame={handleNewGame}
        isGameStarted={isGameStarted}
        isGameOver={isGameOver}
      />

      <GameboardShipStats 
        gameboard={gameboardPlayer}
        ships={ships}
      />
      <GameboardShipStats 
        gameboard={gameboardComputer}
        ships={ships}
      />
      {
          showGameOverModal
        ? <GameOverModal 
            playerWonGame={playerWonGame}
            computerWonGame={computerWonGame}
            setShowGameOverModal={setShowGameOverModal}
            handleNewGameCloseGameOverModal={handleNewGameCloseGameOverModal}
          />
        : null
      }
    </div>
  )
}
