import { useSelector } from "react-redux";
import { getPlayerName } from "../../../../common/utils/getPlayerName/getPlayerName";
import { selectComputerName, selectIsPlayerTwoComputer, selectPlayerOneName, selectPlayerTwoName } from "../../gameSlice";
import "./GameboardPlayerName.scss";

export const GameboardPlayerName = ({ isPlayerOne }) => {
  const computerName = useSelector(selectComputerName);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const playerOneName = useSelector(selectPlayerOneName);
  const playerTwoName = useSelector(selectPlayerTwoName);
  
  const playerName = getPlayerName(isPlayerOne, isPlayerTwoComputer, playerOneName, playerTwoName, computerName);

  return (
    <h1 className="gameboard-player-name">{playerName}</h1>
  );
};
