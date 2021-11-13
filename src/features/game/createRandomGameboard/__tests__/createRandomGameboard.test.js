import { createRandomGameboard } from "../createRandomGameboard";

test("create a random gameboard with randomly generated ships coords placed correctly", () => {
  const mockAmountRows = jest.fn(() => 10);
  const mockAmountColumns = jest.fn(() => 10);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockGenerateRandomValidShipPosition = jest
    .fn()
    .mockReturnValueOnce(
      {
        startIndex: 0,
        direction: "horizontal",
        shipCoords: [0, 1, 2, 3]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 5,
        direction: "horizontal",
        shipCoords: [5, 6, 7]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 9,
        direction: "horizontal",
        shipCoords: [9, 19, 29]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 20,
        direction: "vertical",
        shipCoords: [20, 30]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 24,
        direction: "vertical",
        shipCoords: [24, 34]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 60,
        direction: "horizontal",
        shipCoords: [60, 61]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 80,
        direction: "horizontal",
        shipCoords: [80]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 83,
        direction: "vertical",
        shipCoords: [83]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 85,
        direction: "vertical",
        shipCoords: [85]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 98,
        direction: "vertical",
        shipCoords: [98]
      }
    );
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
  const mockCallback = jest.fn(() => "callback called correctly");
  expect(
    createRandomGameboard(
      mockAmountRows(), 
      mockAmountColumns(), 
      mockEmptyGameboardValue(), 
      mockGenerateRandomValidShipPosition, 
      mockShips(), 
      mockCallback
    )
  ).toStrictEqual([
    "c1", "c1", "c1", "c1", "empty", "b1", "b1", "b1", "empty", "b2",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "b2",
    "s1", "empty", "empty", "empty", "s2", "empty", "empty", "empty", "empty", "b2",
    "s1", "empty", "empty", "empty", "s2", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "s3", "s3", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "d1", "empty", "empty", "d2", "empty", "d3", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "d4", "empty",
  ]);
});

test("create a random gameboard returns callback createRandomGameboard when randomValidShipPosition is false because generateRandomValidShipPosition exceeded the maxAmountTimesTriedToPlaceShip to place a ship", () => {
  const mockAmountRows = jest.fn(() => 10);
  const mockAmountColumns = jest.fn(() => 10);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockGenerateRandomValidShipPosition = jest.fn(() => false);
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
  const mockCallback = jest.fn(() => "callback called correctly");
  expect(
    createRandomGameboard(
      mockAmountRows(), 
      mockAmountColumns(), 
      mockEmptyGameboardValue(), 
      mockGenerateRandomValidShipPosition, 
      mockShips(),
      mockCallback
    )
  ).toBe("callback called correctly");
});
