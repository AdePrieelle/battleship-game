import { getLastIdInRowTwoDimensionalArray } from "../getLastIdInRowTwoDimensionalArray";

test("returns last id in row correctly", () => {
  const mockRowNumber = jest.fn(() => 1);
  const mockLastColumnNumberOfRow = jest.fn(() => 9);
  expect(getLastIdInRowTwoDimensionalArray(
    mockRowNumber(),
    mockLastColumnNumberOfRow()
  )).toBe(19);
});

test("returns last id in row correctly for numbers under 10", () => {
  const mockRowNumber = jest.fn(() => 0);
  const mockLastColumnNumberOfRow = jest.fn(() => 9);
  expect(getLastIdInRowTwoDimensionalArray(
    mockRowNumber(),
    mockLastColumnNumberOfRow()
  )).toBe(9);
});
