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

export const createRandomGameboard = (amountRows, amountColumns, emptyGameboardValue, generateRandomValidShipPosition, ships) => {
  const randomGameboard = createGameboard(amountRows, amountColumns, emptyGameboardValue);
  const horizontalDirectionValue = "horizontal";
  const verticalDirectionValue = "vertical";
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
      createRandomGameboard,
      ships
    );
    
    for (const coord of randomValidShipPosition.shipCoords) {
      randomGameboard[coord] = ship.name;
    }
  }
  return randomGameboard;
}
