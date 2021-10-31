import { expect } from "@jest/globals";
import { isValidShipPosition } from "../isValidShipPosition";

test("returns true is the ship is in a valid position to be placed on the gameboard", () => {
  const mockShip = jest.fn(() => (
    {
      name: "c1",
      length: 4
    }
  ));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockCheckIfShipIsNotSurroundedByAnotherShip = jest.fn(() => true);
  expect(isValidShipPosition(
    [
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
    ], 
    "empty", 
    {
      startIndex: 14,
      direction: "horizontal",
      shipCoords: [14, 15, 16, 17]
    }, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue,
    mockGetFirstDigitOfNumber,
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockCheckIfShipIsNotSurroundedByAnotherShip
  )).toBe(true);
})
