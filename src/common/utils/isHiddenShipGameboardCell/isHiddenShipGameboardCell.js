export const isHiddenShipGameboardCell = (array, id, arrayOfShipNames) => {
  if (arrayOfShipNames.includes(array[+id])) {
    return true;
  }
  return false;
}
