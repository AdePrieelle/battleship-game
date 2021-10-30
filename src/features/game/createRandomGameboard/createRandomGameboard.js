import { checkIfShipIsNotSurroundedByAnotherShip } from '../checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip'
import { createGameboard } from '../createGameboard/createGameboard';
import { getRandomIndexFromArray } from '../getRandomIndexFromArray/getRandomIndexFromArray';
import { getRandomArrayValue } from '../getRandomArrayValue/getRandomArrayValue';
import { calculateShipCoords } from '../calculateShipCoords/calculateShipCoords';
import { sortArrayOfObjectsBasedOnAPropertyValue } from '../sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue';
import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from '../checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds';
import { getFirstDigitOfNumber } from '../getFirstDigitOfNumber/getFirstDigitOfNumber';

export const createRandomGameboard = (amountRows, amountColumns, emptyGameboardValue, ships) => {
  
  const randomGameboard = createGameboard(amountRows, amountColumns, emptyGameboardValue);
  const horizontalDirectionValue = "horizontal";
  const verticalDirectionValue = "vertical";

  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");

  for (const ship of sortedShipsLengthDescendingOrder) {
    let startIndex = getRandomIndexFromArray(randomGameboard);
    let direction = getRandomArrayValue([horizontalDirectionValue, verticalDirectionValue]);
    let shipCoords = calculateShipCoords(ship.shipLength, startIndex, direction, horizontalDirectionValue, verticalDirectionValue);

    // let timesTriedToPlaceShip = 1;

    while (
          randomGameboard[startIndex] !== emptyGameboardValue
      ||  !checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(startIndex, ship, direction, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber)
      ||  !checkIfShipIsNotSurroundedByAnotherShip(randomGameboard, shipCoords, emptyGameboardValue)
    ) {
      // if (timesTriedToPlaceShip >= 4) {
      //   createRandomGameboard(10, 10, "empty");
      // }
      startIndex = getRandomIndexFromArray(randomGameboard);
      direction = getRandomArrayValue([horizontalDirectionValue, verticalDirectionValue]);
      shipCoords = calculateShipCoords(ship.shipLength, startIndex, direction, horizontalDirectionValue, verticalDirectionValue);
      
      // timesTriedToPlaceShip += 1;
      
    }

    for (const coord of shipCoords) {
      randomGameboard[coord] = ship.name;
    }
  }

  // console.table(copyGameboardState);
  // console.log(copyGameboardState);

  return true;
}
