import { getGeneratedRandomGameboardPlayerInitialStates } from '../getGeneratedRandomGameboardPlayerInitialStates';

test("returns object with keys generatedRandomGameboardPlayerOneInitialState and generatedRandomGameboardPlayerTwoInitialState and their randomly generated gameboards correctly", () => {
  const mockCreateRandomGameboard = jest
    .fn()
    .mockReturnValueOnce([
    "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b1", "b1", "b1", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "b2", "b2", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    ])
    .mockReturnValueOnce([
      "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "b2", "b2", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "b1", "b1", "b1", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    ]);
  const mockAmountOfRows = jest.fn(() => (10));
  const mockAmountOfColumns = jest.fn(() => (10));
  const mockEmptyGameboardValue = jest.fn(() => ("empty"));
  const mockGenerateRandomValidShipPosition = jest.fn(() => ({
    startIndex: 14,
    direction: "horizontal",
    shipCoords: [14, 15, 16, 17]
  }));
  const mockShips = jest.fn(() => ([
    {
      name: "d1",
      shipLength: 1,
    },
    {
      name: "d2",
      shipLength: 1,
    },
    {
      name: "d3",
      shipLength: 1,
    },
    {
      name: "d4",
      shipLength: 1,
    },
    {
      name: "s1",
      shipLength: 2,
    },
    {
      name: "s2",
      shipLength: 2,
    },
    {
      name: "s3",
      shipLength: 2,
    },
    {
      name: "b1",
      shipLength: 3,
    },
    {
      name: "b2",
      shipLength: 3,
    },
    {
      name: "c1",
      shipLength: 4,
    },
  ]));
  const mockHorizontalDirectionValue = jest.fn(() => ("horizontal"));
  const mockVerticalDirectionValue  = jest.fn(() => ("vertical"));
  const mockShipNamePropertyText = jest.fn(() => ("name"));
  const mockShipLengthPropertyText = jest.fn(() => ("shipLength"));
  
  expect(getGeneratedRandomGameboardPlayerInitialStates(
    mockCreateRandomGameboard,
    mockAmountOfRows(),
    mockAmountOfColumns(),
    mockEmptyGameboardValue(),
    mockGenerateRandomValidShipPosition(),
    mockShips(),
    mockHorizontalDirectionValue(),
    mockVerticalDirectionValue(),
    mockShipNamePropertyText(),
    mockShipLengthPropertyText()
  )).toStrictEqual({
    generatedRandomGameboardPlayerOneInitialState: [
      "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "b1", "b1", "b1", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "b2", "b2", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    ],
    generatedRandomGameboardPlayerTwoInitialState: [
      "c1", "c1", "c1", "c1", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "b2", "b2", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "b1", "b1", "b1", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "s1", "s1", "empty", "s2", "s2", "empty", "s3", "s3", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
      "d1", "empty", "d2", "empty", "d3", "empty", "d4", "empty", "empty", "empty",
      "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    ],
  });
});
