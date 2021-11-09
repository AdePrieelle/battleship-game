export const isAllShipsSunken = (gameboard, ships) => {
  for (const ship of ships) {
    if (gameboard.includes(ship.name)) {
      return false;
    }
  }
  return true;
};
