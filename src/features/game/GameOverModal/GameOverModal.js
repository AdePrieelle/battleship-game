import './GameOverModal.scss';

export const GameOverModal = ({ 
  playerWonGame, 
  computerWonGame, 
  setShowGameOverModal,
  handleNewGameCloseGameOverModal
}) => {
  return (
  <>
    <div className="game-over-modal-overlay"></div>
    <div className="game-over-modal">
      <button 
        className="game-over-modal-close-button" 
        onClick={() => setShowGameOverModal(false)}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="game-over-modal-content">
        <div className="game-over-modal-winner">
          {`${playerWonGame ? "Player" : computerWonGame ? "Computer" : "Noone"} won the game!`}
        </div>
        <button 
          className="game-over-modal-play-again-button"
          onClick={() => handleNewGameCloseGameOverModal()}
        >
          Play again
        </button>
      </div>
    </div>
  </>
  );
};
