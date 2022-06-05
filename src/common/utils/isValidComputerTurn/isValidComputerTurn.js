export const isValidComputerTurn = (
  isPlayerTwoComputer,
  isPlayerOneTurn,
  isGameStarted,
  isGameOver,
  disableComputerMove
) => {
  if (isPlayerTwoComputer && !isPlayerOneTurn && isGameStarted && !isGameOver && !disableComputerMove) {
    return true;
  }
  return false;
};
