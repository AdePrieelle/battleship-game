export const isHiddenShipGameboardCell = (array, id, emptyGameboardValue, hitGameboardValue, missGameboardValue) => {
  if (array[id] !== emptyGameboardValue && array[id] !== hitGameboardValue && array[id] !== missGameboardValue) {
    return true;
  }
  return false;
}
