export const isHiddenShipGameboardCell = (array, id, emptyGameboardValue, hitGameboardValue, missGameboardValue, freemissGameboardValue) => {
  if (array[id] !== emptyGameboardValue && array[id] !== hitGameboardValue && array[id] !== missGameboardValue && array[id] !== freemissGameboardValue) {
    return true;
  }
  return false;
}
