import { expect } from "@jest/globals";
import { isValidPlayerTurn } from "../isValidPlayerTurn";

test("isValidPlayerTurn returns true if it is the players turn, the game has started, the game isn't over and the gameboard cell is a hidden ship", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "s3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 4);
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));

  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(true);
});

test("isValidPlayerTurn returns true if it is the players turn, the game has started, the game isn't over and the gameboard cell is empty", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 5);
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(true);
});

test("isValidPlayerTurn returns false if it isn't the players turn", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 4);
  const mockIsPlayerTurn = jest.fn(() => false);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(false);
});

test("isValidPlayerTurn returns false if the game hasn't started yet", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 4);
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => false);
  const mockIsGameOver = jest.fn(() => false);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(false);
});

test("isValidPlayerTurn returns false if the game is over", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 4);
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => true);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(false);
});

test("isValidPlayerTurn returns false if the gameboard cell is a hit", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "hit", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 4);
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(false);
});

test("isValidPlayerTurn returns false if the gameboard cell is a miss", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "miss", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 5);
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(false);
});

test("isValidPlayerTurn returns false if the gameboard cell is a freemiss", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "freemiss", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockId = jest.fn(() => 5);
  const mockIsPlayerTurn = jest.fn(() => true);
  const mockIsGameStarted = jest.fn(() => true);
  const mockIsGameOver = jest.fn(() => false);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockArrayOfShipNames = jest.fn(() => (["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]));
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockIsGameStarted(),
    mockIsGameOver(),
    mockEmptyGameboardValue(),
    mockArrayOfShipNames()
  )).toBe(false);
});
