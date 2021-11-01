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

export const createRandomGameboard = (amountRows, amountColumns, emptyGameboardValue, ships) => {
  
  const randomGameboard = createGameboard(amountRows, amountColumns, emptyGameboardValue);
  const horizontalDirectionValue = "horizontal";
  const verticalDirectionValue = "vertical";

  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");


  for (const ship of sortedShipsLengthDescendingOrder) {
    let randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);

    // let timesTriedToPlaceShip = 1;

    while (!isValidShipPosition(
        randomGameboard, 
        emptyGameboardValue, 
        randomShipPosition, 
        ship, 
        horizontalDirectionValue, 
        verticalDirectionValue, 
        getFirstDigitOfNumber, 
        isEmptyGameboardCell,
        checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds, 
        checkIfShipIsNotSurroundedByAnotherShip
      )
    ) {
      // if (timesTriedToPlaceShip >= 4) {
      //   createRandomGameboard(10, 10, "empty");
      // }
      randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);
      
      // timesTriedToPlaceShip += 1;
      
    }

    for (const coord of randomShipPosition.shipCoords) {
      randomGameboard[coord] = ship.name;
    }

  }

  // console.table(randomGameboard);
  // console.log(randomGameboard);

  return true;
}
