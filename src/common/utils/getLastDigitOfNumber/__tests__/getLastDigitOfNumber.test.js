import { getLastDigitOfNumber } from "../getLastDigitOfNumber";

test("returns the last digit of a number above 10 correctly", () => {
  const mockNumber = jest.fn(() => 97);
  expect(getLastDigitOfNumber(
    mockNumber()
  )).toBe(7);
});

test("returns the last digit of a number below 10 correctly", () => {
  const mockNumber = jest.fn(() => 6);
  expect(getLastDigitOfNumber(
    mockNumber()
  )).toBe(6);
});

test("returns the last digit of a number 0 correctly", () => {
  const mockNumber = jest.fn(() => 0);
  expect(getLastDigitOfNumber(
    mockNumber()
  )).toBe(0);
});
