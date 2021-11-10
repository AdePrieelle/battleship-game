export const GameboardPlayerGrid = ({ 
  gameboardPlayer, 
  amountOfColumns, 
  amountOfRows, 
  hitGameboardValue, 
  missGameboardValue,
  freemissGameboardValue,
  handlePlayerMove 
}) => {
  
  return (
    <div className="gameboard gameboard-player" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
      {gameboardPlayer.map((cell, id) => (
          <div 
            key={id} 
            id={id} 
            className={`gameboard-cell ${
                  gameboardPlayer[id] === hitGameboardValue 
                ? " hit" 
                : gameboardPlayer[id] === missGameboardValue 
                ? " miss" 
                : gameboardPlayer[id] === freemissGameboardValue 
                ? " freemiss" 
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
