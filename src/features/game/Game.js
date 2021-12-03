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
import { GameboardShipStats } from './GameboardShipStats/GameboardShipStats';
import { getPreviousHitDirectionNotSunkenShip } from './getPreviousHitDirectionNotSunkenShip/getPreviousHitDirectionNotSunkenShip';
import { isSunkenShipAfterHit } from './isSunkenShipAfterHit/isSunkenShipAfterHit';
import { getAvailableNextSmartComputerMovesAfterHit } from './getAvailableNextSmartComputerMovesAfterHit/getAvailableNextSmartComputerMovesAfterHit';
import { isShipOrEmptyGameboardValue } from './isShipOrEmptyGameboardValue/isShipOrEmptyGameboardValue';
import { Modal } from './Modal/Modal';
import { ModalButton } from './ModalButton/ModalButton';
import { ModalButtonsWrapper } from './ModalButtonsWrapper/ModalButtonsWrapper';
import { ModalMessage } from './ModalMessage/ModalMessage';
import './Game.scss';

export const Game = () => {
  const amountOfRows = 10;
  const amountOfColumns = 10;
  const emptyGameboardValue = "empty";
  const hitGameboardValue = "hit";
  const missGameboardValue = "miss";
  const freemissGameboardValue = "freemiss";
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [computerHitTurnAgainCount, setComputerHitTurnAgainCount] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [playerOneWonGame, setPlayerOneWonGame] = useState(false);
  const [playerTwoWonGame, setPlayerTwoWonGame] = useState(false);
  const [computerWonGame, setComputerWonGame] = useState(false);
  const [isPlayerTwoComputer, setIsPlayerTwoComputer] = useState(false);

  const [gameboardPlayerOneInitialState, setGameboardPlayerOneInitialState] = useState([
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
  
  // const [gameboardPlayerOneInitialState, setGameboardPlayerOneInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
  const [gameboardPlayerOne, setGameboardPlayerOne] = useState([]);

  // const [gameboardPlayerTwoInitialState, setGameboardPlayerTwoInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
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
  }, [isPlayerTwoComputer, isPlayerOneTurn, isGameStarted, isGameOver, gameboardPlayerTwo, computerHitTurnAgainCount]);

  

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
      setIsPlayerOneTurn(!isPlayerOneTurn);
      if (isComputer) {
        setComputerHitTurnAgainCount(0);
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
      const gameboardComputerCellsAvailable = getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips(gameboardPlayerTwo, hitGameboardValue, missGameboardValue, freemissGameboardValue);
      const randomGameboardComputerCellNumber = getAvailableRandomGameboardComputerCellNumber(
        getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips,
        gameboardPlayerTwo,
        hitGameboardValue,
        missGameboardValue,
        freemissGameboardValue,
        getRandomIndexFromArray,
        );
      if (gameboardComputerCellsAvailable.length > 0) {
        // update the gameboardComputer state with a "hit" or "miss" value depending if the randomly picked index randomGameboardComputerCellNumber is a ship or not
        updateGameboardCellHitOrMiss(gameboardPlayerTwo, randomGameboardComputerCellNumber, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, true);
      }
    } else if (previousHitComputerCellsNotSunkenShip.length > 0) {
      // array of indexes for next possible smart computer move if a ship has been hit but isn't sunken yet
      const availableNextSmartComputerMovesAfterHit = getAvailableNextSmartComputerMovesAfterHit(
        gameboardPlayerTwo,
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
      updateGameboardCellHitOrMiss(gameboardPlayerTwo, smartComputerMoveIndex, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, true);
    }
  }



  const [showModalGameOver, setShowModalGameOver] = useState(false);

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
    // setGameboardPlayerInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
    setGameboardPlayerOneInitialState([...gameboardPlayerOneInitialState]);
    // setGameboardComputerInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard));
    setGameboardPlayerTwoInitialState([...gameboardPlayerTwoInitialState]);
  }
  
  const [showModalPickOpponent, setShowModalPickOpponent] = useState(false);

  const handleModalButtonNewGame = () => {
    handleNewGame();
    setShowModalGameOver(false);
    setShowModalPickOpponent(true);
  }

  const handleModalButtonOpponentIsComputer = () => {
    setIsPlayerTwoComputer(true);
    setShowModalPickOpponent(false);
  }

  const handleModalButtonOpponentIsPlayer = () => {
    setIsPlayerTwoComputer(false);
    setShowModalPickOpponent(false);
  }

  return (
    <div className="game">
      <div className="gameboard-wrapper">
        <GameboardPlayerGrid 
          gameboardPlayer={gameboardPlayerOne}
          amountOfColumns={amountOfColumns}
          amountOfRows={amountOfRows}
          hitGameboardValue={hitGameboardValue}
          missGameboardValue={missGameboardValue}
          freemissGameboardValue={freemissGameboardValue}
          // handlePlayerMove={handlePlayerOneMove}
          handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState)}
          isPlayerTurn={isPlayerOneTurn}
          isGameStarted={isGameStarted}
        />
        <GameboardPlayerGrid 
          gameboardPlayer={gameboardPlayerTwo}
          amountOfColumns={amountOfColumns}
          amountOfRows={amountOfRows}
          hitGameboardValue={hitGameboardValue}
          missGameboardValue={missGameboardValue}
          freemissGameboardValue={freemissGameboardValue}
          // handlePlayerMove={handlePlayerTwoMove}
          handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, !isPlayerOneTurn, setGameboardPlayerTwo, gameboardPlayerTwoInitialState)}
          isPlayerTurn={!isPlayerOneTurn}
          isGameStarted={isGameStarted}
        />
        {/* <GameboardComputerGrid 
          gameboardComputer={gameboardPlayerTwo}
          amountOfColumns={amountOfColumns}
          amountOfRows={amountOfRows}
          hitGameboardValue={hitGameboardValue}
          missGameboardValue={missGameboardValue}
          freemissGameboardValue={freemissGameboardValue}
          emptyGameboardValue={emptyGameboardValue}
          isPlayerTurn={isPlayerOneTurn}
          isGameStarted={isGameStarted}
        /> */}
      </div>
      <CreateNewRandomGameboardButton
        setGameboardComputerInitialState={setGameboardPlayerTwoInitialState}
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
        gameboard={gameboardPlayerOne}
        ships={ships}
      />
      <GameboardShipStats 
        gameboard={gameboardPlayerTwo}
        ships={ships}
      />
      {/* {
          showGameOverModal
        ? <GameOverModal 
            playerOneWonGame={playerOneWonGame}
            playerTwoWonGame={playerTwoWonGame}
            computerWonGame={computerWonGame}
            setShowGameOverModal={setShowGameOverModal}
            handleNewGameCloseGameOverModal={handleNewGameCloseGameOverModal}
          />
        : null
      } */}
      {/* showModalGameOver */}
      {
          showModalGameOver
        ? <Modal 
            setShowModal={setShowModalGameOver}
          >
            <ModalMessage 
              modalMessage={`${playerOneWonGame ? "Player 1" : playerTwoWonGame ? "Player 2" : computerWonGame ? "Computer" : "Noone"} won!`}
            />
            <ModalButtonsWrapper>
              <ModalButton 
                modalButtonLabel={"Play again"}
                modalButtonOnClick={handleModalButtonNewGame}
              />
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {/* showModalPickOpponent */}
      {
          showModalPickOpponent
        ? <Modal 
            setShowModal={setShowModalPickOpponent}
          >
            <ModalMessage 
              modalMessage={"Pick your opponent"}
            />
            <ModalButtonsWrapper>
              <ModalButton 
                modalButtonLabel={"Computer"}
                modalButtonOnClick={handleModalButtonOpponentIsComputer}
              />
              <ModalButton 
                modalButtonLabel={"Player"}
                modalButtonOnClick={handleModalButtonOpponentIsPlayer}
              />
            </ModalButtonsWrapper>
          </Modal>
        : null
      }
    </div>
  )
}
