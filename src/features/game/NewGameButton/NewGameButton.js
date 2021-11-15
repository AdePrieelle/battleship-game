import "./NewGameButton.scss";

export const NewGameButton = ({ 
  handleNewGame,
  isGameStarted,
  isGameOver
}) => {
  return (
    <div 
      className={`ui-button ${!isGameStarted && !isGameOver ? "ui-button-disabled" : ""} new-game-button`}
      onClick={handleNewGame}
    >
      New game
    </div>
  );
};
