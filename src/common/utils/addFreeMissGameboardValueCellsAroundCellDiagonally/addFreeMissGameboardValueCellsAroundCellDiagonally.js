export const addFreeMissGameboardValueCellsAroundCellDiagonally = (array, index, freemissGameboardValue, emptyGameboardValue) => {
  let copyArray = [...array];
  
  if ((index >= 0 && index <= 9)) {
    if (index > 0) {
      if (copyArray[index + 9] === emptyGameboardValue) {
        copyArray[index + 9] = freemissGameboardValue;
      }
    }
    if (index < 9) {
      if (copyArray[index + 11] === emptyGameboardValue) {
        copyArray[index + 11] = freemissGameboardValue;
      }
    }
  }

  if (index >= 90 && index <= 99) {
    if (index > 90) {
      if (copyArray[index - 11] === emptyGameboardValue) {
        copyArray[index - 11] = freemissGameboardValue;
      }
    }
    if (index < 99) {
      if (copyArray[index - 9] === emptyGameboardValue) {
        copyArray[index - 9] = freemissGameboardValue;
      }
    }
  }

  if (([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(index) > -1)) {
    if (index > 0) {
      if (copyArray[index - 9] === emptyGameboardValue) {
        copyArray[index - 9] = freemissGameboardValue;
      }
    }
    if (index < 90) {
      if (copyArray[index + 11] === emptyGameboardValue) {
        copyArray[index + 11] = freemissGameboardValue;
      }
    }
  }

  if (([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1)) {
    if (index > 9) {
      if (copyArray[index - 11] === emptyGameboardValue) {
        copyArray[index - 11] = freemissGameboardValue;
      }
    }
    if (index < 99) {
      if (copyArray[index + 9] === emptyGameboardValue) {
        copyArray[index + 9] = freemissGameboardValue;
      }
    }
  }

  if(!([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1)) {
    if (copyArray[index - 11] === emptyGameboardValue) {
      copyArray[index - 11] = freemissGameboardValue;
    }
    if (copyArray[index - 9] === emptyGameboardValue) {
      copyArray[index - 9] = freemissGameboardValue;
    }
    if (copyArray[index + 9] === emptyGameboardValue) {
      copyArray[index + 9] = freemissGameboardValue;
    }
    if (copyArray[index + 11] === emptyGameboardValue) {
      copyArray[index + 11] = freemissGameboardValue;
    }
  }

  return (
    copyArray
  );
};
