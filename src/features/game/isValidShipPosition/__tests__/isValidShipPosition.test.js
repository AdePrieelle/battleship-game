import { expect } from "@jest/globals";
import { isValidShipPosition } from "../isValidShipPosition";

test("returns true is the ship is in a valid position to be placed on the gameboard", () => {
  const mockGameboard = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
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
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockRandomShipPosition = jest.fn(() => ({
    startIndex: 14,
    direction: "horizontal",
    shipCoords: [14, 15, 16, 17]
  }));
  const mockShip = jest.fn(() => (
    {
      name: "c1",
      shipLength: 4
    }
  ));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockIsEmptyGameboardCell = jest.fn(() => true);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => true);
  expect(isValidShipPosition(
    mockGameboard, 
    mockEmptyGameboardValue, 
    mockRandomShipPosition, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue,
    mockGetFirstDigitOfNumber,
    mockIsEmptyGameboardCell,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockCheckIfShipIsNotSurroundedByAnotherShip
  )).toBe(true);
});

test("isValidShipPosition returns false if the startIndex isn't an empty gameboard cell on the gameboard", () => {
  const mockGameboard = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "d1", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockRandomShipPosition = jest.fn(() => ({
    startIndex: 14,
    direction: "horizontal",
    shipCoords: [14, 15, 16, 17]
  }));
  const mockShip = jest.fn(() => (
    {
      name: "c1",
      shipLength: 4
    }
  ));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockIsEmptyGameboardCell = jest.fn(() => false);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => true);
  expect(isValidShipPosition(
    mockGameboard, 
    mockEmptyGameboardValue, 
    mockRandomShipPosition, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue,
    mockGetFirstDigitOfNumber,
    mockIsEmptyGameboardCell,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockCheckIfShipIsNotSurroundedByAnotherShip
  )).toBe(false);
});

test("isValidShipPosition returns false if the ship is out of bounds", () => {
  const mockGameboard = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
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
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockRandomShipPosition = jest.fn(() => ({
    startIndex: 17,
    direction: "horizontal",
    shipCoords: [17, 18, 19, 20]
  }));
  const mockShip = jest.fn(() => (
    {
      name: "c1",
      shipLength: 4
    }
  ));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockIsEmptyGameboardCell = jest.fn(() => true);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => false);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => true);
  expect(isValidShipPosition(
    mockGameboard, 
    mockEmptyGameboardValue, 
    mockRandomShipPosition, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue,
    mockGetFirstDigitOfNumber,
    mockIsEmptyGameboardCell,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockCheckIfShipIsNotSurroundedByAnotherShip
  )).toBe(false);
});

test("isValidShipPosition returns false if the ship is surrounded by other ships", () => {
  const mockGameboard = jest.fn(() => ([
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "d1", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
  const mockEmptyGameboardValue = jest.fn(() => "empty");
  const mockRandomShipPosition = jest.fn(() => ({
    startIndex: 17,
    direction: "horizontal",
    shipCoords: [17, 18, 19, 20]
  }));
  const mockShip = jest.fn(() => (
    {
      name: "c1",
      shipLength: 4
    }
  ));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockIsEmptyGameboardCell = jest.fn(() => true);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => false);
  expect(isValidShipPosition(
    mockGameboard, 
    mockEmptyGameboardValue, 
    mockRandomShipPosition, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue,
    mockGetFirstDigitOfNumber,
    mockIsEmptyGameboardCell,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockCheckIfShipIsNotSurroundedByAnotherShip
  )).toBe(false);
});
