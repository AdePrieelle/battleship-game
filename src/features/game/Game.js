import { useEffect, useState } from 'react';
import { getRandomIndexFromArray } from '../../common/utils/getRandomIndexFromArray/getRandomIndexFromArray';
import { isHiddenShipGameboardCell } from '../../common/utils/isHiddenShipGameboardCell/isHiddenShipGameboardCell';
import { isEmptyGameboardCell } from '../../common/utils/isEmptyGameboardCell/isEmptyGameboardCell';
import { addFreeMissGameboardValueCellsAroundSunkenShip } from '../../common/utils/addFreeMissGameboardValueCellsAroundSunkenShip/addFreeMissGameboardValueCellsAroundSunkenShip';
import { addFreeMissGameboardValueCellsAroundCellDiagonally } from '../../common/utils/addFreeMissGameboardValueCellsAroundCellDiagonally/addFreeMissGameboardValueCellsAroundCellDiagonally';
import { getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips } from '../../common/utils/getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips/getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips';
import { isSunkenShip } from '../../common/utils/isSunkenShip/isSunkenShip';
import { getAllIndexesOfAnArrayValue } from '../../common/utils/getAllIndexesOfAnArrayValue/getAllIndexesOfAnArrayValue';
import { getAvailableRandomGameboardComputerCellNumber } from '../../common/utils/getAvailableRandomGameboardComputerCellNumber/getAvailableRandomGameboardComputerCellNumber';
import { getGameboardAfterHitLogic } from '../../common/utils/getGameboardAfterHitLogic/getGameboardAfterHitLogic';
import { getGameboardAfterMissLogic } from '../../common/utils/getGameboardAfterMissLogic/getGameboardAfterMissLogic';
import { isAllShipsSunken } from '../../common/utils/isAllShipsSunken/isAllShipsSunken';
import { isValidPlayerTurn } from '../../common/utils/isValidPlayerTurn/isValidPlayerTurn';
import { isValidComputerTurn } from '../../common/utils/isValidComputerTurn/isValidComputerTurn';
import { getPreviousHitDirectionNotSunkenShip } from '../../common/utils/getPreviousHitDirectionNotSunkenShip/getPreviousHitDirectionNotSunkenShip';
import { isSunkenShipAfterHit } from '../../common/utils/isSunkenShipAfterHit/isSunkenShipAfterHit';
import { getAvailableNextSmartComputerMovesAfterHit } from '../../common/utils/getAvailableNextSmartComputerMovesAfterHit/getAvailableNextSmartComputerMovesAfterHit';
import { isShipOrEmptyGameboardValue } from '../../common/utils/isShipOrEmptyGameboardValue/isShipOrEmptyGameboardValue';
import { GameLogicModals } from './components/GameLogicModals/GameLogicModals';
import { GameboardsWrapper } from './components/GameboardsWrapper/GameboardsWrapper';
import { ships } from './ships';
import { createRandomGameboard } from '../../common/utils/createRandomGameboard/createRandomGameboard';
import { generateRandomValidShipPosition } from '../../common/utils/generateRandomValidShipPosition/generateRandomValidShipPosition';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectAmountOfRows,
  selectAmountOfColumns,
  selectEmptyGameboardValue,
  selectHitGameboardValue,
  selectMissGameboardValue,
  selectFreemissGameboardValue,
  selectHorizontalDirectionValue,
  selectVerticalDirectionValue,
  selectButtonNextStepText,
  selectShipNamePropertyText,
  selectShipLengthPropertyText,
  selectShipIsSunkenPropertyText,
  selectComputerName,
  selectPlayerOneName,
  selectPlayerTwoName,
  selectIsPlayerOneTurn,
  selectComputerHitTurnAgainCountDefaultValue,
  selectComputerHitTurnAgainCount,
  selectIsGameStarted,
  selectIsGameOver,
  selectPlayerOneWonGame,
  selectPlayerTwoWonGame,
  selectComputerWonGame,
  selectIsPlayerTwoComputer,
  selectGameboardPlayerOneInitialState,
  selectGameboardPlayerTwoInitialState,
  selectGameboardPlayerOne,
  selectGameboardPlayerTwo,
  selectPreviousHitComputerCellsNotSunkenShipDefaultValue,
  selectPreviousHitDirectionNotSunkenShipHorizontalValue,
  selectPreviousHitDirectionNotSunkenShipVerticalValue,
  selectPreviousHitDirectionNotSunkenShipDefaultValue,
  selectPreviousHitComputerCellsNotSunkenShip,
  selectPreviousHitDirectionNotSunkenShip,
  selectShowGameboards,
  selectShowModalGameOver,
  selectShowModalPickOpponent,
  selectShowModalGameSwitchTurnToPlayerTwo,
  selectShowModalGameSwitchTurnToPlayerOne,
  selectDisablePlayerMove,
  selectDisableButtonGameSwitchPlayerTurn,
  
  updatePlayerOneName, 
  updatePlayerTwoName,
  updateIsPlayerOneTurn,
  resetComputerHitTurnAgainCount,
  incrementComputerHitTurnAgainCount,
  updateIsGameStarted,
  updateIsGameOver,
  updatePlayerOneWonGame,
  updatePlayerTwoWonGame,
  updateComputerWonGame,
  updateIsPlayerTwoComputer,

  updateGameboardPlayerOneInitialState,
  updateGameboardPlayerTwoInitialState,
  updateGameboardPlayerOne,
  updateGameboardPlayerTwo,

  updatePreviousHitComputerCellsNotSunkenShip,
  updatePreviousHitDirectionNotSunkenShip,

  updateShowGameboards,
  updateShowModalGameOver,
  updateShowModalPickOpponent,
  updateShowModalGameSwitchTurnToPlayerTwo,
  updateShowModalGameSwitchTurnToPlayerOne,
  updateDisablePlayerMove,
  updateDisableButtonGameSwitchPlayerTurn,

  handleIsGameOver,
  handleStartGame,
  handleButtonNewGame,
  handleButtonGameSwitchPlayerTurn,
  handleNewGame,
} from './gameSlice';
import './Game.scss';

export const Game = () => {
  const dispatch = useDispatch();

  const amountOfRows = useSelector(selectAmountOfRows);
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const hitGameboardValue = useSelector(selectHitGameboardValue);
  const missGameboardValue = useSelector(selectMissGameboardValue);
  const freemissGameboardValue = useSelector(selectFreemissGameboardValue);;
  const horizontalDirectionValue = useSelector(selectHorizontalDirectionValue);;
  const verticalDirectionValue = useSelector(selectVerticalDirectionValue);;
  const buttonNextStepText = useSelector(selectButtonNextStepText);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const shipIsSunkenPropertyText = useSelector(selectShipIsSunkenPropertyText);
  const computerName = useSelector(selectComputerName);
  const playerOneName = useSelector(selectPlayerOneName);
  const playerTwoName = useSelector(selectPlayerTwoName);
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  // const computerHitTurnAgainCountDefaultValue = useSelector(selectComputerHitTurnAgainCountDefaultValue);
  const computerHitTurnAgainCount = useSelector(selectComputerHitTurnAgainCount);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const playerOneWonGame = useSelector(selectPlayerOneWonGame);
  const playerTwoWonGame = useSelector(selectPlayerTwoWonGame);
  const computerWonGame = useSelector(selectComputerWonGame);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);

  const gameboardPlayerOneInitialState = useSelector(selectGameboardPlayerOneInitialState);

  const gameboardPlayerTwoInitialState = useSelector(selectGameboardPlayerTwoInitialState);
  
  // const [gameboardPlayerOneInitialState, setGameboardPlayerOneInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);

  // const [gameboardPlayerTwoInitialState, setGameboardPlayerTwoInitialState] = useState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);

  useEffect(() => {
    dispatch(updateGameboardPlayerOne(gameboardPlayerOneInitialState));
  }, [dispatch, gameboardPlayerOneInitialState]);

  useEffect(() => {
    dispatch(updateGameboardPlayerTwo(gameboardPlayerTwoInitialState));
  }, [dispatch, gameboardPlayerTwoInitialState]);

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
  });

  const previousHitComputerCellsNotSunkenShipDefaultValue = useSelector(selectPreviousHitComputerCellsNotSunkenShipDefaultValue);
  const previousHitDirectionNotSunkenShipHorizontalValue = useSelector(selectPreviousHitDirectionNotSunkenShipHorizontalValue);
  const previousHitDirectionNotSunkenShipVerticalValue = useSelector(selectPreviousHitDirectionNotSunkenShipVerticalValue);
  const previousHitDirectionNotSunkenShipDefaultValue = useSelector(selectPreviousHitDirectionNotSunkenShipDefaultValue);
  const previousHitComputerCellsNotSunkenShip = useSelector(selectPreviousHitComputerCellsNotSunkenShip)
  const previousHitDirectionNotSunkenShip = useSelector(selectPreviousHitDirectionNotSunkenShip);

  useEffect(() => {
    if (previousHitComputerCellsNotSunkenShip.length === 2 && !previousHitDirectionNotSunkenShip) {
      const previousHitDirectionNotSunkenShipValue = getPreviousHitDirectionNotSunkenShip(
        previousHitDirectionNotSunkenShipVerticalValue, 
        previousHitDirectionNotSunkenShipHorizontalValue,
        previousHitComputerCellsNotSunkenShip,
      );
      dispatch(updatePreviousHitDirectionNotSunkenShip(previousHitDirectionNotSunkenShipValue));
    }
  }, [dispatch, previousHitComputerCellsNotSunkenShip, previousHitDirectionNotSunkenShip, previousHitDirectionNotSunkenShipHorizontalValue, previousHitDirectionNotSunkenShipVerticalValue]);

  // update the gameboard with a hit or miss or freemiss value
  const updateGameboardCellHitOrMiss = (gameboard, index, updateGameboardPlayer, gameboardInitialState, isComputer) => {
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
          dispatch(updatePreviousHitComputerCellsNotSunkenShip(previousHitComputerCellsNotSunkenShipDefaultValue));
          dispatch(updatePreviousHitDirectionNotSunkenShip(previousHitDirectionNotSunkenShipDefaultValue));
        } else {
          // currently "hit" ship isn't sunken
          let copyPreviousHitComputerCellNumbersInfo = [...previousHitComputerCellsNotSunkenShip];
          copyPreviousHitComputerCellNumbersInfo.push(+index);
          dispatch(updatePreviousHitComputerCellsNotSunkenShip(copyPreviousHitComputerCellNumbersInfo));
        }
        dispatch(incrementComputerHitTurnAgainCount());
      }
      // updated gameboard
      dispatch(updateGameboardPlayer(newGameboardStateAfterHitLogicWithFreeMissCells));
      // logic for isGameOver
      const allShipsSunken = isAllShipsSunken(newGameboardStateAfterHitLogicWithFreeMissCells, ships, shipNamePropertyText);
      if (allShipsSunken) {
        handleIsGameOver({ computerWon: isComputer });
      }
    } else if (isEmptyGameboardCell(gameboard, index, emptyGameboardValue)) {
      const newGameboardStateAfterMissLogicWithMissCell = getGameboardAfterMissLogic(gameboard, index, missGameboardValue);
      dispatch(updateGameboardPlayer(newGameboardStateAfterMissLogicWithMissCell));
      if (isComputer) {
        dispatch(resetComputerHitTurnAgainCount());
      }
      if (isPlayerTwoComputer) {
        dispatch(updateIsPlayerOneTurn(!isPlayerOneTurn));
      }
      if (!isComputer && !isPlayerTwoComputer) {
        dispatch(updateDisablePlayerMove(true));
        dispatch(updateDisableButtonGameSwitchPlayerTurn(false));
      }
    }
  }

  const handlePlayerMove = (event, gameboardPlayer, isPlayerOneTurn, updateGameboardPlayer, gameboardPlayerInitialState) => {
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
      updateGameboardCellHitOrMiss(gameboardPlayer, +event.target.id, updateGameboardPlayer, gameboardPlayerInitialState, false);
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
        updateGameboardCellHitOrMiss(gameboardPlayerOne, randomGameboardComputerCellNumber, updateGameboardPlayerOne, gameboardPlayerOneInitialState, true);
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
      updateGameboardCellHitOrMiss(gameboardPlayerOne, smartComputerMoveIndex, updateGameboardPlayerOne, gameboardPlayerOneInitialState, true);
    }
  }

  // const resetRandomGameboards = () => {
  //   setGameboardPlayerOneInitialState([...gameboardPlayerOneInitialState]);
  //   setGameboardPlayerTwoInitialState([...gameboardPlayerTwoInitialState]);
  //   // setGameboardPlayerOneInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
  //   // setGameboardPlayerTwoInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
  // }

  const getGeneratedRandomGameboardPlayerInitialStates = () => {
    const generatedRandomGameboardPlayerOneInitialState = createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard);
    // const generatedRandomGameboardPlayerOneInitialState = [...gameboardPlayerOneInitialState];
    const generatedRandomGameboardPlayerTwoInitialState = createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard);
    // const generatedRandomGameboardPlayerTwoInitialState = [...gameboardPlayerTwoInitialState];
    return ({
      generatedRandomGameboardPlayerOneInitialState,
      generatedRandomGameboardPlayerTwoInitialState
    });
  };
  
  // const handleIsGameOver = (winner) => {
  //   setIsGameStarted(false);
  //   setIsGameOver(true);
  //   if (winner.computerWon) {
  //     setComputerHitTurnAgainCount(computerHitTurnAgainCountDefaultValue);
  //     setComputerWonGame(true);
  //   } else if (!winner.computerWon) {
  //     if (isPlayerOneTurn) {
  //       setPlayerOneWonGame(true);
  //     } else if (!isPlayerOneTurn) {
  //       setPlayerTwoWonGame(true);
  //     }
  //   }
  //   setShowModalGameOver(true);
  // };
  
  // const handleStartGame = () => {
  //   setIsGameOver(false);
  //   setIsPlayerOneTurn(true);
  //   setComputerHitTurnAgainCount(computerHitTurnAgainCountDefaultValue);
  //   setDisablePlayerMove(false);
  //   setIsGameStarted(true);
  // }
  
  // const handleNewGame = () => {
  //   setIsGameOver(false);
  //   setIsGameStarted(false);
  //   setComputerWonGame(false);
  //   setPlayerOneWonGame(false);
  //   setPlayerTwoWonGame(false);
  //   setPreviousHitComputerCellsNotSunkenShip(previousHitComputerCellsNotSunkenShipDefaultValue);
  //   setPreviousHitDirectionNotSunkenShip(previousHitDirectionNotSunkenShipDefaultValue);
  //   resetRandomGameboards();
  // }
  
  // show gameboards logic
  const showGameboards = useSelector(selectShowGameboards);
  // game over modal logic
  const showModalGameOver = useSelector(selectShowModalGameOver);
  // new game modal logic
  const showModalPickOpponent = useSelector(selectShowModalPickOpponent);
  // game logic for opponent is a player
  const showModalGameSwitchTurnToPlayerTwo = useSelector(selectShowModalGameSwitchTurnToPlayerTwo);
  const showModalGameSwitchTurnToPlayerOne = useSelector(selectShowModalGameSwitchTurnToPlayerOne);
  // disable player moves once missed before handing over to other player
  const disablePlayerMove = useSelector(selectDisablePlayerMove);
  // show button for players to hand over
  const disableButtonGameSwitchPlayerTurn = useSelector(selectDisableButtonGameSwitchPlayerTurn);

  // // new game modal logic
  // const handleButtonNewGame = () => {
  //   setShowModalGameOver(false);
  //   setShowModalPickOpponent(true);
  // }

  // // handle button to hand over turns
  // const handleButtonGameSwitchPlayerTurn = () => {
  //   setShowGameboards(false);
  //   setDisablePlayerMove(false);
  //   setDisableButtonGameSwitchPlayerTurn(true);
  //   if (isPlayerOneTurn) {
  //     setShowModalGameSwitchTurnToPlayerTwo(true);
  //   } else if (!isPlayerOneTurn) {
  //     setShowModalGameSwitchTurnToPlayerOne(true);
  //   }
  //   setIsPlayerOneTurn(!isPlayerOneTurn);
  // }

  return (
    <div className="game">
      {
          showGameboards
        ? 
          <GameboardsWrapper 
            handlePlayerMove={handlePlayerMove}
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
