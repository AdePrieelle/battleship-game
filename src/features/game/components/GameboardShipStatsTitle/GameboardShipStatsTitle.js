import './GameboardShipStatsTitle.scss';

export const GameboardShipStatsTitle = ({ shipStatsTitle }) => {
  return (
    <h2 className="gameboard-ship-stats-title">{shipStatsTitle} ships</h2>
  );
};
