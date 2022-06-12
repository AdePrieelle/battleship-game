import { useSelector } from 'react-redux';
import { useMediaQuery } from '../../../../common/hooks/useMediaQuery';
import { mediaQueryMediumScreen } from '../../../../styles/partials/export.module.scss';
import {
  selectGameboardPlayerOne,
  selectGameboardPlayerTwo, selectIsPlayerOneTurn,
  selectIsPlayerTwoComputer
} from '../../gameSlice';
import { GameboardPlayerGrid } from '../GameboardPlayerGrid/GameboardPlayerGrid';
import { GameboardPlayerGridTitle } from '../GameboardPlayerGridTitle/GameboardPlayerGridTitle';
import { GameboardShipStats } from '../GameboardShipStats/GameboardShipStats';
import { GameboardShipStatsTitle } from '../GameboardShipStatsTitle/GameboardShipStatsTitle';
import { GameButtons } from '../GameButtons/GameButtons';
import './GameboardsWrapper.scss';

export const GameboardsWrapper = () => {
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);

  const isSmallScreen = !(useMediaQuery(`(min-width: ${mediaQueryMediumScreen})`));
  
  const isPlayerOneTurnOrComputerTurnOnBiggerThanSmallScreen = (isPlayerOneTurn || (!isPlayerOneTurn && isPlayerTwoComputer && !isSmallScreen));
  const isComputerTurnOnSmallScreen= (!isPlayerOneTurn && isPlayerTwoComputer && isSmallScreen);
  const opponentShipStatsTitle = "Opponent's";
  const yourShipStatsTitle = "Your";

  const renderedGameboardsOrder = (
    <>
      <div className={`gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-${isPlayerOneTurnOrComputerTurnOnBiggerThanSmallScreen ? "1" : "2"}`}>
        <GameboardPlayerGridTitle isPlayerOne={true} />
      </div>
      <div className={`gameboard-player-grid-wrapper gameboard-player-grid-wrapper-${isPlayerOneTurnOrComputerTurnOnBiggerThanSmallScreen ? "1" : "2"}`}>
        <GameboardPlayerGrid isPlayerOne={true} />
      </div>
      <div className={`gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-${!isComputerTurnOnSmallScreen ? "1" : "2"}`}>
        <GameboardShipStatsTitle shipStatsTitle={opponentShipStatsTitle} />
      </div>
      <div className={`gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-${isPlayerOneTurnOrComputerTurnOnBiggerThanSmallScreen ? "1" : "2"}`}>
        <GameboardShipStats gameboard={gameboardPlayerTwo} />
      </div>
      <div className={`gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-${isPlayerOneTurnOrComputerTurnOnBiggerThanSmallScreen ? "2" : "1"}`}>
        <GameboardPlayerGridTitle isPlayerOne={false} />
      </div>
      <div className={`gameboard-player-grid-wrapper gameboard-player-grid-wrapper-${isPlayerOneTurnOrComputerTurnOnBiggerThanSmallScreen ? "2" : "1"}`}>
        <GameboardPlayerGrid isPlayerOne={false} />
      </div>
      <div className={`gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-${!isComputerTurnOnSmallScreen ? "2" : "1"}`}>
        <GameboardShipStatsTitle shipStatsTitle={yourShipStatsTitle} />
      </div>
      <div className={`gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-${isPlayerOneTurnOrComputerTurnOnBiggerThanSmallScreen ? "2" : "1"}`}>
        <GameboardShipStats gameboard={gameboardPlayerOne} />
      </div>
    </>
  );

  return (
    <div className="gameboards-wrapper">
      {renderedGameboardsOrder}
      <div className="gameboards-wrapper-button-wrapper">
        <GameButtons />
      </div>
    </div>
  );
};
