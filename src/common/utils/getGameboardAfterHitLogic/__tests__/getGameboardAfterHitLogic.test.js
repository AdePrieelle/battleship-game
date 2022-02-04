import { getGameboardAfterHitLogic } from "../getGameboardAfterHitLogic";

test("return new gameboard after a gameboard cell is hit while ship isnt sunken with diagonal freemiss cells", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "hit", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockIndex = jest.fn(() => 24);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockIsSunkenShip = jest.fn(() => false);
  const mockGetAllIndexesOfAnArrayValue = jest.fn(() => [24, 25, 26]);
  const mockGameboardInitialState = jest.fn(() => ([
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
  const mockAddFreeMissGameboardValueCellsAroundSunkenShip = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "hit", "freemiss", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockAddFreeMissGameboardValueCellsAroundCellDiagonally = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "empty", "freemiss", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "hit", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "empty", "freemiss", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  expect(getGameboardAfterHitLogic(
    mockGameboard(), 
    mockIndex, 
    mockHitGameboardValue, 
    mockIsSunkenShip,
    mockGetAllIndexesOfAnArrayValue, 
    mockGameboardInitialState,
    mockAddFreeMissGameboardValueCellsAroundSunkenShip, 
    mockFreemissGameboardValue, 
    mockEmptyGameboardValue,
    mockAddFreeMissGameboardValueCellsAroundCellDiagonally
  )).toStrictEqual([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "empty", "freemiss", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "hit", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "empty", "freemiss", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]);
});

test("return new gameboard after a gameboard cell is hit and the ship is sunken with freemiss cells all around the ship that is sunken", () => {
  const mockGameboard = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "hit", "hit", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockIndex = jest.fn(() => 24);
  const mockHitGameboardValue = jest.fn(() => "hit");
  const mockIsSunkenShip = jest.fn(() => true);
  const mockGetAllIndexesOfAnArrayValue = jest.fn(() => [24, 25, 26]);
  const mockGameboardInitialState = jest.fn(() => ([
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
  const mockAddFreeMissGameboardValueCellsAroundSunkenShip = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "s1", "s1", "freemiss", "hit", "hit", "freemiss", "s3", "s3", "empty", "empty",
    "empty", "empty", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockFreemissGameboardValue = jest.fn(() => "freemiss");
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockAddFreeMissGameboardValueCellsAroundCellDiagonally = jest.fn(() => ([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "hit", "hit", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  expect(getGameboardAfterHitLogic(
    mockGameboard(), 
    mockIndex, 
    mockHitGameboardValue, 
    mockIsSunkenShip,
    mockGetAllIndexesOfAnArrayValue, 
    mockGameboardInitialState,
    mockAddFreeMissGameboardValueCellsAroundSunkenShip, 
    mockFreemissGameboardValue, 
    mockEmptyGameboardValue,
    mockAddFreeMissGameboardValueCellsAroundCellDiagonally
  )).toStrictEqual([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "s1", "s1", "freemiss", "hit", "hit", "freemiss", "s3", "s3", "empty", "empty",
    "empty", "empty", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]);
});
