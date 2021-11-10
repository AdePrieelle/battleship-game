import { expect } from "@jest/globals";
import { isValidPlayerTurn } from "../isValidPlayerTurn";

test("isValidPlayerTurn returns true if it is the players turn and the gameboard cell is a hidden ship", () => {
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
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreeMissGameboardValue = jest.fn(() => "freemiss");
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreeMissGameboardValue()
  )).toBe(true);
});

test("isValidPlayerTurn returns true if it is the players turn and the gameboard cell is empty", () => {
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
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreeMissGameboardValue = jest.fn(() => "freemiss");
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreeMissGameboardValue()
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
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreeMissGameboardValue = jest.fn(() => "freemiss");
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreeMissGameboardValue()
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
  const mockIsPlayerTurn = jest.fn(() => false);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreeMissGameboardValue = jest.fn(() => "freemiss");
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreeMissGameboardValue()
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
  const mockIsPlayerTurn = jest.fn(() => false);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreeMissGameboardValue = jest.fn(() => "freemiss");
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreeMissGameboardValue()
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
  const mockIsPlayerTurn = jest.fn(() => false);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreeMissGameboardValue = jest.fn(() => "freemiss");
  expect(isValidPlayerTurn(
    mockGameboard(),
    mockId(),
    mockIsPlayerTurn(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreeMissGameboardValue()
  )).toBe(false);
});
