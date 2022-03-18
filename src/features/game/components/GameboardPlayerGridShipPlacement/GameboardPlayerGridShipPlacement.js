import { useEffect, useState } from "react";
import { ships } from "../../ships";
import { Button } from "../../../../common/components/Button/Button";
import { ButtonsWrapper } from "../../../../common/components/ButtonsWrapper/ButtonsWrapper";
import { GameButtonsShipPlacement } from "../GameButtonsShipPlacement/GameButtonsShipPlacement";
import { replaceAllSpecificArrayValuesWithNewValue } from '../../../../common/utils/replaceAllSpecificArrayValuesWithNewValue/replaceAllSpecificArrayValuesWithNewValue';
import { createRandomGameboard } from "../../../../common/utils/createRandomGameboard/createRandomGameboard";
import { generateRandomValidShipPosition } from "../../../../common/utils/generateRandomValidShipPosition/generateRandomValidShipPosition";
import { createGameboard } from "../../../../common/utils/createGameboard/createGameboard";
import { sortArrayOfObjectsBasedOnAPropertyValue } from "../../../../common/utils/sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue";
import { isValidShipPosition } from "../../../../common/utils/isValidShipPosition/isValidShipPosition";
import { isEmptyGameboardCell } from "../../../../common/utils/isEmptyGameboardCell/isEmptyGameboardCell";
import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from "../../../../common/utils/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds";
import { getFirstDigitOfNumber } from "../../../../common/utils/getFirstDigitOfNumber/getFirstDigitOfNumber";
import { checkIfShipIsNotSurroundedByAnotherShip } from "../../../../common/utils/checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip";
import { calculateShipCoords } from "../../../../common/utils/calculateShipCoords/calculateShipCoords";
import { getArrayWithArrayOfIndexValuesReplacedByNewValue } from '../../../../common/utils/getArrayWithArrayOfIndexValuesReplacedByNewValue/getArrayWithArrayOfIndexValuesReplacedByNewValue';
import { getToggleValue } from "../../../../common/utils/getToggleValue/getToggleValue";
import { getValidStartIdShipNotOutOfBounds } from "../../../../common/utils/getValidStartIdShipNotOutOfBounds/getValidStartIdShipNotOutOfBounds";
import { getRowNumberOfIndexTwoDimensionalArray } from "../../../../common/utils/getRowNumberOfIndexTwoDimensionalArray/getRowNumberOfIndexTwoDimensionalArray";
import { getLastIdInRowTwoDimensionalArray } from "../../../../common/utils/getLastIdInRowTwoDimensionalArray/getLastIdInRowTwoDimensionalArray";
import { getLastDigitOfNumber } from "../../../../common/utils/getLastDigitOfNumber/getLastDigitOfNumber";
import './GameboardPlayerGridShipPlacement.scss';
import { useDispatch, useSelector } from "react-redux";
import { 
  handleStartGame,
  selectAmountOfColumns, 
  selectAmountOfRows, 
  selectButtonNextStepText, 
  selectEmptyGameboardValue,
  selectHorizontalDirectionValue,
  selectIsPlayerTwoComputer,
  selectPlayerOneName,
  selectPlayerTwoName,
  selectShipLengthPropertyText,
  selectShipNamePropertyText,
  selectVerticalDirectionValue,
  updateGameboardPlayerOneInitialState,
  updateGameboardPlayerTwoInitialState,
  updateShowGameboards,
  updateShowModalPreGameGameboardPlayerOneGridShipPlacement,
  updateShowModalPreGameGameboardPlayerTwoGridShipPlacement,
  updateShowModalPreGameSwitchTurnToPlayerOne,
  updateShowModalPreGameSwitchTurnToPlayerTwoGameboard
} from "../../gameSlice";

export const GameboardPlayerGridShipPlacement = ({ isPlayerOne }) => {
  const dispatch = useDispatch();
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const amountOfRows = useSelector(selectAmountOfRows);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const horizontalDirectionValue = useSelector(selectHorizontalDirectionValue);
  const verticalDirectionValue = useSelector(selectVerticalDirectionValue);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const buttonNextStepText = useSelector(selectButtonNextStepText);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const playerOneName = useSelector(selectPlayerOneName);
  const playerTwoName = useSelector(selectPlayerTwoName);

  const gameboardPlayerShipPlacementInitialState = createGameboard(amountOfRows, amountOfColumns, emptyGameboardValue);
  const [gameboardPlayerShipPlacement, setGameboardPlayerShipPlacement] = useState(gameboardPlayerShipPlacementInitialState);
  const [shipPlacementDirection, setShipPlacementdirection] = useState(horizontalDirectionValue);
  const [currentIndexShipToBePlaced, setCurrentIndexShipToBePlaced] = useState(0);
  const [isAllShipsPlaced, setIsAllShipsPlaced] = useState(false);
  const [hoveredIds, setHoveredIds] = useState([]);
  
  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, shipLengthPropertyText);

  useEffect(() => {
    if (currentIndexShipToBePlaced === (sortedShipsLengthDescendingOrder.length)) {
      setIsAllShipsPlaced(true);
    } else {
      setIsAllShipsPlaced(false);
    }
  }, [currentIndexShipToBePlaced, sortedShipsLengthDescendingOrder]);

  const toggleShipPlacementDirection = () => {
    const toggledShipPlacementDirectionValue = getToggleValue(shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    setShipPlacementdirection(toggledShipPlacementDirectionValue);
  }

  const resetGameboardPlayerShipPlacement = () => {
    setGameboardPlayerShipPlacement(gameboardPlayerShipPlacementInitialState);
    setShipPlacementdirection(horizontalDirectionValue);
    setCurrentIndexShipToBePlaced(0);
  }

  const removeLastShipPlacementFromGameboard = () => {
    const removedLastShipPlacementFromGameboard = replaceAllSpecificArrayValuesWithNewValue(
      gameboardPlayerShipPlacement, 
      sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced - 1][shipNamePropertyText],
      emptyGameboardValue
    );
    setGameboardPlayerShipPlacement(removedLastShipPlacementFromGameboard);
  }
  
  const undoLastShipPlacement = () => {
    if (currentIndexShipToBePlaced > 0) {
      removeLastShipPlacementFromGameboard();
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced - 1);
    }
  }

  const getAValidStartIdShipNotOutOfBounds = (id) => getValidStartIdShipNotOutOfBounds(
    id,
    getRowNumberOfIndexTwoDimensionalArray,
    getFirstDigitOfNumber,
    checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    shipPlacementDirection,
    horizontalDirectionValue,
    getLastIdInRowTwoDimensionalArray,
    amountOfRows,
    amountOfColumns,
    sortedShipsLengthDescendingOrder,
    currentIndexShipToBePlaced,
    verticalDirectionValue,
    shipLengthPropertyText,
    getLastDigitOfNumber
  );
  
  const isAValidShipPlacement = (id, shipCoordsArray) => {
    return (isValidShipPosition(
      isEmptyGameboardCell(gameboardPlayerShipPlacement, id, emptyGameboardValue),
      checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(id, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced], shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, shipLengthPropertyText, getFirstDigitOfNumber),
      checkIfShipIsNotSurroundedByAnotherShip(gameboardPlayerShipPlacement, shipCoordsArray, emptyGameboardValue) 
    ));
  }

  const handleShipPlacementOnGameboard = (id) => {
    const validStartIdShipNotOutOfBounds = getAValidStartIdShipNotOutOfBounds(id);
    let shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText], validStartIdShipNotOutOfBounds, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    // if succesful placement
    if (isAValidShipPlacement(validStartIdShipNotOutOfBounds, shipCoordsShipPlacement)) {
      const gameboardPlayerShipPlacementWithPlacedShip = getArrayWithArrayOfIndexValuesReplacedByNewValue(gameboardPlayerShipPlacement, shipCoordsShipPlacement, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipNamePropertyText]);
      setGameboardPlayerShipPlacement(gameboardPlayerShipPlacementWithPlacedShip);
      setHoveredIds([]);
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced + 1);
    }
  }

  const handleOnMouseEnter = (id) => {
    const validStartIdShipNotOutOfBounds = getAValidStartIdShipNotOutOfBounds(id);
    const shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText], validStartIdShipNotOutOfBounds, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    setHoveredIds(shipCoordsShipPlacement);
  };

  const handleOnMouseLeave = () => {
    setHoveredIds([]);
  }

  const randomizeGameboardPlayerShipPlacement = () => {
    setCurrentIndexShipToBePlaced(sortedShipsLengthDescendingOrder.length);
    setGameboardPlayerShipPlacement(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard))
  }

  const handleModalGameboardPlayerGridShipPlacement = () => {
    if (isPlayerOne) {
      dispatch(updateGameboardPlayerOneInitialState(gameboardPlayerShipPlacement));
      dispatch(updateShowModalPreGameGameboardPlayerOneGridShipPlacement(false));
      if (isPlayerTwoComputer) {
        dispatch(handleStartGame());
        dispatch(updateShowGameboards(true));
      } else {
        dispatch(updateShowModalPreGameSwitchTurnToPlayerTwoGameboard(true));
      }
    } else {
      dispatch(updateGameboardPlayerTwoInitialState(gameboardPlayerShipPlacement));
      dispatch(updateShowModalPreGameGameboardPlayerTwoGridShipPlacement(false));
      dispatch(updateShowModalPreGameSwitchTurnToPlayerOne(true));
    }
  }

  const isShipPlacementFinished = () => {
    return (!((currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length) && !isAllShipsPlaced));
  }

  return (
    <div className="gameboard-player-grid-ship-placement">
      <h1 className="player-name-title">{`${isPlayerOne ? playerOneName : playerTwoName}'s ship placements`}</h1>
      <div className="ship-placement-message">
        {
            !isShipPlacementFinished()
          ? `Place ship ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipNamePropertyText]} with size ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText]}`
          : "All ships have been placed"
        }
      </div>
      <div className="game-buttons-ship-placement-wrapper">
        <ButtonsWrapper>
          <GameButtonsShipPlacement
            resetGameboardPlayerShipPlacement={resetGameboardPlayerShipPlacement}
            isAllShipsPlaced={isAllShipsPlaced}
            currentIndexShipToBePlaced={currentIndexShipToBePlaced}
            randomizeGameboardPlayerShipPlacement={randomizeGameboardPlayerShipPlacement}
            undoLastShipPlacement={undoLastShipPlacement}
            toggleShipPlacementDirection={toggleShipPlacementDirection}
            shipPlacementDirection={shipPlacementDirection}
          />
        </ButtonsWrapper>
      </div>
      <div className="gameboard-placement-wrapper">
        <div 
          className={`gameboard gameboard-player`}
          style={{
            gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, 
            gridTemplateRows: `repeat(${amountOfRows}, auto)`,
          }}
          onMouseLeave={() => handleOnMouseLeave()}
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
                  ? isAValidShipPlacement(hoveredIds[0], hoveredIds)
                  ? "hovered-valid-ship-position"
                  : "hovered-invalid-ship-position"
                  : ""
                }`
              } 
              onClick={
                  !isShipPlacementFinished()
                ? (() => handleShipPlacementOnGameboard(+id))
                : null
              }
              onMouseEnter={
                  !isShipPlacementFinished()
                ? () => handleOnMouseEnter(+id)
                : null
              }
              onMouseLeave={() => handleOnMouseLeave}
            >
            </div>
          ))}
        </div>
      </div>
      <Button 
        buttonOnClick={handleModalGameboardPlayerGridShipPlacement}
        disableButton={isAllShipsPlaced ? false : true}
      >
        {
          isPlayerTwoComputer
          ? "Start game"
          : buttonNextStepText
        }
      </Button>
    </div>
  );
};
