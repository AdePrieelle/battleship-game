import "./CreateNewRandomGameboardButton.scss";

export const CreateNewRandomGameboardButton = ({ 
  setGameboardComputerInitialState,
  createRandomGameboard,
  amountOfColumns,
  amountOfRows,
  emptyGameboardValue,
  generateRandomValidShipPosition,
  ships,
  isGameStarted,
  isGameOver,
  horizontalDirectionValue,
  verticalDirectionValue
}) => {
  return (
    <div 
      className={`ui-button ${isGameStarted || isGameOver ? "ui-button-disabled" : ""} create-new-random-gameboard-button`}
      onClick={() => setGameboardComputerInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard))}
    >
      <div className="create-new-random-gameboard-button-text-icon-wrapper">
        <div className="create-new-random-gameboard-button-text">
          Randomise
        </div>
        <div className="create-new-random-gameboard-button-icon-wrapper">
          <i className="fas fa-sync-alt randomise-icon"></i>
        </div>
      </div>
    </div>
  );
};
