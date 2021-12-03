import { isValidComputerTurn } from "../isValidComputerTurn";

test("isValidComputerTurn returns true if isPlayerTwoComputer is true, isPlayerTurn is false, isGameStarted is true and isGameOver is false", () => {
  const mockIsPlayerTwoComputer = jest.fn(() => true);
  const mockIsPlayerOneTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  expect(isValidComputerTurn(
    mockIsPlayerTwoComputer(),
    mockIsPlayerOneTurn(), 
    mockIsGameStarted(), 
    mockIsGameOver()
  )).toBe(true);
});

test("isValidComputerTurn returns false if isPlayerTwoComputer is false", () => {
  const mockIsPlayerTwoComputer = jest.fn(() => false);
  const mockIsPlayerOneTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  expect(isValidComputerTurn(
    mockIsPlayerTwoComputer(),
    mockIsPlayerOneTurn(), 
    mockIsGameStarted(), 
    mockIsGameOver()
  )).toBe(false);
});

test("isValidComputerTurn returns false if isPlayerTurn is true", () => {
  const mockIsPlayerTwoComputer = jest.fn(() => true);
  const mockIsPlayerOneTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  expect(isValidComputerTurn(
    mockIsPlayerTwoComputer(),
    mockIsPlayerOneTurn(), 
    mockIsGameStarted(), 
    mockIsGameOver()
  )).toBe(false);
});

test("isValidComputerTurn returns false if isGameStarted is false", () => {
  const mockIsPlayerTwoComputer = jest.fn(() => true);
  const mockIsPlayerOneTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => false);
  const mockIsGameOver = jest.fn(() => false);
  expect(isValidComputerTurn(
    mockIsPlayerTwoComputer(),
    mockIsPlayerOneTurn(), 
    mockIsGameStarted(), 
    mockIsGameOver()
  )).toBe(false);
});

test("isValidComputerTurn returns false if isGameOver is true", () => {
  const mockIsPlayerTwoComputer = jest.fn(() => true);
  const mockIsPlayerOneTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => true);
  expect(isValidComputerTurn(
    mockIsPlayerTwoComputer(),
    mockIsPlayerOneTurn(), 
    mockIsGameStarted(), 
    mockIsGameOver()
  )).toBe(false);
});
