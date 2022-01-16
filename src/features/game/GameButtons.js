import { Button } from "./Button/Button";
import './GameButtons.scss';

export const GameButtons = ({
  handleButtonNewGame,
  isPlayerTwoComputer,
  handleButtonGameSwitchPlayerTurn,
  disableButtonGameSwitchPlayerTurn
}) => {
  return (
    <>
      <Button buttonOnClick={handleButtonNewGame}>New game</Button>
      {
          isPlayerTwoComputer
        ? null
        : 
          <Button 
            buttonOnClick={handleButtonGameSwitchPlayerTurn} 
            disableButton={disableButtonGameSwitchPlayerTurn}
          >
            Hand over
          </Button>
      }
    </>
  );
};
