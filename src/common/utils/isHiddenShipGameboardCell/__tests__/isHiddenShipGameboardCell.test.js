import { isHiddenShipGameboardCell } from "../isHiddenShipGameboardCell";

test("return true is a gameboard cell is a hidden ship in the gameboard", () => {
  const mockArray = jest.fn(() => (["empty", "hit", "s1", "miss", "freemiss"]));
  const mockIndex = jest.fn(() => (2));
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isHiddenShipGameboardCell(mockArray(), mockIndex(), mockArrayOfShipNames())).toBe(true);
});

test("return false if a gameboard cell is an 'empty' cell in the gameboard", () => {
  const mockArray = jest.fn(() => (["empty", "hit", "s1", "miss", "freemiss"]));
  const mockIndex = jest.fn(() => (0));
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isHiddenShipGameboardCell(mockArray(), mockIndex(), mockArrayOfShipNames())).toBe(false);
});

test("return false if a gameboard cell is a 'hit' cell in the gameboard", () => {
  const mockArray = jest.fn(() => (["empty", "hit", "s1", "miss", "freemiss"]));
  const mockIndex = jest.fn(() => (1));
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isHiddenShipGameboardCell(mockArray(), mockIndex(), mockArrayOfShipNames())).toBe(false);
});

test("return false if a gameboard cell is a 'miss' cell in the gameboard", () => {
  const mockArray = jest.fn(() => (["empty", "hit", "s1", "miss", "freemiss"]));
  const mockIndex = jest.fn(() => (3));
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isHiddenShipGameboardCell(mockArray(), mockIndex(), mockArrayOfShipNames())).toBe(false);
});

test("return false if a gameboard cell is a 'freemiss' cell in the gameboard", () => {
  const mockArray = jest.fn(() => (["empty", "hit", "s1", "miss", "freemiss"]));
  const mockIndex = jest.fn(() => (4));
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isHiddenShipGameboardCell(mockArray(), mockIndex(), mockArrayOfShipNames())).toBe(false);
});
