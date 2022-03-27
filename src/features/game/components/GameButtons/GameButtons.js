import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/components/Button/Button";
import {
  handleButtonGameSwitchPlayerTurn, handleButtonNewGame, selectDisableButtonGameSwitchPlayerTurn, selectIsPlayerTwoComputer
} from "../../gameSlice";
import './GameButtons.scss';

export const GameButtons = () => {
  const dispatch = useDispatch();
  const disableButtonGameSwitchPlayerTurn = useSelector(selectDisableButtonGameSwitchPlayerTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);

  return (
    <>
      <Button buttonOnClick={() => dispatch(handleButtonNewGame())}>New game</Button>
      {
          isPlayerTwoComputer
        ? null
        : 
          <Button 
            buttonOnClick={() => dispatch(handleButtonGameSwitchPlayerTurn())} 
            disableButton={disableButtonGameSwitchPlayerTurn}
          >
            Hand over
          </Button>
      }
    </>
  );
};
