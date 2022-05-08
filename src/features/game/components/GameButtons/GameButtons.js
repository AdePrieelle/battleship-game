import { useDispatch } from "react-redux";
import { Button } from "../../../../common/components/Button/Button";
import { handleButtonNewGame } from "../../gameSlice";
import './GameButtons.scss';

export const GameButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="game-buttons">
      <Button buttonOnClick={() => dispatch(handleButtonNewGame())}>New game</Button>
    </div>
  );
};
