export const replaceAllSpecificArrayValuesWithNewValue = (array, value, newValue) => {
  const copyArray = [...array];
  for (let i = 0; i < copyArray.length; i++) {
    if (copyArray[i] === value) {
      copyArray[i] = newValue
    }
  }
  return copyArray;
};
