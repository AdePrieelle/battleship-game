export const getFirstDigitOfNumber = (inputNumber) => {
  const strInputNumber = inputNumber.toString();
  const strFirstDigitOfNumber = strInputNumber.slice(0, 1);
  const numberFirstDigitOfNumber = +strFirstDigitOfNumber;
  return numberFirstDigitOfNumber;
}
