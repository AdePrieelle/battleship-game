export const isEmptyGameboardCell = (array, index, emptyGameboardValue) => {
  if (array[index] === emptyGameboardValue) {
    return true;
  }
  return false;
}
