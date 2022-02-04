export const getToggleValue = (currentValue, value1, value2) => {
  if (currentValue === value1) {
    return value2;
  } else if (currentValue === value2) {
    return value1;
  }
};
