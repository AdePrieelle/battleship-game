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
// import { createRandomGameboard } from './createRandomGameboard/createRandomGameboard';
// import { generateRandomValidShipPosition } from './generateRandomValidShipPosition/generateRandomValidShipPosition';
import { ships } from './ships';
import { isAllShipsSunken } from './isAllShipsSunken/isAllShipsSunken';
// import { GameboardPlayerGrid } from './GameboardPlayerGrid';
// import { GameboardComputerGrid } from './GameboardComputerGrid';
import { isValidPlayerTurn } from './isValidPlayerTurn/isValidPlayerTurn';
// import { CreateNewRandomGameboardButton } from './CreateNewRandomGameboardButton/CreateNewRandomGameboardButton';
// import { StartGameButton } from './StartGameButton/StartGameButton';
// import { NewGameButton } from './NewGameButton/NewGameButton';
import { isValidComputerTurn } from './isValidComputerTurn/isValidComputerTurn';
// import { GameboardShipStats } from './GameboardShipStats/GameboardShipStats';
import { getPreviousHitDirectionNotSunkenShip } from './getPreviousHitDirectionNotSunkenShip/getPreviousHitDirectionNotSunkenShip';
import { isSunkenShipAfterHit } from './isSunkenShipAfterHit/isSunkenShipAfterHit';
import { getAvailableNextSmartComputerMovesAfterHit } from './getAvailableNextSmartComputerMovesAfterHit/getAvailableNextSmartComputerMovesAfterHit';
import { isShipOrEmptyGameboardValue } from './isShipOrEmptyGameboardValue/isShipOrEmptyGameboardValue';
// import { Modal } from './Modal/Modal';
// import { Button } from './Button/Button';
// import { ButtonsWrapper } from './ButtonsWrapper/ButtonsWrapper';
// import { ModalMessage } from './ModalMessage/ModalMessage';
// import { GameboardPlayerGridShipPlacement } from './GameboardPlayerGridShipPlacement';
import { GameLogicModals } from './GameLogicModals';
// import { NextButton } from './NextButton/NextButton';
import { GameboardsWrapper } from './GameboardsWrapper';
// import { GameButtons } from './GameButtons';
import './Game.scss';
// import { createGameboard } from './createGameboard/createGameboard';
// import { sortArrayOfObjectsBasedOnAPropertyValue } from './sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue';
// import { isValidShipPosition } from './isValidShipPosition/isValidShipPosition';
// import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from './checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds';
// import { getFirstDigitOfNumber } from './getFirstDigitOfNumber/getFirstDigitOfNumber';
// import { checkIfShipIsNotSurroundedByAnotherShip } from './checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip';
// import { calculateShipCoords } from './calculateShipCoords/calculateShipCoords';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  const emptyGameboardValue = "empty";
  const hitGameboardValue = "hit";
  const missGameboardValue = "miss";
  const freemissGameboardValue = "freemiss";
  const horizontalDirectionValue = "horizontal";
  const verticalDirectionValue = "vertical";
  const buttonNextStepText = "Next";
  const shipNamePropertyText = "name";
  const shipLengthPropertyText = "shipLength";
  const shipIsSunkenPropertyText = "isSunken";
  const computerName = "Computer";
  const [playerOneName, setPlayerOneName] = useState("Player 1");
  const [playerTwoName, setPlayerTwoName] = useState("Player 2");
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const computerHitTurnAgainCountDefaultValue = 0;
  const [computerHitTurnAgainCount, setComputerHitTurnAgainCount] = useState(computerHitTurnAgainCountDefaultValue);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerOneWonGame, setPlayerOneWonGame] = useState(false);
  const [playerTwoWonGame, setPlayerTwoWonGame] = useState(false);
  const [computerWonGame, setComputerWonGame] = useState(false);
  const [isPlayerTwoComputer, setIsPlayerTwoComputer] = useState(true);

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
  
  // const [gameboardPlayerOneInitialState, setGameboardPlayerOneInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
  const [gameboardPlayerOne, setGameboardPlayerOne] = useState([]);

  // const [gameboardPlayerTwoInitialState, setGameboardPlayerTwoInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
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
  const previousHitDirectionNotSunkenShipDefaultValue = null;
  const [previousHitComputerCellsNotSunkenShip, setPreviousHitComputerCellsNotSunkenShip] = useState(previousHitComputerCellsNotSunkenShipDefaultValue);
  const [previousHitDirectionNotSunkenShip, setPreviousHitDirectionNotSunkenShip] = useState(previousHitDirectionNotSunkenShipDefaultValue);

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
          setPreviousHitDirectionNotSunkenShip(previousHitDirectionNotSunkenShipDefaultValue);
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
      const allShipsSunken = isAllShipsSunken(newGameboardStateAfterHitLogicWithFreeMissCells, ships, shipNamePropertyText);
      if (allShipsSunken) {
        handleIsGameOver(isComputer);
      }
    } else if (isEmptyGameboardCell(gameboard, index, emptyGameboardValue)) {
      const newGameboardStateAfterMissLogicWithMissCell = getGameboardAfterMissLogic(gameboard, index, missGameboardValue);
      setGameboard(newGameboardStateAfterMissLogicWithMissCell);
      if (isComputer) {
        setComputerHitTurnAgainCount(computerHitTurnAgainCountDefaultValue);
      }
      if (isPlayerTwoComputer) {
        setIsPlayerOneTurn(!isPlayerOneTurn);
      }
      if (!isComputer && !isPlayerTwoComputer) {
        setDisablePlayerMove(true);
        setDisableButtonGameSwitchPlayerTurn(false);
      }
    }
  }

  const handlePlayerMove = (event, gameboardPlayer, isPlayerOneTurn, setGameboardPlayer, gameboardPlayerInitialState) => {
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
      updateGameboardCellHitOrMiss(gameboardPlayer, +event.target.id, setGameboardPlayer, gameboardPlayerInitialState, false);
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
        updateGameboardCellHitOrMiss(gameboardPlayerOne, randomGameboardComputerCellNumber, setGameboardPlayerOne, gameboardPlayerOneInitialState, true);
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
      updateGameboardCellHitOrMiss(gameboardPlayerOne, smartComputerMoveIndex, setGameboardPlayerOne, gameboardPlayerOneInitialState, true);
    }
  }

  const resetRandomGameboards = () => {
    setGameboardPlayerOneInitialState([...gameboardPlayerOneInitialState]);
    setGameboardPlayerTwoInitialState([...gameboardPlayerTwoInitialState]);
    // setGameboardPlayerOneInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
    // setGameboardPlayerTwoInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
  }
  
  const handleIsGameOver = (isComputer) => {
    setIsGameStarted(false);
    setIsGameOver(true);
    if (isComputer) {
      setComputerHitTurnAgainCount(computerHitTurnAgainCountDefaultValue);
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
    setComputerHitTurnAgainCount(computerHitTurnAgainCountDefaultValue);
    setDisablePlayerMove(false);
    setIsGameStarted(true);
  }
  
  const handleNewGame = () => {
    setIsGameOver(false);
    setIsGameStarted(false);
    setComputerWonGame(false);
    setPlayerOneWonGame(false);
    setPlayerTwoWonGame(false);
    setPreviousHitComputerCellsNotSunkenShip(previousHitComputerCellsNotSunkenShipDefaultValue);
    setPreviousHitDirectionNotSunkenShip(previousHitDirectionNotSunkenShipDefaultValue);
    resetRandomGameboards();
  }
  
  // show gameboards logic
  const [showGameboards, setShowGameboards] = useState(true);
  // game over modal logic
  const [showModalGameOver, setShowModalGameOver] = useState(false);
  // new game modal logic
  const [showModalPickOpponent, setShowModalPickOpponent] = useState(false);
  // game logic for opponent is a player
  const [showModalGameSwitchTurnToPlayerTwo, setShowModalGameSwitchTurnToPlayerTwo] = useState(false);
  const [showModalGameSwitchTurnToPlayerOne, setShowModalGameSwitchTurnToPlayerOne] = useState(false);
  // disable player moves once missed before handing over to other player
  const [disablePlayerMove, setDisablePlayerMove] = useState(false);
  // show button for players to hand over
  const [disableButtonGameSwitchPlayerTurn, setDisableButtonGameSwitchPlayerTurn] = useState(true);

  // new game modal logic
  const handleButtonNewGame = () => {
    setShowModalGameOver(false);
    setShowModalPickOpponent(true);
  }

  // handle button to hand over turns
  const handleButtonGameSwitchPlayerTurn = () => {
    setShowGameboards(false);
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
    <div className="game">
      {
          showGameboards
        ? 
          <GameboardsWrapper 
            isPlayerOneTurn={isPlayerOneTurn}
            isPlayerTwoComputer={isPlayerTwoComputer}
            gameboardPlayerOne={gameboardPlayerOne}
            amountOfColumns={amountOfColumns}
            amountOfRows={amountOfRows}
            hitGameboardValue={hitGameboardValue}
            missGameboardValue={missGameboardValue}
            freemissGameboardValue={freemissGameboardValue}
            emptyGameboardValue={emptyGameboardValue}
            handlePlayerMove={handlePlayerMove}
            setGameboardPlayerOne={setGameboardPlayerOne}
            gameboardPlayerOneInitialState={gameboardPlayerOneInitialState}
            isGameStarted={isGameStarted}
            isGameOver={isGameOver}
            disablePlayerMove={disablePlayerMove}
            gameboardPlayerTwo={gameboardPlayerTwo}
            setGameboardPlayerTwo={setGameboardPlayerTwo}
            gameboardPlayerTwoInitialState={gameboardPlayerTwoInitialState}
            handleButtonNewGame={handleButtonNewGame}
            handleButtonGameSwitchPlayerTurn={handleButtonGameSwitchPlayerTurn}
            disableButtonGameSwitchPlayerTurn={disableButtonGameSwitchPlayerTurn}
            shipLengthPropertyText={shipLengthPropertyText}
            shipNamePropertyText={shipNamePropertyText}
            shipIsSunkenPropertyText={shipIsSunkenPropertyText}
          />
        : null 
      }
      <GameLogicModals 
        setShowModalPickOpponent={setShowModalPickOpponent}
        handleNewGame={handleNewGame}
        showModalGameOver={showModalGameOver}
        setIsPlayerTwoComputer={setIsPlayerTwoComputer}
        handleStartGame={handleStartGame}
        setShowModalGameOver={setShowModalGameOver}
        handleButtonNewGame={handleButtonNewGame}
        setGameboardPlayerOneInitialState={setGameboardPlayerOneInitialState}
        setGameboardPlayerTwoInitialState={setGameboardPlayerTwoInitialState}
        showModalGameSwitchTurnToPlayerOne={showModalGameSwitchTurnToPlayerOne}
        showModalGameSwitchTurnToPlayerTwo={showModalGameSwitchTurnToPlayerTwo}
        setShowModalGameSwitchTurnToPlayerOne={setShowModalGameSwitchTurnToPlayerOne}
        setShowModalGameSwitchTurnToPlayerTwo={setShowModalGameSwitchTurnToPlayerTwo}
        playerOneWonGame={playerOneWonGame}
        playerTwoWonGame={playerTwoWonGame}
        playerOneName={playerOneName}
        playerTwoName={playerTwoName}
        computerWonGame={computerWonGame}
        computerName={computerName}
        showModalPickOpponent={showModalPickOpponent}
        setPlayerOneName={setPlayerOneName}
        setPlayerTwoName={setPlayerTwoName}
        amountOfRows={amountOfRows}
        amountOfColumns={amountOfColumns}
        emptyGameboardValue={emptyGameboardValue}
        horizontalDirectionValue={horizontalDirectionValue}
        verticalDirectionValue={verticalDirectionValue}
        isPlayerTwoComputer={isPlayerTwoComputer}
        setShowGameboards={setShowGameboards}
        buttonNextStepText={buttonNextStepText}
        shipLengthPropertyText={shipLengthPropertyText}
        shipNamePropertyText={shipNamePropertyText}
      />
    </div>
  )
}
