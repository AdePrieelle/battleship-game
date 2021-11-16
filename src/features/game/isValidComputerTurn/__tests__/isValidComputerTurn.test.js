import { isValidComputerTurn } from "../isValidComputerTurn";

test("isValidComputerTurn returns true if isPlayerTurn is false, isGameStarted is true and isGameOver is false", () => {
  const mockIsPlayerTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  expect(isValidComputerTurn(mockIsPlayerTurn(), mockIsGameStarted(), mockIsGameOver())).toBe(true);
});

test("isValidComputerTurn returns false if isPlayerTurn is true", () => {
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  expect(isValidComputerTurn(mockIsPlayerTurn(), mockIsGameStarted(), mockIsGameOver())).toBe(false);
});

test("isValidComputerTurn returns false if isGameStarted is false", () => {
  const mockIsPlayerTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => false);
  const mockIsGameOver = jest.fn(() => false);
  expect(isValidComputerTurn(mockIsPlayerTurn(), mockIsGameStarted(), mockIsGameOver())).toBe(false);
});

test("isValidComputerTurn returns false if isGameOver is true", () => {
  const mockIsPlayerTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => true);
  expect(isValidComputerTurn(mockIsPlayerTurn(), mockIsGameStarted(), mockIsGameOver())).toBe(false);
});
