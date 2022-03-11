import { Button } from "../../../../common/components/Button/Button";
import './GameButtons.scss';
import { useSelector, useDispatch } from "react-redux";
import { 
  selectIsPlayerTwoComputer,
  handleButtonNewGame,
  handleButtonGameSwitchPlayerTurn,
  selectDisableButtonGameSwitchPlayerTurn,
} from "../../gameSlice";

export const GameButtons = () => {
  const dispatch = useDispatch();
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const disableButtonGameSwitchPlayerTurn = useSelector(selectDisableButtonGameSwitchPlayerTurn);

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
