import "./StartGameButton.scss";

export const StartGameButton = ({ 
  handleStartGame,
  isGameStarted,
  isGameOver
}) => {
  return (
    <div 
      className={`ui-button ${isGameStarted || isGameOver ? "ui-button-disabled" : ""} start-game-button`}
      onClick={handleStartGame}
    >
      Start game
    </div>
  );
};
