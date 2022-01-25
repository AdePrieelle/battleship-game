export const addKeyValuePairToAllObjectsInArray = (array, key, value) => {
  let copyArray = [...array];
  for (const obj of array) {
    obj[key] = value;
  }
  return copyArray;
};
