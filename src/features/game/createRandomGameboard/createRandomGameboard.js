import { checkIfShipIsNotSurroundedByAnotherShip } from '../checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip'
import { createGameboard } from '../createGameboard/createGameboard';
import { getRandomIndexFromArray } from '../getRandomIndexFromArray/getRandomIndexFromArray';
import { getRandomArrayValue } from '../getRandomArrayValue/getRandomArrayValue';
import { increaseArrayValuesWithNumber } from '../increaseArrayValuesWithNumber/increaseArrayValuesWithNumber';

export const createRandomGameboard = (amountRows, amountColumns, emptyGameboardValue, setShipCoords) => {
  
  const randomGameboard = createGameboard(amountRows, amountColumns, emptyGameboardValue);

  let ships = [
    {
      shipName: "d1",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "d2",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "d3",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "d4",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "s1",
      directions: {
        horizontal: [0, 1],
        vertical: [0, 10]
      }
    },
    {
      shipName: "s2",
      directions: {
        horizontal: [0, 1],
        vertical: [0, 10]
      }
    },
    {
      shipName: "s3",
      directions: {
        horizontal: [0, 1],
        vertical: [0, 10]
      }
    },
    {
      shipName: "b1",
      directions: {
        horizontal: [0, 1, 2],
        vertical: [0, 10, 20]
      }
    },
    {
      shipName: "b2",
      directions: {
        horizontal: [0, 1, 2],
        vertical: [0, 10, 20]
      }
    },
    {
      shipName: "b3",
      directions: {
        horizontal: [0, 1, 2],
        vertical: [0, 10, 20]
      }
    },
    {
      shipName: "c1",
      directions: {
        horizontal: [0, 1, 2, 3],
        vertical: [0, 10, 20, 30]
      }
    },
  ]

  const sortShipsLengthDescendingOrder = (ships) => {
    const sortedShipsLengthDescrendingOrder = ships.sort((one, other) => {
      return (other.directions.horizontal.length - one.directions.horizontal.length);
    });
    return sortedShipsLengthDescrendingOrder;
  }

  const sortedShipsLengthDescendingOrder = sortShipsLengthDescendingOrder(ships);

  const checkIfRandomStartIndexShipCoordsDirectionIsNotOutOfBounds = (randomStartIndex, ship, direction) => {
    if (direction === "horizontal") {
      const lastDigitOfRandomStartIndex = randomStartIndex % 10;
      if (lastDigitOfRandomStartIndex + (ship.directions.horizontal.length - 1) <= 9) {
        return true;
      }
      return false;
    }

    if (direction === "vertical") {
      let firstDigitOfRandomStartIndex;
      if (randomStartIndex < 10) {
        firstDigitOfRandomStartIndex = randomStartIndex;
      } else {
        const strRandomStartIndex = randomStartIndex.toString();
        const firstCharacterRandomStartIndex = strRandomStartIndex.slice(0, 1);
        firstDigitOfRandomStartIndex = +firstCharacterRandomStartIndex;
      }
      if (firstDigitOfRandomStartIndex + (ship.directions.vertical.length - 1) <= 9) {
        return true;
      }
      return false;
    }
    return false;
  }

  for (const ship of sortedShipsLengthDescendingOrder) {
    // console.table(copyGameboardState);
    let startIndex = getRandomIndexFromArray(randomGameboard);

    // console.log(startIndex);

    let direction = getRandomArrayValue(["horizontal", "vertical"]);
    
    // console.log(direction);


    // let timesTriedToPlaceShip = 1;
    // Maybe at a max timesTriedToPlaceShip variable to restart createRandomGameboard function
    // if it takes too long to find a valid random start index 

    let shipDirectionCoordsOfShip = ship.directions[direction];

    // console.log(shipDirectionCoordsOfShip);

    let generatedRandomShipDirectionCoordsOfShip = increaseArrayValuesWithNumber(shipDirectionCoordsOfShip, startIndex);

    // console.log(generatedRandomShipDirectionCoordsOfShip);


    // if startIndex is not equal to emptyGameboardValue 
    // and not out of bounds 
    // and next laying cells are not a ship

    // console.log(`${ship.shipName} startIndex ${startIndex} is not empty: ${gameboardState[startIndex] !== emptyGameboardValue}`);
    // console.log(`${ship.shipName} is not out of bounds: ${checkIfRandomStartIndexShipCoordsDirectionIsNotOutOfBounds(startIndex, ship, direction)}`);
    // console.log(`${ship.shipName} is not surrounded by other ships: ${checkIfShipIsNotSurroundedByAnotherShip(gameboardState, generatedRandomShipDirectionCoordsOfShip, emptyGameboardValue)}`);
    // console.log(gameboardState[startIndex]);

    // let timesTriedToPlaceShip = 1;

    while (
          randomGameboard[startIndex] !== emptyGameboardValue
      ||  !checkIfRandomStartIndexShipCoordsDirectionIsNotOutOfBounds(startIndex, ship, direction)
      ||  !checkIfShipIsNotSurroundedByAnotherShip(randomGameboard, generatedRandomShipDirectionCoordsOfShip, emptyGameboardValue)
    ) {
      // if (timesTriedToPlaceShip >= 4) {
      //   createRandomGameboard(10, 10, "empty");
      // }
      startIndex = getRandomIndexFromArray(randomGameboard);
      // console.log(startIndex);
      // console.log("newRandomNumer" + randomStartIndex + ship.shipName);

      direction = getRandomArrayValue(["horizontal", "vertical"]);
      // console.log(direction);

      shipDirectionCoordsOfShip = ship.directions[direction];

      generatedRandomShipDirectionCoordsOfShip = increaseArrayValuesWithNumber(shipDirectionCoordsOfShip, startIndex);
      // console.log(generatedRandomShipDirectionCoordsOfShip);



      // console.log(randomDirection);
      
      
      // timesTriedToPlaceShip += 1;
      
    }


    // console.log("times tried to place ship " + ship.shipName + " : " + timesTriedToPlaceShip);

    // const shipDirectionCoordsOfShip = ship.directions[direction];
    // console.log(shipDirectionCoordsOfShip);

    // const generatedRandomShipDirectionCoordsOfShip = shipDirectionCoordsOfShip.map(coord => coord + startIndex);
    // console.log(generatedRandomShipDirectionCoordsOfShip);

    for (const coord of generatedRandomShipDirectionCoordsOfShip) {
      // console.log(generatedRandomShipDirectionCoordsOfShip);
      // console.log(ship.shipName);
      randomGameboard[coord] = ship.shipName;
    }

    

  }

  // console.table(copyGameboardState);
  // console.log(copyGameboardState);

  return true;
}
