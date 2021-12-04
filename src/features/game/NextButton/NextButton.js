export const NextButton = ({ 
  handleNextButtonOnClick,
  isGameStarted,
  isGameOver
}) => {
  return (
    <div 
      className={`ui-button ${isGameStarted || isGameOver ? "ui-button-disabled" : ""} start-game-button`}
      onClick={handleNextButtonOnClick}
    >
      Next
    </div>
  );
};
