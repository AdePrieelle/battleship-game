import './GameboardPlayerGrid.scss';

export const GameboardPlayerGrid = ({ 
  gameboardPlayer, 
  amountOfColumns, 
  amountOfRows, 
  hitGameboardValue, 
  missGameboardValue,
  freemissGameboardValue,
  emptyGameboardValue,
  handlePlayerMove = null,
  isPlayerTurn,
  isPlayerOne,
  isPlayerTwoComputer,
  isGameStarted,
  isGameOver,
  disablePlayerMove
}) => {
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