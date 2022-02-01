import { isAllShipsSunken } from '../isAllShipsSunken';

test("isAllShipsSunken returns false if some ships cells aren't hit", () => {
  const mockGameboard = jest.fn(() => ([
    "hit", "empty", "hit", "empty", "hit", "empty", "hit", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "hit", "empty", "hit", "hit", "empty", "hit", "hit", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "b2", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "hit", "hit", "hit", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
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
  const mockShipNamePropertyText = jest.fn(() => "name");

  expect(isAllShipsSunken(
    mockGameboard(), 
    mockShips(),
    mockShipNamePropertyText()
  )).toBe(false);
});

test("isAllShipsSunken returns true if all ships cells are hit", () => {
  const mockGameboard = jest.fn(() => ([
    "hit", "empty", "hit", "empty", "hit", "empty", "hit", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "hit", "empty", "hit", "hit", "empty", "hit", "hit", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "empty", "hit", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "hit", "hit", "hit", "hit", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
  ]));
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
  const mockShipNamePropertyText = jest.fn(() => "name");

  expect(isAllShipsSunken(
    mockGameboard(), 
    mockShips(),
    mockShipNamePropertyText()
  )).toBe(true);
});
