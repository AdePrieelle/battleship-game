export const isAllShipsSunken = (gameboard, ships, shipNamePropertyText) => {
  for (const ship of ships) {
    if (gameboard.includes(ship[shipNamePropertyText])) {
      return false;
    }
  }
  return true;
};
