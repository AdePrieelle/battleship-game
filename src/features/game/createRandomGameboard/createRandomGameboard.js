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
import { generateRandomValidShipPosition } from '../generateRandomValidShipPosition/generateRandomValidShipPosition';

export const createRandomGameboard = (amountRows, amountColumns, emptyGameboardValue, ships) => {
  
  const randomGameboard = createGameboard(amountRows, amountColumns, emptyGameboardValue);
  const horizontalDirectionValue = "horizontal";
  const verticalDirectionValue = "vertical";

  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");
  // console.log("render createRandomGameboard");

  // start this part again if timesTriedToPlaceShip more than max times to try to place a ship
  // outer: for (const ship of sortedShipsLengthDescendingOrder) {
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
    
    
    // let randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);

    // let timesTriedToPlaceShip = 1;
    // // console.log(`render ${ship.name}`);

    // while (!isValidShipPosition(
    //   isEmptyGameboardCell(randomGameboard, randomShipPosition.startIndex, emptyGameboardValue),
    //   checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(randomShipPosition.startIndex, ship, randomShipPosition.direction, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
    //   checkIfShipIsNotSurroundedByAnotherShip(randomGameboard, randomShipPosition.shipCoords, emptyGameboardValue) 
    // )) {
    //   if (timesTriedToPlaceShip >= 25) {
    //     // console.log(`restarting createRandomGameboard, timesTriedToPlaceShip ${ship.name}: ${timesTriedToPlaceShip}`);
    //     return createRandomGameboard(10, 10, emptyGameboardValue, ships);
    //     // break outer;
    //   } else {
    //     randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);
    //     timesTriedToPlaceShip += 1;
    //   }
      
    // }
    // console.log(timesTriedToPlaceShip);

    
    // for (const coord of randomShipPosition.shipCoords) {
    //   randomGameboard[coord] = ship.name;
    // }

    for (const coord of randomValidShipPosition.shipCoords) {
      randomGameboard[coord] = ship.name;
    }

  }

  // console.table(randomGameboard);
  // console.log(randomGameboard);

  return true;
}
