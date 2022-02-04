import { Button } from "../../../../common/components/Button/Button";
import './GameButtonsShipPlacement.scss';

export const GameButtonsShipPlacement = ({
  resetGameboardPlayerShipPlacement,
  isAllShipsPlaced,
  currentIndexShipToBePlaced,
  randomizeGameboardPlayerShipPlacement,
  undoLastShipPlacement,
  toggleShipPlacementDirection,
  shipPlacementDirection
}) => {
  return (
    <>
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
      <Button buttonOnClick={randomizeGameboardPlayerShipPlacement}>
        <div className="button-text-wrapper">
          <div>Randomize</div>
          <i className="fas fa-sync-alt randomise-icon"></i>
        </div>
      </Button>
      <Button 
        buttonOnClick={undoLastShipPlacement}
        disableButton={currentIndexShipToBePlaced === 0 ? true : false}
      >
        Undo
      </Button>
      <Button buttonOnClick={toggleShipPlacementDirection}>
        {shipPlacementDirection}
      </Button>
    </>
  );
};
