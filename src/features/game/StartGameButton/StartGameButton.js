import "./StartGameButton.scss";

export const StartGameButton = ({ 
  handleStartGame
}) => {
  return (
    <div 
      className="ui-button start-game-button"
      onClick={handleStartGame}
    >
      Start game
    </div>
  );
};
