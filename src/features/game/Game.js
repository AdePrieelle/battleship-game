import { useEffect } from 'react';
import { getRandomIndexFromArray } from '../../common/utils/getRandomIndexFromArray/getRandomIndexFromArray';
import { getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips } from '../../common/utils/getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips/getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips';
import { getAvailableRandomGameboardComputerCellNumber } from '../../common/utils/getAvailableRandomGameboardComputerCellNumber/getAvailableRandomGameboardComputerCellNumber';
import { isValidComputerTurn } from '../../common/utils/isValidComputerTurn/isValidComputerTurn';
import { getPreviousHitDirectionNotSunkenShip } from '../../common/utils/getPreviousHitDirectionNotSunkenShip/getPreviousHitDirectionNotSunkenShip';
import { getAvailableNextSmartComputerMovesAfterHit } from '../../common/utils/getAvailableNextSmartComputerMovesAfterHit/getAvailableNextSmartComputerMovesAfterHit';
import { isShipOrEmptyGameboardValue } from '../../common/utils/isShipOrEmptyGameboardValue/isShipOrEmptyGameboardValue';
import { GameLogicModals } from './components/GameLogicModals/GameLogicModals';
import { GameboardsWrapper } from './components/GameboardsWrapper/GameboardsWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectHitGameboardValue,
  selectMissGameboardValue,
  selectFreemissGameboardValue,
  selectIsPlayerOneTurn,
  selectComputerHitTurnAgainCount,
  selectIsGameStarted,
  selectIsGameOver,
  selectIsPlayerTwoComputer,
  selectGameboardPlayerOneInitialState,
  selectGameboardPlayerTwoInitialState,
  selectGameboardPlayerOne,
  selectPreviousHitDirectionNotSunkenShipHorizontalValue,
  selectPreviousHitDirectionNotSunkenShipVerticalValue,
  selectPreviousHitComputerCellsNotSunkenShip,
  selectPreviousHitDirectionNotSunkenShip,
  selectShowGameboards,
  updateGameboardPlayerOne,
  updateGameboardPlayerTwo,
  updatePreviousHitDirectionNotSunkenShip,
  handleMove,
} from './gameSlice';
import './Game.scss';

export const Game = () => {
  const dispatch = useDispatch();

  const hitGameboardValue = useSelector(selectHitGameboardValue);
  const missGameboardValue = useSelector(selectMissGameboardValue);
  const freemissGameboardValue = useSelector(selectFreemissGameboardValue);;
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const computerHitTurnAgainCount = useSelector(selectComputerHitTurnAgainCount);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const gameboardPlayerOneInitialState = useSelector(selectGameboardPlayerOneInitialState);
  const gameboardPlayerTwoInitialState = useSelector(selectGameboardPlayerTwoInitialState);
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const previousHitDirectionNotSunkenShipHorizontalValue = useSelector(selectPreviousHitDirectionNotSunkenShipHorizontalValue);
  const previousHitDirectionNotSunkenShipVerticalValue = useSelector(selectPreviousHitDirectionNotSunkenShipVerticalValue);
  const previousHitComputerCellsNotSunkenShip = useSelector(selectPreviousHitComputerCellsNotSunkenShip)
  const previousHitDirectionNotSunkenShip = useSelector(selectPreviousHitDirectionNotSunkenShip);
  const showGameboards = useSelector(selectShowGameboards);

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
        dispatch(handleMove(+randomGameboardComputerCellNumber));
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
      dispatch(handleMove(+smartComputerMoveIndex));
    }
  }

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
