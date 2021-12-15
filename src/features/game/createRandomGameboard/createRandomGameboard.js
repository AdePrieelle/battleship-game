import { checkIfShipIsNotSurroundedByAnotherShip } from '../checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip'
import { createGameboard } from '../createGameboard/createGameboard';
import { getRandomIndexFromArray } from '../getRandomIndexFromArray/getRandomIndexFromArray';
import { getRandomArrayValue } from '../getRandomArrayValue/getRandomArrayValue';
import { calculateShipCoords } from '../calculateShipCoords/calculateShipCoords';
import { sortArrayOfObjectsBasedOnAPropertyValue } from '../sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue';
import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from '../checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds';
import { getFirstDigitOfNumber } from '../getFirstDigitOfNumber/getFirstDigitOfNumber';
import { generateRandomShipPosition } from '../generateRandomShipPosition/generateRandomShipPosition';
import { isValidShipPosition } from '../isValidShipPosition/isValidShipPosition';
import { isEmptyGameboardCell } from '../isEmptyGameboardCell/isEmptyGameboardCell';

export const createRandomGameboard = (amountRows, amountColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, callback) => {
  const randomGameboard = createGameboard(amountRows, amountColumns, emptyGameboardValue);
  const maxAmountTimesTriedToPlaceShip = 25;
  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");

  for (const ship of sortedShipsLengthDescendingOrder) {
    const randomValidShipPosition = generateRandomValidShipPosition(
      generateRandomShipPosition,
      randomGameboard, 
      ship, 
      horizontalDirectionValue, 
      verticalDirectionValue, 
      getRandomIndexFromArray, 
      getRandomArrayValue, 
      calculateShipCoords,
      isValidShipPosition,
      isEmptyGameboardCell,
      emptyGameboardValue,
      checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
      getFirstDigitOfNumber,
      checkIfShipIsNotSurroundedByAnotherShip,
      maxAmountTimesTriedToPlaceShip
    );

    // if it took too long to find a randomValidShipPosition for a specific ship restart ship placements again to prevent an infinite loop
    if (!randomValidShipPosition) {
      return callback(amountRows, amountColumns, emptyGameboardValue, generateRandomValidShipPosition, ships);
    }
    
    for (const coord of randomValidShipPosition.shipCoords) {
      randomGameboard[coord] = ship.name;
    }
  }
  return randomGameboard;
}
