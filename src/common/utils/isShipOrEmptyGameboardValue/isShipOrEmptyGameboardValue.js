export const isShipOrEmptyGameboardValue = (gameboard, index, hitGameboardValue, missGameboardValue, freemissGameboardValue) => {
  if (!([hitGameboardValue, missGameboardValue, freemissGameboardValue].indexOf(gameboard[index]) > -1)) {
    return true;
  }
  return false;
};
