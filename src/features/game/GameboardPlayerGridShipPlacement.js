import { useEffect, useState } from "react";
import { Button } from "./Button/Button";
import { replaceAllSpecificArrayValuesWithNewValue } from './replaceAllSpecificArrayValuesWithNewValue/replaceAllSpecificArrayValuesWithNewValue';
import { createRandomGameboard } from "./createRandomGameboard/createRandomGameboard";
import { generateRandomValidShipPosition } from "./generateRandomValidShipPosition/generateRandomValidShipPosition";
import { ships } from "./ships";
import { createGameboard } from "./createGameboard/createGameboard";
import { sortArrayOfObjectsBasedOnAPropertyValue } from "./sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue";
import { isValidShipPosition } from "./isValidShipPosition/isValidShipPosition";
import { isEmptyGameboardCell } from "./isEmptyGameboardCell/isEmptyGameboardCell";
import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from "./checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds";
import { getFirstDigitOfNumber } from "./getFirstDigitOfNumber/getFirstDigitOfNumber";
import { checkIfShipIsNotSurroundedByAnotherShip } from "./checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip";
import { calculateShipCoords } from "./calculateShipCoords/calculateShipCoords";

export const GameboardPlayerGridShipPlacement = ({ 
  amountOfColumns, 
  amountOfRows, 
  emptyGameboardValue,
  horizontalDirectionValue,
  verticalDirectionValue,
  setGameboardPlayerInitialState,
  setShowModalPreGameGameboardPlayerGridShipPlacement,
  handleStartGame,
  isPlayerTwoComputer,
  setNextModal = false
}) => {
  const gameboardPlayerShipPlacementInitialState = createGameboard(amountOfRows, amountOfColumns, "empty");

  const [gameboardPlayerShipPlacement, setGameboardPlayerShipPlacement] = useState(gameboardPlayerShipPlacementInitialState);
  const [shipPlacementDirection, setShipPlacementdirection] = useState(horizontalDirectionValue);

  // setGameboardPlayerInitialState(gameboardShipPlacement);
  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");

  const [currentIndexShipToBePlaced, setCurrentIndexShipToBePlaced] = useState(0);
  const [isAllShipsPlaced, setIsAllShipsPlaced] = useState(false);

  useEffect(() => {
    if (currentIndexShipToBePlaced === (sortedShipsLengthDescendingOrder.length)) {
      setIsAllShipsPlaced(true);
    }
  }, [currentIndexShipToBePlaced, sortedShipsLengthDescendingOrder]);

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
    setIsAllShipsPlaced(false);
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
      setIsAllShipsPlaced(false);
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
      setIsAllShipsPlaced(true);

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
    
    setHoveredIds(shipCoordsShipPlacement);
  };

  const handleOnMouseLeave = (id) => {
    setHoveredIds([]);
  }

  const randomizeGameboardPlayerShipPlacement = () => {
    setCurrentIndexShipToBePlaced(0);
    setGameboardPlayerShipPlacement(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard))
    setIsAllShipsPlaced(true);
  }

  const handleModalGameboardPlayerGridShipPlacement = () => {
    setGameboardPlayerInitialState(gameboardPlayerShipPlacement);
    setShowModalPreGameGameboardPlayerGridShipPlacement(false);
    if (setNextModal) {
      setNextModal(true);
    }
    if (isPlayerTwoComputer) {
      handleStartGame();
    }
  }

  return (
    <>
      <div>
        {
            ((currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length) && !isAllShipsPlaced)
          ? `Place ship ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].name} with size ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength}`
          : "All ships have been placed"
        }
      </div>
      <Button buttonOnClick={toggleShipPlacementDirection}>{shipPlacementDirection}</Button>
      <Button 
        buttonOnClick={resetGameboardPlayerShipPlacement}
        disableButton={
            isAllShipsPlaced 
          ? false
          : currentIndexShipToBePlaced === 0 
          ? true 
          : false
        }
      >
        Reset
      </Button>
      <Button 
        buttonOnClick={undoLastShipPlacement}
        disableButton={currentIndexShipToBePlaced === 0 ? true : false}
      >
        Undo
      </Button>
      <Button buttonOnClick={randomizeGameboardPlayerShipPlacement}>
        <div className="button-text-wrapper">
          <div>Randomise</div>
          <i className="fas fa-sync-alt randomise-icon"></i>
        </div>
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
                      gameboardPlayerShipPlacement[id] === emptyGameboardValue
                    ? "empty"
                    : "ship"
                  } ${
                      (hoveredIds.indexOf(+id) > -1)
                    ? isAValidShipPlacement(hoveredIds[0])
                    ? "hovered-valid-ship-position"
                    : "hovered-invalid-ship-position"
                    : ""
                  }`
                } 
                onClick={
                    ((currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length) && !isAllShipsPlaced)
                  ? (() => handleShipPlacementOnGameboard(+id))
                  : null
                }
                onMouseEnter={
                  ((currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length) && !isAllShipsPlaced)
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

      <Button 
        buttonOnClick={handleModalGameboardPlayerGridShipPlacement}
        disableButton={isAllShipsPlaced ? false : true}
      >
        {
          isPlayerTwoComputer
          ? "Start game"
          : "Next"
        }
      </Button>
    </>
  );
};
