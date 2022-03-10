import './GameboardPlayerGrid.scss';
import { useSelector } from 'react-redux';
import { 
  selectAmountOfColumns, 
  selectAmountOfRows, 
  selectDisablePlayerMove, 
  selectEmptyGameboardValue, 
  selectFreemissGameboardValue, 
  selectHitGameboardValue, 
  selectIsGameOver, 
  selectIsGameStarted, 
  selectIsPlayerTwoComputer, 
  selectMissGameboardValue 
} from '../../gameSlice';

export const GameboardPlayerGrid = ({ 
  gameboardPlayer, 
  
  handlePlayerMove = null,
  isPlayerTurn,
  isPlayerOne,

}) => {
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
          onClick={(disablePlayerMove || (!isPlayerOne && isPlayerTwoComputer)) ? null : handlePlayerMove}
        >
        </div>
      ))}
    </div>
  );
};
