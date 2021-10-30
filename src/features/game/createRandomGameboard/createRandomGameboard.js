import { checkIfShipIsNotSurroundedByAnotherShip } from '../checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip'
import { createGameboard } from '../createGameboard/createGameboard';
import { getRandomIndexFromArray } from '../getRandomIndexFromArray/getRandomIndexFromArray';
import { getRandomArrayValue } from '../getRandomArrayValue/getRandomArrayValue';
import { calculateShipCoords } from '../calculateShipCoords/calculateShipCoords';
import { sortArrayOfObjectsBasedOnAPropertyValue } from '../sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue';

export const createRandomGameboard = (amountRows, amountColumns, emptyGameboardValue, setShipCoords) => {
  
  const randomGameboard = createGameboard(amountRows, amountColumns, emptyGameboardValue);
  const horizontalDirectionValue = "horizontal";
  const verticalDirectionValue = "vertical";

  let ships = [
    {
      name: "d1",
      shipLength: 1,
    },
    {
      name: "d2",
      shipLength: 1,
    },
    {
      name: "d3",
      shipLength: 1,
    },
    {
      name: "d4",
      shipLength: 1,
    },
    {
      name: "s1",
      shipLength: 2,
    },
    {
      name: "s2",
      shipLength: 2,
    },
    {
      name: "s3",
      shipLength: 2,
    },
    {
      name: "b1",
      shipLength: 3,
    },
    {
      name: "b2",
      shipLength: 3,
    },
    {
      name: "c1",
      shipLength: 4,
    },
  ]


  const checkIfRandomStartIndexShipCoordsDirectionIsNotOutOfBounds = (randomStartIndex, ship, direction, horizontalDirectionValue, verticalDirectionValue) => {
    if (direction === horizontalDirectionValue) {
      const lastDigitOfRandomStartIndex = randomStartIndex % 10;
      if (lastDigitOfRandomStartIndex + (ship.shipLength - 1) <= 9) {
        return true;
      }
      return false;
    }

    if (direction === verticalDirectionValue) {
      let firstDigitOfRandomStartIndex;
      if (randomStartIndex < 10) {
        firstDigitOfRandomStartIndex = randomStartIndex;
      } else {
        const strRandomStartIndex = randomStartIndex.toString();
        const firstCharacterRandomStartIndex = strRandomStartIndex.slice(0, 1);
        firstDigitOfRandomStartIndex = +firstCharacterRandomStartIndex;
      }
      if (firstDigitOfRandomStartIndex + (ship.shipLength - 1) <= 9) {
        return true;
      }
      return false;
    }
    return false;
  }

  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");

  for (const ship of sortedShipsLengthDescendingOrder) {
    let startIndex = getRandomIndexFromArray(randomGameboard);
    let direction = getRandomArrayValue([horizontalDirectionValue, verticalDirectionValue]);
    let shipCoords = calculateShipCoords(ship.shipLength, startIndex, direction, horizontalDirectionValue, verticalDirectionValue);

    // let timesTriedToPlaceShip = 1;

    while (
          randomGameboard[startIndex] !== emptyGameboardValue
      ||  !checkIfRandomStartIndexShipCoordsDirectionIsNotOutOfBounds(startIndex, ship, direction, horizontalDirectionValue, verticalDirectionValue)
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
