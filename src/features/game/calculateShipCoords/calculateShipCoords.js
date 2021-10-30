export const calculateShipCoords = (shipLength, startIndex, direction, horizontalDirectionValue, verticalDirectionValue) => {
  let randomShipCoords = [];
  if (direction === horizontalDirectionValue) {
    for (let i = 0; i < shipLength; i++) {
      randomShipCoords.push(startIndex + i);
    }
  } else if (direction === verticalDirectionValue) {
    for (let i = 0; i < shipLength; i++) {
      randomShipCoords.push(startIndex + i*10);
    }
  }
  return randomShipCoords;
}
