export const GameboardPlayerGrid = ({ 
  gameboardPlayer, 
  amountOfColumns, 
  amountOfRows, 
  hitGameboardValue, 
  missGameboardValue,
  freemissGameboardValue,
  handlePlayerMove,
  isPlayerTurn,
  isGameStarted
}) => {
  return (
    <div 
      className={`gameboard ${isPlayerTurn && isGameStarted ? "" : "gameboard-inactive"} gameboard-player`}
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
              : gameboardPlayer[id] === "empty"
              ? ""
              : "ship"
            }`
          } 
          onClick={handlePlayerMove}
        >
        </div>
      ))}
    </div>
  );
};
