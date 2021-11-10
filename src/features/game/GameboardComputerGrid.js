export const GameboardComputerGrid = ({
  gameboardComputer,
  amountOfColumns,
  amountOfRows,
  hitGameboardValue,
  missGameboardValue,
  freemissGameboardValue
}) => {
  return (
    <div className="gameboard gameboard-computer" style={{gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, gridTemplateRows: `repeat(${amountOfRows}, auto)`}}>
      {gameboardComputer.map((cell, id) => (
        <div 
          key={id} 
          id={id} 
          className={`gameboard-cell ${
                gameboardComputer[id] === hitGameboardValue 
              ? " hit" 
              : gameboardComputer[id] === missGameboardValue 
              ? " miss" 
              : gameboardComputer[id] === freemissGameboardValue 
              ? " freemiss" 
              : ""
            }`
          } 
        >
        </div>
      ))}
    </div>
  );
};
