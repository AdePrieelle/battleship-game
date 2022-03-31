import { getPlayerName } from "../getPlayerName";

test("returns playerOneName if isPlayerOne is true", () => {
  const mockIsPlayerOne = jest.fn(() => true);
  const mockIsPlayerTwoComputer = jest.fn(() => false);
  const mockPlayerOneName = jest.fn(() => "Player 1");
  const mockPlayerTwoName = jest.fn(() => "Player 2");
  const mockComputerName = jest.fn(() => "Computer");
  expect(getPlayerName(
    mockIsPlayerOne(), 
    mockIsPlayerTwoComputer(), 
    mockPlayerOneName(), 
    mockPlayerTwoName(), 
    mockComputerName()
  )).toBe(
    "Player 1"
  );
});

test("returns playerTwoName if isPlayerOne and isPlayerTwoComputer are false", () => {
  const mockIsPlayerOne = jest.fn(() => false);
  const mockIsPlayerTwoComputer = jest.fn(() => false);
  const mockPlayerOneName = jest.fn(() => "Player 1");
  const mockPlayerTwoName = jest.fn(() => "Player 2");
  const mockComputerName = jest.fn(() => "Computer");
  expect(getPlayerName(
    mockIsPlayerOne(), 
    mockIsPlayerTwoComputer(), 
    mockPlayerOneName(), 
    mockPlayerTwoName(), 
    mockComputerName()
  )).toBe(
    "Player 2"
  );
});

test("returns computerName if isPlayerOne is false and isPlayerTwoComputer is true", () => {
  const mockIsPlayerOne = jest.fn(() => false);
  const mockIsPlayerTwoComputer = jest.fn(() => true);
  const mockPlayerOneName = jest.fn(() => "Player 1");
  const mockPlayerTwoName = jest.fn(() => "Player 2");
  const mockComputerName = jest.fn(() => "Computer");
  expect(getPlayerName(
    mockIsPlayerOne(), 
    mockIsPlayerTwoComputer(), 
    mockPlayerOneName(), 
    mockPlayerTwoName(), 
    mockComputerName()
  )).toBe(
    "Computer"
  );
});
