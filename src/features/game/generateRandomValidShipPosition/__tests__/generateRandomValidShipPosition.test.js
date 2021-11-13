import { generateRandomValidShipPosition } from "../generateRandomValidShipPosition";

test("generate a random valid ship position object correctly", () => {
  const mockGenerateRandomShipPosition = jest.fn(() => (
    {
      startIndex: 14,
      direction: "horizontal",
      shipCoords: [14, 15, 16, 17]
    }
  ));
  const mockRandomGameboard = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockShip = jest.fn(() => ({
    name: "c1",
    shipLength: 4
  }));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetRandomIndexFromArray =  jest.fn(() => 14);
  const mockGetRandomArrayValue = jest.fn(() => "horizontal");
  const mockCalculateShipCoords = jest.fn(() => ([14, 15, 16, 17]));
  const mockIsValidShipPosition = jest.fn(() => true);
  const mockIsEmptyGameboardCell = jest.fn(() => true);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => true);
  const mockMaxAmountTimesTriedToPlaceShip = jest.fn(() => 25);
  expect(generateRandomValidShipPosition(
    mockGenerateRandomShipPosition,
    mockRandomGameboard, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue, 
    mockGetRandomIndexFromArray, 
    mockGetRandomArrayValue, 
    mockCalculateShipCoords,
    mockIsValidShipPosition,
    mockIsEmptyGameboardCell,
    mockEmptyGameboardValue,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockGetFirstDigitOfNumber,
    mockCheckIfShipIsNotSurroundedByAnotherShip,
    mockMaxAmountTimesTriedToPlaceShip()
  )).toStrictEqual({
    startIndex: 14,
    direction: "horizontal",
    shipCoords: [14, 15, 16, 17]
  });
});

test("return false if randomShipPosition is not a valid ship position after exceeding maxAmountTimesTriedToPlaceShip to generate a randomShipPosition and checking is its a valid position on the gameboard", () => {
  const mockGenerateRandomShipPosition = jest.fn(() => (
    {
      startIndex: 14,
      direction: "horizontal",
      shipCoords: [14, 15, 16, 17]
    }
  ));
  const mockRandomGameboard = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockShip = jest.fn(() => ({
    name: "c1",
    shipLength: 4
  }));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetRandomIndexFromArray =  jest.fn(() => 14);
  const mockGetRandomArrayValue = jest.fn(() => "horizontal");
  const mockCalculateShipCoords = jest.fn(() => ([14, 15, 16, 17]));
  const mockIsValidShipPosition = jest.fn(() => false);
  const mockIsEmptyGameboardCell = jest.fn(() => true);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => false);
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => true);
  const mockMaxAmountTimesTriedToPlaceShip = jest.fn(() => 25);
  expect(generateRandomValidShipPosition(
    mockGenerateRandomShipPosition,
    mockRandomGameboard, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue, 
    mockGetRandomIndexFromArray, 
    mockGetRandomArrayValue, 
    mockCalculateShipCoords,
    mockIsValidShipPosition,
    mockIsEmptyGameboardCell,
    mockEmptyGameboardValue,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockGetFirstDigitOfNumber,
    mockCheckIfShipIsNotSurroundedByAnotherShip,
    mockMaxAmountTimesTriedToPlaceShip()
  )).toBe(false);
});

test("return the 3rd generated randomShipPosition after previous generated randomShipPosition tries were all not a valid ship on the gameboard", () => {
  const mockGenerateRandomShipPosition = jest
    .fn() 
    .mockReturnValue(
      {
        startIndex: 5,
        direction: "horizontal",
        shipCoords: [5, 6, 7, 8]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 74,
        direction: "vertical",
        shipCoords: [74, 84, 94, 104]
      }
    )
    .mockReturnValueOnce(
      {
        startIndex: 80,
        direction: "vertical",
        shipCoords: [80, 90, 100, 110]
      }
    );
  const mockRandomGameboard = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockShip = jest.fn(() => ({
    name: "c1",
    shipLength: 4
  }));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetRandomIndexFromArray =  jest
    .fn() 
    .mockReturnValue(14)
    .mockReturnValueOnce(74)
    .mockReturnValueOnce(80);
  const mockGetRandomArrayValue = jest.fn(() => "horizontal");
  const mockCalculateShipCoords = jest
    .fn() 
    .mockReturnValue([5, 6, 7, 8])
    .mockReturnValueOnce([74, 84, 94, 104])
    .mockReturnValueOnce([80, 90, 100, 110]);
  const mockIsValidShipPosition = jest
    .fn() 
    .mockReturnValue(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false);
  const mockIsEmptyGameboardCell = jest.fn(() => true);
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest
    .fn() 
    .mockReturnValue(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false);
  const mockGetFirstDigitOfNumber = jest
    .fn() 
    .mockReturnValue(5)
    .mockReturnValueOnce(7)
    .mockReturnValueOnce(8);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => true);
  const mockMaxAmountTimesTriedToPlaceShip = jest.fn(() => 25);
  expect(generateRandomValidShipPosition(
    mockGenerateRandomShipPosition,
    mockRandomGameboard, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue, 
    mockGetRandomIndexFromArray, 
    mockGetRandomArrayValue, 
    mockCalculateShipCoords,
    mockIsValidShipPosition,
    mockIsEmptyGameboardCell,
    mockEmptyGameboardValue,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockGetFirstDigitOfNumber,
    mockCheckIfShipIsNotSurroundedByAnotherShip,
    mockMaxAmountTimesTriedToPlaceShip()
  )).toStrictEqual({
    startIndex: 5,
    direction: "horizontal",
    shipCoords: [5, 6, 7, 8]
  });
  expect(mockGenerateRandomShipPosition).toHaveBeenCalledTimes(3);
  expect(mockIsValidShipPosition).toHaveBeenCalledTimes(3);
});
