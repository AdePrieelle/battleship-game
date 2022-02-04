import { isSunkenShipAfterHit } from "../isSunkenShipAfterHit";

test("returns true if ship is sunken after hit at index", () => {
  const mockGameboard = jest.fn(() => ([
    "hit", "miss", "hit", "miss", "hit", "miss", "hit", "miss", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "hit", "hit", "c1", "miss", "miss", "hit", "hit", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "hit", "hit", "miss", "hit", "hit", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  ]));
  const mockIndex = jest.fn(() => 23);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockIsSunkenShip = jest.fn(() => (() => true));
  expect(isSunkenShipAfterHit(
    mockGameboard(),
    mockIndex(),
    mockHitGameboardValue(),
    mockIsSunkenShip()
  )).toBe(true);
});

test("returns false if ship isn't sunken after hit at index", () => {
  const mockGameboard = jest.fn(() => ([
    "hit", "miss", "hit", "miss", "hit", "miss", "hit", "miss", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "hit", "c1", "c1", "miss", "miss", "hit", "hit", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "hit", "hit", "miss", "hit", "hit", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  ]));
  const mockIndex = jest.fn(() => 23);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockIsSunkenShip = jest.fn(() => (() => false));
  expect(isSunkenShipAfterHit(
    mockGameboard(),
    mockIndex(),
    mockHitGameboardValue(),
    mockIsSunkenShip()
  )).toBe(false);
});
