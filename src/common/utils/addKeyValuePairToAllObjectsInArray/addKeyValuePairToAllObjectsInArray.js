export const addKeyValuePairToAllObjectsInArray = (array, key, value) => {
  return array.map((obj) => ({
    ...obj,
    [key]: value       
  }));
};
