import { useState } from "react";
import { Button } from "./Button/Button";
import { replaceAllSpecificArrayValuesWithNewValue } from './replaceAllSpecificArrayValuesWithNewValue/replaceAllSpecificArrayValuesWithNewValue';

export const GameboardPlayerGridShipPlacement = ({ 
  gameboardPlayer, 
  amountOfColumns, 
  amountOfRows, 
  hitGameboardValue, 
  missGameboardValue,
  freemissGameboardValue,
  emptyGameboardValue,
  handlePlayerMove,
  isPlayerTurn,
  isPlayerOne,
  isPlayerTwoComputer,
  isGameStarted,
  isGameOver,
  gameboardPreGameActive,
  disablePlayerMove,
  ships,
  createGameboard,
  gameboardPlayerInitialState,
  setGameboardPlayerInitialState,
  sortArrayOfObjectsBasedOnAPropertyValue,
  isValidShipPosition,
  isEmptyGameboardCell,
  checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
  horizontalDirectionValue,
  verticalDirectionValue,
  getFirstDigitOfNumber,
  checkIfShipIsNotSurroundedByAnotherShip,
  calculateShipCoords
}) => {
  const gameboardPlayerShipPlacementInitialState = createGameboard(amountOfRows, amountOfColumns, "empty");

  const [gameboardPlayerShipPlacement, setGameboardPlayerShipPlacement] = useState(gameboardPlayerShipPlacementInitialState);
  const [shipPlacementDirection, setShipPlacementdirection] = useState(horizontalDirectionValue);

  // setGameboardPlayerInitialState(gameboardShipPlacement);
  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");

  const [currentIndexShipToBePlaced, setCurrentIndexShipToBePlaced] = useState(0);

  const toggleShipPlacementDirection = () => {
    if (shipPlacementDirection === horizontalDirectionValue) {
      setShipPlacementdirection(verticalDirectionValue);
    } else if (shipPlacementDirection === verticalDirectionValue) {
      setShipPlacementdirection(horizontalDirectionValue);
    }
  }

  const resetGameboardPlayerShipPlacement = () => {
    setGameboardPlayerShipPlacement(gameboardPlayerShipPlacementInitialState);
    setShipPlacementdirection(horizontalDirectionValue);
    setCurrentIndexShipToBePlaced(0);
  }

  const removeLastShipPlacementFromGameboard = () => {
    const removedLastShipPlacementFromGameboard = replaceAllSpecificArrayValuesWithNewValue(
      gameboardPlayerShipPlacement, 
      sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced - 1].name,
      "empty"
    );
    setGameboardPlayerShipPlacement(removedLastShipPlacementFromGameboard);
  }

  const undoLastShipPlacement = () => {
    if (currentIndexShipToBePlaced > 0) {
      removeLastShipPlacementFromGameboard();
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced - 1);
    }
  }

  const handleShipPlacementOnGameboard = (id) => {
    let validIdForShipLength;
    if (shipPlacementDirection === horizontalDirectionValue) {
      let firstDigitOfStartIndex;
      if (id < 10) {
        firstDigitOfStartIndex = 0;
      } else {
        firstDigitOfStartIndex = getFirstDigitOfNumber(id)
      };
      console.log(firstDigitOfStartIndex);
      const lastIdOfRow = firstDigitOfStartIndex.toString() + 9;
      if ((+id + (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1)) > lastIdOfRow) {
        validIdForShipLength = (lastIdOfRow - (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1));
      } else {
        validIdForShipLength = id
      }
    }

    if (shipPlacementDirection === verticalDirectionValue) {
      let firstDigitOfStartIndex;
      if (id < 10) {
        firstDigitOfStartIndex = 0;
      } else {
        firstDigitOfStartIndex = getFirstDigitOfNumber(id);
      };
      const lastDigitOfstartIndex = id % 10;
      if ((firstDigitOfStartIndex + (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1)) > 9) {
        validIdForShipLength = +((9 - (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1)).toString() + lastDigitOfstartIndex);
      } else {
        validIdForShipLength = id
      }
    }
    let shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength, validIdForShipLength, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);

    // check if ship with id is valid ship position
    const shipPlacementIsValid = isValidShipPosition(
      isEmptyGameboardCell(gameboardPlayerShipPlacement, validIdForShipLength, emptyGameboardValue),
      checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(validIdForShipLength, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced], shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
      checkIfShipIsNotSurroundedByAnotherShip(gameboardPlayerShipPlacement, shipCoordsShipPlacement, emptyGameboardValue) 
    )

    // if succesful placement
    if (shipPlacementIsValid) {
      // setGameboardPlayerShipPlacement(placeShipOnGameboard(gameboardPlayerShipPlacement, id, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].name));
      
      
      let copyGameboardPlayerShipPlacement = [...gameboardPlayerShipPlacement];
      
      for (const coord of shipCoordsShipPlacement) {
        copyGameboardPlayerShipPlacement[coord] = sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].name;
      }
      setGameboardPlayerShipPlacement(copyGameboardPlayerShipPlacement);
      // setHoveredIds([...hoveredIds].slice(0, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced + 1].shipLength));
      setHoveredIds([]);
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced + 1);

    } else if (currentIndexShipToBePlaced === sortedShipsLengthDescendingOrder.length) {
      // set initial gameboard to this gameboard for player
      // go to next screen
    }
  }

  // console.log(currentIndexShipToBePlaced);
  // console.log(sortedShipsLengthDescendingOrder);

  const [hoveredIds, setHoveredIds] = useState([]);

  const isAValidShipPlacement = (id) => {
    if (currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length) {
      return (isValidShipPosition(
        isEmptyGameboardCell(gameboardPlayerShipPlacement, id, emptyGameboardValue),
        checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(id, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced], shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
        checkIfShipIsNotSurroundedByAnotherShip(gameboardPlayerShipPlacement, hoveredIds, emptyGameboardValue) 
      ));
    }
    return false;
  }

  const handleOnMouseEnter = (id, currentIndexShipToBePlaced) => {
    let validIdForShipLength;
    if (shipPlacementDirection === horizontalDirectionValue) {
      let firstDigitOfStartIndex;
      if (id < 10) {
        firstDigitOfStartIndex = 0;
      } else {
        firstDigitOfStartIndex = getFirstDigitOfNumber(id)
      };
      console.log(firstDigitOfStartIndex);
      const lastIdOfRow = firstDigitOfStartIndex.toString() + 9;
      if ((+id + (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1)) > lastIdOfRow) {
        validIdForShipLength = (lastIdOfRow - (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1));
      } else {
        validIdForShipLength = id
      }
    }

    if (shipPlacementDirection === verticalDirectionValue) {
      let firstDigitOfStartIndex;
      if (id < 10) {
        firstDigitOfStartIndex = 0;
      } else {
        firstDigitOfStartIndex = getFirstDigitOfNumber(id);
      };
      const lastDigitOfstartIndex = id % 10;
      if ((firstDigitOfStartIndex + (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1)) > 9) {
        validIdForShipLength = +((9 - (sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength - 1)).toString() + lastDigitOfstartIndex);
      } else {
        validIdForShipLength = id
      }
    }

    const shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength, validIdForShipLength, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    // const shipPlacementIsValid = isValidShipPosition(
    //   isEmptyGameboardCell(gameboardPlayerShipPlacement, validIdForShipLength, emptyGameboardValue),
    //   checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(validIdForShipLength, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced], shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
    //   checkIfShipIsNotSurroundedByAnotherShip(gameboardPlayerShipPlacement, shipCoordsShipPlacement, emptyGameboardValue) 
    // ) 
    // console.log(shipPlacementIsValid);
    // if (shipPlacementIsValid) {
      // setHoveredIds(shipCoordsShipPlacement);
    // }
    setHoveredIds(shipCoordsShipPlacement);
  };

  const handleOnMouseLeave = (id) => {
    setHoveredIds([]);
  }
  // console.log(hoveredIds);

  return (
    <>
      <div>
        {
            (currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length)
          ? `Place ship ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].name} with size ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength}`
          : "All ships have been placed"
        }
      </div>
      {/* <button onClick={toggleShipPlacementDirection}>{shipPlacementDirection}</button> */}
      <Button buttonOnClick={toggleShipPlacementDirection}>{shipPlacementDirection}</Button>
      <Button 
        buttonOnClick={resetGameboardPlayerShipPlacement}
        disableButtonGameSwitchPlayerTurn={currentIndexShipToBePlaced === 0 ? true : false}
      >
        Reset
      </Button>
      <Button 
        buttonOnClick={undoLastShipPlacement}
        disableButtonGameSwitchPlayerTurn={currentIndexShipToBePlaced === 0 ? true : false}
      >
        Undo
      </Button>
      <div className="game">
        <div className="gameboard-wrapper">
          <div 
            className={`gameboard gameboard-player`}
            style={{
              gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, 
              gridTemplateRows: `repeat(${amountOfRows}, auto)`,
            }}
          >
            {gameboardPlayerShipPlacement.map((cell, id) => (
              <div 
                key={id} 
                id={id} 
                className={`gameboard-cell ${
                      gameboardPlayerShipPlacement[id] === hitGameboardValue 
                    ? "hit" 
                    : gameboardPlayerShipPlacement[id] === missGameboardValue 
                    ? "miss" 
                    : gameboardPlayerShipPlacement[id] === freemissGameboardValue 
                    ? "freemiss" 
                    : gameboardPlayerShipPlacement[id] === emptyGameboardValue
                    ? "empty"
                    // : "ship"
                    : isGameOver
                    ? "ship"
                    : isPlayerOne && isPlayerTwoComputer 
                    ? "" 
                    : !isPlayerOne && isPlayerTwoComputer 
                    ? "ship" 
                    : !isPlayerTurn 
                    ? "ship" 
                    : !isGameStarted && !isGameOver
                    ? "ship"
                    : ""
                  } ${
                      (hoveredIds.indexOf(+id) > -1)
                    ? isAValidShipPlacement(hoveredIds[0])
                    ? "hovered-valid-ship-position"
                    : "hovered-invalid-ship-position"
                    : ""
                  }`
                } 
                onClick={
                    (currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length)
                  ? (() => handleShipPlacementOnGameboard(+id))
                  : null
                }
                onMouseEnter={
                    (currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length)
                  ? () => handleOnMouseEnter(+id, currentIndexShipToBePlaced)
                  : null
                }
                onMouseLeave={() => handleOnMouseLeave(+id)}
              >
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
