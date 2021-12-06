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
// import { NextButton } from './NextButton/NextButton';
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
      setIsPlayerOneTurn(!isPlayerOneTurn);
      if (isComputer) {
        setComputerHitTurnAgainCount(0);
      }
      if (isPlayerOne && !isComputer) {
        setShowModalSwitchTurnToPlayerTwo(true);
      }
      if (!isPlayerOne && !isComputer) {
        setShowModalSwitchTurnToPlayerOne(true);
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
        updateGameboardCellHitOrMiss(gameboardPlayerTwo, randomGameboardComputerCellNumber, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, true, false);
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
      updateGameboardCellHitOrMiss(gameboardPlayerTwo, smartComputerMoveIndex, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, true, false);
    }
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
  
  const [showModalGameOver, setShowModalGameOver] = useState(false);
  const [showModalPickOpponent, setShowModalPickOpponent] = useState(false);
  const [showPreGamePlayerOne, setShowPreGamePlayerOne] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerTwo, setShowModalPreGameSwitchTurnToPlayerTwo] = useState(false);
  const [showPreGamePlayerTwo, setShowPreGamePlayerTwo] = useState(false);
  const [showModalPreGameSwitchTurnToPlayerOne, setShowModalPreGameSwitchTurnToPlayerOne] = useState(false);
  const [showModalSwitchTurnToPlayerTwo, setShowModalSwitchTurnToPlayerTwo] = useState(false);
  const [showModalSwitchTurnToPlayerOne, setShowModalSwitchTurnToPlayerOne] = useState(false);

  const handleModalButtonNewGame = () => {
    handleNewGame();
    setShowModalGameOver(false);
    setShowModalPickOpponent(true);
  }

  const handleModalButtonOpponentIsComputer = () => {
    setIsPlayerTwoComputer(true);
    setShowModalPickOpponent(false);
  }

  const handleModalButtonShowPreGamePlayerOne = () => {
    setIsPlayerTwoComputer(false);
    setShowModalPickOpponent(false);
    setShowPreGamePlayerOne(true);
  }

  const handleModalCloseButtonPreGameSwitchTurnPlayerOne = () => {
    setShowModalPreGameSwitchTurnToPlayerTwo(false);
    setShowPreGamePlayerOne(true);
  }

  const handleModalCloseButtonPreGameSwitchTurnPlayerTwo = () => {
    setShowModalPreGameSwitchTurnToPlayerOne(false);
    setShowPreGamePlayerTwo(true);
  }

  const handleNextPreGamePlayerOne = () => {
    setShowPreGamePlayerOne(false);
    setIsPlayerOneTurn(false);
    setShowModalPreGameSwitchTurnToPlayerTwo(true);
  }

  const handleModalButtonShowPreGamePlayerTwo = () => {
    setShowModalPreGameSwitchTurnToPlayerTwo(false);
    setShowPreGamePlayerTwo(true);
  }

  const handleNextPreGamePlayerTwo = () => {
    setShowPreGamePlayerTwo(false);
    setShowModalPreGameSwitchTurnToPlayerOne(true);
  }

  const handleModalButtonStartGame = () => {
    setShowModalPreGameSwitchTurnToPlayerOne(false);
    handleStartGame();
  }

  const handleModalSwitchTurnToPlayerTwo = () => {
    setShowModalSwitchTurnToPlayerTwo(false);
  }

  const handleModalSwitchTurnToPlayerOne = () => {
    setShowModalSwitchTurnToPlayerOne(false);
  }


  return (
    <div className="game">
      {
          (
               !showPreGamePlayerOne 
            && !showPreGamePlayerTwo 
            && !showModalPreGameSwitchTurnToPlayerTwo 
            && !showModalPreGameSwitchTurnToPlayerOne 
            && !showModalSwitchTurnToPlayerTwo 
            && !showModalSwitchTurnToPlayerOne
          )
        ? <>
            <div className="gameboard-wrapper">
              <GameboardPlayerGrid 
                gameboardPlayer={gameboardPlayerOne}
                amountOfColumns={amountOfColumns}
                amountOfRows={amountOfRows}
                hitGameboardValue={hitGameboardValue}
                missGameboardValue={missGameboardValue}
                freemissGameboardValue={freemissGameboardValue}
                emptyGameboardValue={emptyGameboardValue}
                // handlePlayerMove={handlePlayerOneMove}
                handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState, true)}
                isPlayerTurn={isPlayerOneTurn}
                isPlayerOne={true}
                isPlayerTwoComputer={isPlayerTwoComputer}
                isGameStarted={isGameStarted}
                isGameOver={isGameOver}
              />
              <GameboardPlayerGrid 
                gameboardPlayer={gameboardPlayerTwo}
                amountOfColumns={amountOfColumns}
                amountOfRows={amountOfRows}
                hitGameboardValue={hitGameboardValue}
                missGameboardValue={missGameboardValue}
                freemissGameboardValue={freemissGameboardValue}
                emptyGameboardValue={emptyGameboardValue}
                // handlePlayerMove={handlePlayerTwoMove}
                handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, !isPlayerOneTurn, setGameboardPlayerTwo, gameboardPlayerTwoInitialState, false)}
                isPlayerTurn={!isPlayerOneTurn}
                isPlayerOne={false}
                isPlayerTwoComputer={isPlayerTwoComputer}
                isGameStarted={isGameStarted}
                isGameOver={isGameOver}
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
            {/* <CreateNewRandomGameboardButton
              setGameboardComputerInitialState={setGameboardPlayerTwoInitialState}
              createRandomGameboard={createRandomGameboard}
              amountOfColumns={amountOfColumns}
              amountOfRows={amountOfRows}
              emptyGameboardValue={emptyGameboardValue}
              generateRandomValidShipPosition={generateRandomValidShipPosition}
              ships={ships}
              isGameStarted={isGameStarted}
              isGameOver={isGameOver}
            /> */}
            {/* <Button 
              buttonOnClick={() => setGameboardPlayerTwoInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard))}
            >
              <div className="button-text-wrapper">
                <div>Randomise</div>
                <i className="fas fa-sync-alt randomise-icon"></i>
              </div>
            </Button> */}
            {/* <Button buttonOnClick={handleStartGame}>Start game</Button> */}
            {/* <Button buttonOnClick={handleNewGame}>New game</Button> */}
            <Button buttonOnClick={handleModalButtonNewGame}>New game</Button>
      
            <GameboardShipStats 
              gameboard={gameboardPlayerOne}
              ships={ships}
            />
            <GameboardShipStats 
              gameboard={gameboardPlayerTwo}
              ships={ships}
            />
          </>
        : null 
      }
      
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
              <Button buttonOnClick={handleModalButtonNewGame}>Play again</Button>
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
              <Button buttonOnClick={handleModalButtonOpponentIsComputer}>Computer</Button>
              <Button buttonOnClick={handleModalButtonShowPreGamePlayerOne}>Player</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }
      {
          showPreGamePlayerOne
        ? 
          <>
            <h1>Player 1 ship placements</h1>
            <div className="gameboard-wrapper">
              <GameboardPlayerGrid 
                gameboardPlayer={gameboardPlayerTwo}
                amountOfColumns={amountOfColumns}
                amountOfRows={amountOfRows}
                hitGameboardValue={hitGameboardValue}
                missGameboardValue={missGameboardValue}
                freemissGameboardValue={freemissGameboardValue}
                emptyGameboardValue={emptyGameboardValue}
                // handlePlayerMove={handlePlayerTwoMove}
                handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, !isPlayerOneTurn, setGameboardPlayerTwo, gameboardPlayerTwoInitialState)}
                isPlayerTurn={!isPlayerOneTurn}
                isGameStarted={isGameStarted}
              />
            </div>
            <Button buttonOnClick={() => setGameboardPlayerTwoInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard))}>
              <div className="button-text-wrapper">
                <div>Randomise</div>
                <i className="fas fa-sync-alt randomise-icon"></i>
              </div>
            </Button>
            <Button buttonOnClick={handleNextPreGamePlayerOne}>Next</Button>
          </>
        : null
      }
      {
          showModalPreGameSwitchTurnToPlayerTwo
        ? <Modal 
            setShowModal={setShowModalPreGameSwitchTurnToPlayerTwo}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={"Hand over to Player 2"}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalButtonShowPreGamePlayerTwo}>Next</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }
      {
          showPreGamePlayerTwo
        ? 
          <>
            <h1>Player 2 ship placements</h1>
            <div className="gameboard-wrapper">
              <GameboardPlayerGrid 
                gameboardPlayer={gameboardPlayerOne}
                amountOfColumns={amountOfColumns}
                amountOfRows={amountOfRows}
                hitGameboardValue={hitGameboardValue}
                missGameboardValue={missGameboardValue}
                freemissGameboardValue={freemissGameboardValue}
                emptyGameboardValue={emptyGameboardValue}
                // handlePlayerMove={handlePlayerTwoMove}
                handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState)}
                isPlayerTurn={isPlayerOneTurn}
                isGameStarted={isGameStarted}
              />
            </div>
            <Button buttonOnClick={() => setGameboardPlayerOneInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, createRandomGameboard))}>
              <div className="button-text-wrapper">
                <div>Randomise</div>
                <i className="fas fa-sync-alt randomise-icon"></i>
              </div>
            </Button>
            <Button buttonOnClick={handleNextPreGamePlayerTwo}>Next</Button>
          </>
        : null
      }
      {
          showModalPreGameSwitchTurnToPlayerOne
        ? <Modal 
            setShowModal={setShowModalPreGameSwitchTurnToPlayerOne}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={"Hand over to Player 1"}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalButtonStartGame}>Start</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalSwitchTurnToPlayerTwo
        ? <Modal 
            setShowModal={setShowModalSwitchTurnToPlayerTwo}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={"Hand over to Player 2"}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalSwitchTurnToPlayerTwo}>Go</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }

      {
          showModalSwitchTurnToPlayerOne
        ? <Modal 
            setShowModal={setShowModalSwitchTurnToPlayerOne}
            HideCloseButton={true}
          >
            <ModalMessage 
              modalMessage={"Hand over to Player 1"}
            />
            <ModalButtonsWrapper>
              <Button buttonOnClick={handleModalSwitchTurnToPlayerOne}>Go</Button>
            </ModalButtonsWrapper>
          </Modal>
        : null
      }
    </div>
  )
}
