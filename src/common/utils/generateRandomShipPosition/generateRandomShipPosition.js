export const generateRandomShipPosition = (randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, shipLengthPropertyText, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords) => {
  const startIndex = getRandomIndexFromArray(randomGameboard);
  const direction = getRandomArrayValue([horizontalDirectionValue, verticalDirectionValue]);
  const shipCoords = calculateShipCoords(ship[shipLengthPropertyText], startIndex, direction, horizontalDirectionValue, verticalDirectionValue);
  return ({
    startIndex,
    direction,
    shipCoords
  });
}
