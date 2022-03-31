export const getPlayerName = (isPlayerOne, isPlayerTwoComputer, playerOneName, playerTwoName, computerName) => {
  if (isPlayerOne) {
    return playerOneName;
  } else if (!isPlayerOne && !isPlayerTwoComputer) {
    return playerTwoName;
  } else {
    return computerName;
  };
};
