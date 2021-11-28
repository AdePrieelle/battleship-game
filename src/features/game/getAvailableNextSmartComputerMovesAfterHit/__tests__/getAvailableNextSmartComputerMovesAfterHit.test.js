import { getAvailableNextSmartComputerMovesAfterHit } from "../getAvailableNextSmartComputerMovesAfterHit";

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet) and the indexes around are empty or a ship", () => {
  const mockGameboardComputer = jest.fn(() => ([
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
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([23]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([13, 22, 24, 33]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top left corner", () => {
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
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([0]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([1, 10]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top middle", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([4]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([3, 5, 14]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top right corner", () => {
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
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([9]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([8, 19]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the middle right", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([39]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([29, 38, 49]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom right corner", () => {
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
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([99]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([89, 98]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom middle", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([94]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([84, 93, 95]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom left corner", () => {
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
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([90]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([80, 91]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the middle left", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([50]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => null);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([40, 51, 60]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal and the indexes around are empty or a ship", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "hit", "hit", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([82, 83]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([81, 84]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal, the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top left corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "hit", "hit", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([0, 1]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([2]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top middle", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "hit", "hit", "c1", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([1, 2]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([0, 3]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top right corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "c1", "c1", "hit", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([8, 9]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([7]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the middle right", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "c1", "c1", "hit", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([28, 29]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([27]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom right corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "c1", "c1", "hit", "hit",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([98, 99]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([97]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom middle", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "c1", "c1", "hit", "hit", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([97, 98]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([96, 99]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom left corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "hit", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([90, 91]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([92]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the middle left", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "hit", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([20, 21]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([22]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip is of length 2", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "c1", "hit", "hit", "c1", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([33, 34]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([32, 35]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip is of length 3", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "c1", "hit", "hit", "hit", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([33, 34, 35]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "horizontal");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([32, 36]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet) and the indexes around are empty or a ship", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([52, 62]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([42, 72]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top left corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([0, 10]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([20]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top middle", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([0, 10, 20]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([30]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the top right corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([9, 29]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([39]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the middle right", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([39, 49]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([29, 59]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom right corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "c1",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "hit",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "hit"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([89, 99]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([79]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom middle", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([84, 94]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([74]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the bottom left corner", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([80, 90]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([70]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in the middle left", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([50, 60]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([40, 70]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip is of length 2", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([33, 43]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([23, 53]);
});

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is vertical (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip is of length 3", () => {
  const mockGameboardComputer = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"
  ]));
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([33, 43, 53]));
  const mockPreviousHitDirectionNotSunkenShip = jest.fn(() => "vertical");
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockMissGameboardValue = jest.fn(() => "miss");
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockIsShipOrEmptyGameboardValue = jest.fn(() => (() => true));
  expect(getAvailableNextSmartComputerMovesAfterHit(
    mockGameboardComputer(),
    mockPreviousHitComputerCellsNotSunkenShip(),
    mockPreviousHitDirectionNotSunkenShip(),
    mockHitGameboardValue(),
    mockMissGameboardValue(),
    mockFreemissGameboardValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockIsShipOrEmptyGameboardValue()
  )).toStrictEqual([23, 63]);
});
