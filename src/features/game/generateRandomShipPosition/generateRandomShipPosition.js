export const generateRandomShipPosition = (randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords) => {
  const startIndex = getRandomIndexFromArray(randomGameboard);
  const direction = getRandomArrayValue([horizontalDirectionValue, verticalDirectionValue]);
  const shipCoords = calculateShipCoords(ship.shipLength, startIndex, direction, horizontalDirectionValue, verticalDirectionValue);
  return ({
    startIndex,
    direction,
    shipCoords
  });
}
