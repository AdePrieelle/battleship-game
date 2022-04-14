import { getPreviousHitDirectionNotSunkenShip } from "../getPreviousHitDirectionNotSunkenShip";

test("returns vertical if previousHitComputerCellsNotSunkenShip cells are vertically above eachother and has ascending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([5, 15]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("vertical");
});

test("returns vertical if previousHitComputerCellsNotSunkenShip cells are vertically above eachother and has descending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([15, 5]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("vertical");
});

test("returns horizontal if previousHitComputerCellsNotSunkenShip cells are horizontally besides eachother and has ascending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([0, 1]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("horizontal");
});

test("returns horizontal if previousHitComputerCellsNotSunkenShip cells are horizontally besides eachother and has descending numbers for previousHitComputerCellsNotSunkenShip array", () => {
  const mockPreviousHitDirectionNotSunkenShipVerticalValue = jest.fn(() => "vertical");
  const mockPreviousHitDirectionNotSunkenShipHorizontalValue = jest.fn(() => "horizontal");
  const mockPreviousHitComputerCellsNotSunkenShip = jest.fn(() => ([1, 0]));
  expect(getPreviousHitDirectionNotSunkenShip(
    mockPreviousHitDirectionNotSunkenShipVerticalValue(),
    mockPreviousHitDirectionNotSunkenShipHorizontalValue(),
    mockPreviousHitComputerCellsNotSunkenShip(),
  )).toBe("horizontal");
});
