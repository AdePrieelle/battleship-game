export const isSunkenShipAfterHit = (
  gameboard,
  index,
  hitGameboardValue,
  isSunkenShip
) => {
  let copyGameboard = [...gameboard];
  const shipName = copyGameboard[index];
  copyGameboard[index] = hitGameboardValue;
  const isShipNameSunken = isSunkenShip(copyGameboard, shipName);
  return isShipNameSunken;
};
