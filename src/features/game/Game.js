import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '../../common/hooks/useMediaQuery';
import { createRandomGameboard } from '../../common/utils/createRandomGameboard/createRandomGameboard';
import { generateRandomValidShipPosition } from '../../common/utils/generateRandomValidShipPosition/generateRandomValidShipPosition';
import { getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips } from '../../common/utils/getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips/getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips';
import { getAvailableNextSmartComputerMovesAfterHit } from '../../common/utils/getAvailableNextSmartComputerMovesAfterHit/getAvailableNextSmartComputerMovesAfterHit';
import { getAvailableRandomGameboardComputerCellNumber } from '../../common/utils/getAvailableRandomGameboardComputerCellNumber/getAvailableRandomGameboardComputerCellNumber';
import { getGeneratedRandomGameboardPlayerInitialStates } from '../../common/utils/getGeneratedRandomGameboardPlayerInitialStates/getGeneratedRandomGameboardPlayerInitialStates';
import { getPreviousHitDirectionNotSunkenShip } from '../../common/utils/getPreviousHitDirectionNotSunkenShip/getPreviousHitDirectionNotSunkenShip';
import { getRandomIndexFromArray } from '../../common/utils/getRandomIndexFromArray/getRandomIndexFromArray';
import { isShipOrEmptyGameboardValue } from '../../common/utils/isShipOrEmptyGameboardValue/isShipOrEmptyGameboardValue';
import { isValidComputerTurn } from '../../common/utils/isValidComputerTurn/isValidComputerTurn';
import { mediaQueryMediumScreen } from '../../styles/partials/export.module.scss';
import { GameboardsWrapper } from './components/GameboardsWrapper/GameboardsWrapper';
import { GameLogicModals } from './components/GameLogicModals/GameLogicModals';
import './Game.scss';
import {
  handleMove, handleNewGameAgainstComputerWithRandomGameboardInitialStates, selectAmountOfColumns, selectAmountOfRows, selectComputerHitTurnAgainCount, selectDelayAfterComputerMoveEqualOrBiggerThanMediaQuery,
  selectDelayAfterComputerMoveSmallerThanMediaQuery,
  selectDelayAfterPlayerMoveVsComputerEqualOrBiggerThanMediaQuery,
  selectDelayAfterPlayerMoveVsComputerSmallerThanMediaQuery, selectDelayBeforeComputerMove, selectDelayBeforeComputerMoveAgain, selectDelayBeforeComputerMoveAgainEqualOrBiggerThanMediaQuery,
  selectDelayBeforeComputerMoveAgainSmallerThanMediaQuery, selectDelayBeforeComputerMoveEqualOrBiggerThanMediaQuery,
  selectDelayBeforeComputerMoveSmallerThanMediaQuery, selectDisableComputerMove, selectEmptyGameboardValue, selectFreemissGameboardValue, selectGameboardPlayerOne, selectGameboardPlayerOneInitialState,
  selectGameboardPlayerTwoInitialState, selectHitGameboardValue, selectHorizontalDirectionValue, selectIsGameOver, selectIsGameStarted, selectIsPlayerOneTurn, selectIsPlayerTwoComputer, selectMissGameboardValue, selectPreviousHitComputerCellsNotSunkenShip,
  selectPreviousHitDirectionNotSunkenShip, selectPreviousHitDirectionNotSunkenShipHorizontalValue,
  selectPreviousHitDirectionNotSunkenShipVerticalValue, selectShipLengthPropertyText, selectShipNamePropertyText, selectShips, selectShowGameboards,
  selectVerticalDirectionValue, updateDelayAfterComputerMove,
  updateDelayAfterPlayerMoveVsComputer,
  updateDelayBeforeComputerMove,
  updateDelayBeforeComputerMoveAgain, updateGameboardPlayerOne,
  updateGameboardPlayerTwo,
  updatePreviousHitDirectionNotSunkenShip
} from './gameSlice';

export const Game = () => {
  const dispatch = useDispatch();
  const amountOfRows = useSelector(selectAmountOfRows);
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const computerHitTurnAgainCount = useSelector(selectComputerHitTurnAgainCount);
  const delayAfterComputerMoveEqualOrBiggerThanMediaQuery = useSelector(selectDelayAfterComputerMoveEqualOrBiggerThanMediaQuery);
  const delayAfterComputerMoveSmallerThanMediaQuery = useSelector(selectDelayAfterComputerMoveSmallerThanMediaQuery);
  const delayAfterPlayerMoveVsComputerEqualOrBiggerThanMediaQuery = useSelector(selectDelayAfterPlayerMoveVsComputerEqualOrBiggerThanMediaQuery);
  const delayAfterPlayerMoveVsComputerSmallerThanMediaQuery = useSelector(selectDelayAfterPlayerMoveVsComputerSmallerThanMediaQuery);
  const delayBeforeComputerMove = useSelector(selectDelayBeforeComputerMove);
  const delayBeforeComputerMoveAgain = useSelector(selectDelayBeforeComputerMoveAgain);
  const delayBeforeComputerMoveAgainEqualOrBiggerThanMediaQuery = useSelector(selectDelayBeforeComputerMoveAgainEqualOrBiggerThanMediaQuery);
  const delayBeforeComputerMoveAgainSmallerThanMediaQuery = useSelector(selectDelayBeforeComputerMoveAgainSmallerThanMediaQuery);
  const delayBeforeComputerMoveEqualOrBiggerThanMediaQuery = useSelector(selectDelayBeforeComputerMoveEqualOrBiggerThanMediaQuery);
  const delayBeforeComputerMoveSmallerThanMediaQuery = useSelector(selectDelayBeforeComputerMoveSmallerThanMediaQuery);
  const disableComputerMove = useSelector(selectDisableComputerMove);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const freemissGameboardValue = useSelector(selectFreemissGameboardValue);;
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const gameboardPlayerOneInitialState = useSelector(selectGameboardPlayerOneInitialState);
  const gameboardPlayerTwoInitialState = useSelector(selectGameboardPlayerTwoInitialState);
  const hitGameboardValue = useSelector(selectHitGameboardValue);
  const horizontalDirectionValue = useSelector(selectHorizontalDirectionValue);
  const isGameOver = useSelector(selectIsGameOver);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const missGameboardValue = useSelector(selectMissGameboardValue);
  const previousHitComputerCellsNotSunkenShip = useSelector(selectPreviousHitComputerCellsNotSunkenShip)
  const previousHitDirectionNotSunkenShip = useSelector(selectPreviousHitDirectionNotSunkenShip);
  const previousHitDirectionNotSunkenShipHorizontalValue = useSelector(selectPreviousHitDirectionNotSunkenShipHorizontalValue);
  const previousHitDirectionNotSunkenShipVerticalValue = useSelector(selectPreviousHitDirectionNotSunkenShipVerticalValue);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const ships = useSelector(selectShips);
  const showGameboards = useSelector(selectShowGameboards);
  const verticalDirectionValue = useSelector(selectVerticalDirectionValue);
  
  const isSmallScreen = !(useMediaQuery(`(min-width: ${mediaQueryMediumScreen})`));

  // start a game against the computer with randomly generated initial gameboard states for the player and computer when a user visits the webpage
  useEffect(() => {
    dispatch(handleNewGameAgainstComputerWithRandomGameboardInitialStates(getGeneratedRandomGameboardPlayerInitialStates(
      createRandomGameboard, 
      amountOfRows, 
      amountOfColumns,
      emptyGameboardValue,
      generateRandomValidShipPosition,
      ships,
      horizontalDirectionValue,
      verticalDirectionValue,
      shipNamePropertyText,
      shipLengthPropertyText
    )));
  }, [dispatch, amountOfRows, amountOfColumns, emptyGameboardValue, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText]);

  // scroll to top when a game has started, when switching player turns or when a game has finished 
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [isGameStarted, isPlayerOneTurn, isGameOver]);

  useEffect(() => {
    dispatch(updateGameboardPlayerOne(gameboardPlayerOneInitialState));
  }, [dispatch, gameboardPlayerOneInitialState]);

  useEffect(() => {
    dispatch(updateGameboardPlayerTwo(gameboardPlayerTwoInitialState));
  }, [dispatch, gameboardPlayerTwoInitialState]);

  // update the delays used before and after computer or player moves depending on the screen width
  useEffect(() => {
    if (isSmallScreen) {
      dispatch(updateDelayAfterComputerMove(delayAfterComputerMoveSmallerThanMediaQuery));
      dispatch(updateDelayAfterPlayerMoveVsComputer(delayAfterPlayerMoveVsComputerSmallerThanMediaQuery));
      dispatch(updateDelayBeforeComputerMove(delayBeforeComputerMoveSmallerThanMediaQuery));
      dispatch(updateDelayBeforeComputerMoveAgain(delayBeforeComputerMoveAgainSmallerThanMediaQuery));
    } else {
      dispatch(updateDelayAfterComputerMove(delayAfterComputerMoveEqualOrBiggerThanMediaQuery));
      dispatch(updateDelayAfterPlayerMoveVsComputer(delayAfterPlayerMoveVsComputerEqualOrBiggerThanMediaQuery));
      dispatch(updateDelayBeforeComputerMove(delayBeforeComputerMoveEqualOrBiggerThanMediaQuery));
      dispatch(updateDelayBeforeComputerMoveAgain(delayBeforeComputerMoveAgainEqualOrBiggerThanMediaQuery));
    }
  });

  useEffect(() => {
    if (isValidComputerTurn(isPlayerTwoComputer, isPlayerOneTurn, isGameStarted, isGameOver, disableComputerMove)) {
      if (!computerHitTurnAgainCount) {
        const computerTurnTimeout = setTimeout(() => {
          handleComputerMove();
        }, delayBeforeComputerMove);
        return () => clearTimeout(computerTurnTimeout);
      };
      // if the computer hits a ship increase the "virtual thinking time" for the next step
      if (computerHitTurnAgainCount) {
        const computerTurnTimeout = setTimeout(() => {
          handleComputerMove();
        }, delayBeforeComputerMoveAgain);
        return () => clearTimeout(computerTurnTimeout);
      };
    };
  });

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

  const handleComputerMove = () => {
    if (previousHitComputerCellsNotSunkenShip.length === 0) {
      const randomGameboardComputerCellNumber = getAvailableRandomGameboardComputerCellNumber(
        getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips,
        gameboardPlayerOne,
        hitGameboardValue,
        missGameboardValue,
        freemissGameboardValue,
        getRandomIndexFromArray,
      );
      dispatch(handleMove(+randomGameboardComputerCellNumber));
    } else if (previousHitComputerCellsNotSunkenShip.length > 0) {
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
      dispatch(handleMove(+smartComputerMoveIndex));
    };
  };

  return (
    <div className="game">
      {
          showGameboards
        ? 
          <GameboardsWrapper />
        : null 
      }
      <GameLogicModals />
    </div>
  );
};
