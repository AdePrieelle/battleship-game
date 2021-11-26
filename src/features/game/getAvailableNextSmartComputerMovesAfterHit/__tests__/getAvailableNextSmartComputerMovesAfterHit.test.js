import { getAvailableNextSmartComputerMovesAfterHit } from "../getAvailableNextSmartComputerMovesAfterHit";

test.skip("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet)", () => {
  const mockGameboardComputer = jest.fn(() => ([
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
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([23]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue()
  )).toBe([13, 22, 24, 33]);
});
