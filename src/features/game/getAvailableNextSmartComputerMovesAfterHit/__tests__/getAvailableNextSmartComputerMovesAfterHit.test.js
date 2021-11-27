import { getAvailableNextSmartComputerMovesAfterHit } from "../getAvailableNextSmartComputerMovesAfterHit";

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet) and the indexes around are empty or a ship", () => {
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

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in top left corner", () => {
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

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in top right corner", () => {
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

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in bottom left corner", () => {
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

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is null (isn't known yet), the indexes around are empty or a ship and the previousHitComputerCellsNotSunkenShip index is in bottom right corner", () => {
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

test("return array of next smart computer moves based on previousHitComputerCellsNotSunkenShip if previousHitDirectionNotSunkenShip is horizontal (isn't known yet) and the indexes around are empty or a ship", () => {
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
