import { getAvailableRandomGameboardComputerCellNumber } from '../getAvailableRandomGameboardComputerCellNumber';

test("get a random gameboard computer cell number from available computer cell numbers that aren't hit, miss or freemiss cells works correctly", () => {
  const mockGetArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips = jest.fn(() => [0, 1, 2, 3, 4, 5]);
  const mockGameboardComputer = jest.fn(() => [
    "empty", "empty", "empty", "empty", "empty", "empty"
  ]);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockGetRandomIndexFromArray = jest.fn(() => 3);
  expect(getAvailableRandomGameboardComputerCellNumber(
    mockGetArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips,
    mockGameboardComputer,
    mockHitGameboardValue,
    mockMissGameboardValue,
    mockFreemissGameboardValue,
    mockGetRandomIndexFromArray,
  )).toBe(3);
});
