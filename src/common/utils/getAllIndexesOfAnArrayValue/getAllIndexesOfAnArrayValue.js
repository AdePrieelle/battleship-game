export const getAllIndexesOfAnArrayValue = (array, value) => {
  let allIndexes = [];
  array.forEach((item, i) => {
    if (item === value) {
      allIndexes.push(i);
    }
  });
  return allIndexes;
}
