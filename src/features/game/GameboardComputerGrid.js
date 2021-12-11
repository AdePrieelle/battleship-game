export const GameboardComputerGrid = ({
  gameboardComputer,
  amountOfColumns,
  amountOfRows,
  hitGameboardValue,
  missGameboardValue,
  freemissGameboardValue,
  emptyGameboardValue,
  isPlayerTurn,
  isGameStarted,
  isGameOver
}) => {
  return (
    <div 
      className={`gameboard ${isPlayerTurn && isGameStarted ? "" : isGameStarted ? "gameboard-inactive" : isGameOver ? "gameboard-inactive" : ""} gameboard-computer`}
      style={{
        gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, 
        gridTemplateRows: `repeat(${amountOfRows}, auto)`, 
      }}
    >
      {gameboardComputer.map((cell, id) => (
        <div 
          key={id} 
          id={id} 
          className={`gameboard-cell ${
                gameboardComputer[id] === hitGameboardValue 
              ? "hit" 
              : gameboardComputer[id] === missGameboardValue 
              ? "miss" 
              : gameboardComputer[id] === freemissGameboardValue 
              ? "freemiss" 
              : gameboardComputer[id] === emptyGameboardValue
              ? "empty"
              : "ship"
            }`
          } 
        >
        </div>
      ))}
    </div>
  );
};
