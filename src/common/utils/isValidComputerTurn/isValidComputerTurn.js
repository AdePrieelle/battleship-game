export const isValidComputerTurn = (
  isPlayerTwoComputer,
  isPlayerOneTurn,
  isGameStarted,
  isGameOver
) => {
  if (isPlayerTwoComputer && !isPlayerOneTurn && isGameStarted && !isGameOver) {
    return true;
  }
  return false;
};
