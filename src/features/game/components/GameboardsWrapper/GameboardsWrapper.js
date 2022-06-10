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

  const opponentShipStatsTitle = "Opponent's";
  const yourShipStatsTitle = "Your";

  const isSmallScreen = !(useMediaQuery(`(min-width: ${mediaQueryMediumScreen})`));

  const renderedGameboardsOrder = (
      // player vs computer, playerOneTurn
      (isPlayerOneTurn && isPlayerTwoComputer)
    ?
      <>
        <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-1">
          <GameboardPlayerGridTitle isPlayerOne={true} />
        </div>
        {/* Player one plays on gameboardPlayerTwo from computer */}
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
        {/* Player one sees current state of gameboardPlayerTwo where the computer plays on */}
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
    : 
      // player vs computer, !playerOneTurn, width smaller than medium screen media query
      (!isPlayerOneTurn && isPlayerTwoComputer && isSmallScreen)
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
          <GameboardShipStatsTitle shipStatsTitle={yourShipStatsTitle} />
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
          <GameboardShipStatsTitle shipStatsTitle={opponentShipStatsTitle} />
        </div>
        <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-2">
          <GameboardShipStats gameboard={gameboardPlayerTwo} />
        </div>
      </>
    : 
      // player vs computer, !playerOneTurn, width equal or bigger than medium screen media query
      (!isPlayerOneTurn && isPlayerTwoComputer && !isSmallScreen)
    ?
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
    : 
      // player vs player, playerOneTurn
      (isPlayerOneTurn && !isPlayerTwoComputer)
    ?
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
        {/* Player one sees current state of gameboardPlayerTwo where player two plays on */}
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
    : 
      // player vs player, !playerOneTurn
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
      null
  );


    // console.log(renderedGameboardsOrder);

  return (
    <div className="gameboards-wrapper">
      {
      //     (!isPlayerOneTurn && !isPlayerTwoComputer)
      //   ? 
      //     <>
      //       <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-1">
      //         <GameboardPlayerGridTitle isPlayerOne={false} />
      //       </div>
      //       {/* Player two plays on gameboardPlayerOne */}
      //       <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-1">
      //         <GameboardPlayerGrid isPlayerOne={false} />
      //       </div>
      //       <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-1">
      //         <GameboardShipStatsTitle shipStatsTitle={opponentShipStatsTitle} />
      //       </div>
      //       <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-1">
      //         <GameboardShipStats gameboard={gameboardPlayerOne} />
      //       </div>
      //       <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-2">
      //         <GameboardPlayerGridTitle isPlayerOne={true} />
      //       </div>
      //       {/* Player two sees current state of gameboardPlayerTwo where player one plays on */}
      //       <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-2">
      //         <GameboardPlayerGrid isPlayerOne={true} />
      //       </div>
      //       <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-2">
      //         <GameboardShipStatsTitle shipStatsTitle={yourShipStatsTitle} />
      //       </div>
      //       <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-2">
      //         <GameboardShipStats gameboard={gameboardPlayerTwo} />
      //       </div>
      //     </>
      // :
      //   <>
      //     <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-1">
      //       <GameboardPlayerGridTitle isPlayerOne={true} />
      //     </div>
      //     {/* Player one plays on gameboardPlayerTwo */}
      //     <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-1">
      //       <GameboardPlayerGrid isPlayerOne={true} />
      //     </div>
      //     <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-1">
      //       <GameboardShipStatsTitle shipStatsTitle={opponentShipStatsTitle} />
      //     </div>
      //     <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-1">
      //       <GameboardShipStats gameboard={gameboardPlayerTwo} />
      //     </div>
      //     <div className="gameboard-player-grid-title-wrapper gameboard-player-grid-title-wrapper-2">
      //       <GameboardPlayerGridTitle isPlayerOne={false} />
      //     </div>
      //     {/* Player one sees current state of gameboardPlayerTwo where player two or the computer plays on */}
      //     <div className="gameboard-player-grid-wrapper gameboard-player-grid-wrapper-2">
      //       <GameboardPlayerGrid isPlayerOne={false} />
      //     </div>
      //     <div className="gameboard-ship-stats-title-wrapper gameboard-ship-stats-title-wrapper-2">
      //       <GameboardShipStatsTitle shipStatsTitle={yourShipStatsTitle} />
      //     </div>
      //     <div className="gameboard-ship-stats-wrapper gameboard-ship-stats-wrapper-2">
      //       <GameboardShipStats gameboard={gameboardPlayerOne} />
      //     </div>
      //   </>
        renderedGameboardsOrder
      }
      <div className="gameboards-wrapper-button-wrapper">
        <GameButtons />
      </div>
    </div>
  );
};
