export const isSunkenShip = (gameboardHitShots, shipCoords, shipName) => {
  let shipCoordsCells = shipCoords[shipName];
  let includesAllShipCoords = shipCoordsCells.every(elem => gameboardHitShots.includes(elem));
  return (
    includesAllShipCoords
  )
}
