import "./NewGameButton.scss";

export const NewGameButton = ({ 
  handleNewGame
}) => {
  return (
    <div 
      className="ui-button new-game-button"
      onClick={handleNewGame}
    >
      New game
    </div>
  );
};
