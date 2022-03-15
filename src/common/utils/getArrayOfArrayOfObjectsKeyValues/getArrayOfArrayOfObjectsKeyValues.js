export const getArrayOfArrayOfObjectsKeyValues = (array, key) => {
  let copyArray = [...array];
  let newArray = [];
  copyArray.forEach((obj) => {
    if (obj[key] !== undefined) {
      newArray.push(obj[key]);
    }
  })
  return newArray;
};
