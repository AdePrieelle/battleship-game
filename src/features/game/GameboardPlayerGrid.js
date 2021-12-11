export const GameboardPlayerGrid = ({ 
  gameboardPlayer, 
  amountOfColumns, 
  amountOfRows, 
  hitGameboardValue, 
  missGameboardValue,
  freemissGameboardValue,
  emptyGameboardValue,
  handlePlayerMove,
  isPlayerTurn,
  isPlayerOne,
  isPlayerTwoComputer,
  isGameStarted,
  isGameOver
}) => {
  return (
    <div 
      className={`gameboard ${isPlayerTurn && isGameStarted ? "" : isGameStarted ? "gameboard-inactive" : isGameOver ? "gameboard-inactive" : ""} gameboard-player`}
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
              // : "ship"
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
          onClick={handlePlayerMove}
        >
        </div>
      ))}
    </div>
  );
};
