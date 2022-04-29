import { useDispatch, useSelector } from 'react-redux';
import { getArrayOfArrayOfObjectsKeyValues } from '../../../../common/utils/getArrayOfArrayOfObjectsKeyValues/getArrayOfArrayOfObjectsKeyValues';
import { isValidPlayerTurn } from '../../../../common/utils/isValidPlayerTurn/isValidPlayerTurn';
import {
  handlePlayerMove, selectAmountOfColumns,
  selectAmountOfRows,
  selectDisablePlayerMove,
  selectEmptyGameboardValue,
  selectFreemissGameboardValue,
  selectGameboardPlayerOne,
  selectGameboardPlayerTwo,
  selectHitGameboardValue,
  selectIsGameOver,
  selectIsGameStarted,
  selectIsPlayerOneTurn,
  selectIsPlayerTwoComputer,
  selectMissGameboardValue, selectShipNamePropertyText,
  selectShips
} from '../../gameSlice';
import './GameboardPlayerGrid.scss';

export const GameboardPlayerGrid = ({ isPlayerOne }) => {
  const dispatch = useDispatch();
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const amountOfRows = useSelector(selectAmountOfRows);
  const disablePlayerMove = useSelector(selectDisablePlayerMove);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const freemissGameboardValue = useSelector(selectFreemissGameboardValue);
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);
  const hitGameboardValue = useSelector(selectHitGameboardValue);
  const isGameOver = useSelector(selectIsGameOver);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const missGameboardValue = useSelector(selectMissGameboardValue);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const ships = useSelector(selectShips);

  const getGameboardPlayer = (isPlayerOne) => {
    if (isPlayerOne) {
      return gameboardPlayerTwo;
    } else {
      return gameboardPlayerOne;
    };
  };

  const getIsPlayerTurn = (isPlayerOne) => {
    if (isPlayerOne) {
      return isPlayerOneTurn;
    } else {
      return !isPlayerOneTurn;
    };
  };

  const gameboardPlayer = getGameboardPlayer(isPlayerOne);
  const isPlayerTurn = getIsPlayerTurn(isPlayerOne);
  const arrayOfShipNames = getArrayOfArrayOfObjectsKeyValues(ships, shipNamePropertyText);

  const onGameboardCellClicked = (id) => {
    if (isValidPlayerTurn(
      gameboardPlayer, 
      +id,
      isPlayerTurn, 
      isGameStarted,
      isGameOver,
      emptyGameboardValue,
      arrayOfShipNames,
      disablePlayerMove,
      isPlayerOneTurn,
      isPlayerTwoComputer
    )) {
      dispatch(handlePlayerMove(+id));
    }; 
  };
  
  return (
    <div className="gameboard-wrapper">
      <div 
        className={`gameboard ${disablePlayerMove ? "gameboard-inactive" : isPlayerTurn && isGameStarted ? "gameboard-active" : "gameboard-inactive"} gameboard-player`}
        style={{
          gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, 
          gridTemplateRows: `repeat(${amountOfRows}, auto)`,
        }}
      >
        {gameboardPlayer.map((cell, id) => (
          <div 
            key={id} 
            id={id} 
            className={`gameboard-cell ${
                  gameboardPlayer[id] === hitGameboardValue 
                ? "hit" 
                : gameboardPlayer[id] === missGameboardValue 
                ? "miss" 
                : gameboardPlayer[id] === freemissGameboardValue 
                ? "freemiss" 
                : gameboardPlayer[id] === emptyGameboardValue
                ? "empty"
                : isGameOver
                ? "ship"
                : isPlayerOne && isPlayerTwoComputer 
                ? "empty" 
                : !isPlayerOne && isPlayerTwoComputer 
                ? "ship" 
                : !isPlayerTurn 
                ? "ship" 
                : !isGameStarted && !isGameOver
                ? "ship"
                : "empty"
              }`
            } 
            onClick={(event) => onGameboardCellClicked(+event.target.id)}
          >
          </div>
        ))}
      </div>
    </div>
  );
};
