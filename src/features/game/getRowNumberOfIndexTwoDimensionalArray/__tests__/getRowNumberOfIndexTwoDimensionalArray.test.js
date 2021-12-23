import { getRowNumberOfIndexTwoDimensionalArray } from "../getRowNumberOfIndexTwoDimensionalArray";

test("get row number of index smaller than 10 works correctly", () => {
  const mockId = jest.fn(() => 7);
  const getFirstDigitOfNumber = jest.fn(() => 0);
  expect(getRowNumberOfIndexTwoDimensionalArray(
    mockId,
    getFirstDigitOfNumber
  )).toBe(0);
});

test("get row number of index bigger than 10 works correctly", () => {
  const mockId = jest.fn(() => 98);
  const getFirstDigitOfNumber = jest.fn(() => 9);
  expect(getRowNumberOfIndexTwoDimensionalArray(
    mockId,
    getFirstDigitOfNumber
  )).toBe(9);
});

test("get row number of index 0 works correctly", () => {
  const mockId = jest.fn(() => 0);
  const getFirstDigitOfNumber = jest.fn(() => 0);
  expect(getRowNumberOfIndexTwoDimensionalArray(
    mockId,
    getFirstDigitOfNumber
  )).toBe(0);
});
