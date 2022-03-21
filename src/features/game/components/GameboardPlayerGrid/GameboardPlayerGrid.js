import './GameboardPlayerGrid.scss';
import { useDispatch, useSelector } from 'react-redux';
import { 
  selectAmountOfColumns, 
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
  selectMissGameboardValue,
  handlePlayerMove,
  selectShipNamePropertyText,
} from '../../gameSlice';
import { getArrayOfArrayOfObjectsKeyValues } from '../../../../common/utils/getArrayOfArrayOfObjectsKeyValues/getArrayOfArrayOfObjectsKeyValues';
import { ships } from '../../ships';
import { isValidPlayerTurn } from '../../../../common/utils/isValidPlayerTurn/isValidPlayerTurn';

export const GameboardPlayerGrid = ({ isPlayerOne }) => {
  const dispatch = useDispatch();
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const amountOfRows = useSelector(selectAmountOfRows);
  const hitGameboardValue = useSelector(selectHitGameboardValue);
  const missGameboardValue = useSelector(selectMissGameboardValue);
  const freemissGameboardValue = useSelector(selectFreemissGameboardValue);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const disablePlayerMove = useSelector(selectDisablePlayerMove);
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);

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
      isPlayerOne,
      isPlayerTwoComputer
    )) {
      dispatch(handlePlayerMove({ isPlayerOne, index: +id }))
    } 
  }
  
  return (
    <div 
      className={`gameboard ${disablePlayerMove ? "gameboard-inactive" : isPlayerTurn && isGameStarted ? "" : "gameboard-inactive"} gameboard-player`}
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
              ? "" 
              : !isPlayerOne && isPlayerTwoComputer 
              ? "ship" 
              : !isPlayerTurn 
              ? "ship" 
              : !isGameStarted && !isGameOver
              ? "ship"
              : ""
            }`
          } 
          onClick={(event) => onGameboardCellClicked(+event.target.id)}
        >
        </div>
      ))}
    </div>
  );
};
