export const getRandomArrayValue = (array) => {
  let randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex];
}
