import { useSelector } from 'react-redux';
import {
  selectGameboardPlayerOne,
  selectGameboardPlayerTwo, selectIsPlayerOneTurn,
  selectIsPlayerTwoComputer,
} from '../../gameSlice';
import { GameboardPlayerGrid } from '../GameboardPlayerGrid/GameboardPlayerGrid';
import { GameboardShipStatsTitle } from '../GameboardShipStatsTitle/GameboardShipStatsTitle';
import { GameboardPlayerGridTitle } from '../GameboardPlayerGridTitle/GameboardPlayerGridTitle';
import { GameboardShipStats } from '../GameboardShipStats/GameboardShipStats';
import { GameButtons } from '../GameButtons/GameButtons';
import './GameboardsWrapper.scss';

export const GameboardsWrapper = () => {
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);

  const opponentShipStatsTitle = "Opponent's";
  const yourShipStatsTitle = "Your";

  return (
    <div className="gameboards-wrapper">
      {
          (!isPlayerOneTurn && !isPlayerTwoComputer)
        ? 
          <>
            <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-1">
              <GameboardPlayerGridTitle isPlayerOne={false} />
            </div>
            {/* Player two plays on gameboardPlayerOne */}
            <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-1">
              <GameboardPlayerGrid isPlayerOne={false} />
            </div>
            <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-1">
              <GameboardShipStatsTitle shipStatsTitle={opponentShipStatsTitle} />
            </div>
            <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-1">
              <GameboardShipStats gameboard={gameboardPlayerOne} />
            </div>
            <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-2">
              <GameboardPlayerGridTitle isPlayerOne={true} />
            </div>
            {/* Player two sees current state of gameboardPlayerTwo where player one plays on */}
            <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-2">
              <GameboardPlayerGrid isPlayerOne={true} />
            </div>
            <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-2">
              <GameboardShipStatsTitle shipStatsTitle={yourShipStatsTitle} />
            </div>
            <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-2">
              <GameboardShipStats gameboard={gameboardPlayerTwo} />
            </div>
          </>
      :
        <>
          <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-1">
            <GameboardPlayerGridTitle isPlayerOne={true} />
          </div>
          {/* Player one plays on gameboardPlayerTwo */}
          <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-1">
            <GameboardPlayerGrid isPlayerOne={true} />
          </div>
          <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-1">
            <GameboardShipStatsTitle shipStatsTitle={opponentShipStatsTitle} />
          </div>
          <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-1">
            <GameboardShipStats gameboard={gameboardPlayerTwo} />
          </div>
          <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-2">
            <GameboardPlayerGridTitle isPlayerOne={false} />
          </div>
          {/* Player one sees current state of gameboardPlayerTwo where player two or the computer plays on */}
          <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-2">
            <GameboardPlayerGrid isPlayerOne={false} />
          </div>
          <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-2">
            <GameboardShipStatsTitle shipStatsTitle={yourShipStatsTitle} />
          </div>
          <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-2">
            <GameboardShipStats gameboard={gameboardPlayerOne} />
          </div>
        </>
        
      }
      <div className="gameboards-wrapper-button-wrapper">
        <GameButtons />
      </div>
    </div>
  );
};
