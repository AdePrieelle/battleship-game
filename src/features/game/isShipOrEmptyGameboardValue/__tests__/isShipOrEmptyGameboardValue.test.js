import { isShipOrEmptyGameboardValue } from "../isShipOrEmptyGameboardValue";

test("returns true if the index on the gameboard is a ship", () => {
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
  const mockIndex = jest.fn(() => 23);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  expect(isShipOrEmptyGameboardValue(
    mockGameboard(),
    mockIndex(), 
    mockHitGameboardValue(),
    mockMissGameboardValue(), 
    mockFreemissGameboardValue()
  )).toBe(true);
});

test("returns true if the index on the gameboard is an empty gameboard value", () => {
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
  const mockIndex = jest.fn(() => 13);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  expect(isShipOrEmptyGameboardValue(
    mockGameboard(),
    mockIndex(), 
    mockHitGameboardValue(),
    mockMissGameboardValue(), 
    mockFreemissGameboardValue()
  )).toBe(true);
});

test("returns false if the index on the gameboard is an hit gameboard value", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "hit", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockIndex = jest.fn(() => 23);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  expect(isShipOrEmptyGameboardValue(
    mockGameboard(),
    mockIndex(), 
    mockHitGameboardValue(),
    mockMissGameboardValue(), 
    mockFreemissGameboardValue()
  )).toBe(false);
});

test("returns false if the index on the gameboard is an miss gameboard value", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "miss", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockIndex = jest.fn(() => 13);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  expect(isShipOrEmptyGameboardValue(
    mockGameboard(),
    mockIndex(), 
    mockHitGameboardValue(),
    mockMissGameboardValue(), 
    mockFreemissGameboardValue()
  )).toBe(false);
});

test("returns false if the index on the gameboard is an freemiss gameboard value", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockIndex = jest.fn(() => 13);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  expect(isShipOrEmptyGameboardValue(
    mockGameboard(),
    mockIndex(), 
    mockHitGameboardValue(),
    mockMissGameboardValue(), 
    mockFreemissGameboardValue()
  )).toBe(false);
});
