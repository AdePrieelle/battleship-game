export const isValidComputerTurn = (
  isPlayerTurn,
  isGameStarted,
  isGameOver
) => {
  if (!isPlayerTurn && isGameStarted && !isGameOver) {
    return true;
  }
  return false;
};
