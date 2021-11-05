export const isSunkenShip = (gameboard, shipName) => {
  return !gameboard.includes(shipName);
}
