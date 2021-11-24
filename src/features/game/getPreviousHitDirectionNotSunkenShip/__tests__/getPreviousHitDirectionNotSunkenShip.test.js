import { getPreviousHitDirectionNotSunkenShip } from "../getPreviousHitDirectionNotSunkenShip";

test("returns vertical if previousHitComputerCellsNotSunkenShip cells are vertically above eachother and has ascending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([12, 22]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("vertical");
});

test("returns vertical if previousHitComputerCellsNotSunkenShip cells are vertically above eachother and has descending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([22, 12]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("vertical");
});

test("returns horizontal if previousHitComputerCellsNotSunkenShip cells are horizontally besides eachother and has ascending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([43, 44]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("horizontal");
});

test("returns horizontal if previousHitComputerCellsNotSunkenShip cells are horizontally besides eachother and has descending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([44, 43]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("horizontal");
});
