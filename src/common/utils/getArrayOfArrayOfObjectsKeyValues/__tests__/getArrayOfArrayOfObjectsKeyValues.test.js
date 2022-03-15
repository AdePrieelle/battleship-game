import { getArrayOfArrayOfObjectsKeyValues } from '../getArrayOfArrayOfObjectsKeyValues';

test("return an array of object key values from an array of objects", () => {
  const mockArray = jest.fn(() => ([
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
  const mockKey = jest.fn(() => ("name"));
  
  expect(getArrayOfArrayOfObjectsKeyValues(mockArray(), mockKey())).toStrictEqual(
    ["d1", "d2", "d3", "d4", "s1", "s2", "s3", "b1", "b2", "c1"]
  );
});

test("return an empty array is key value doesnt exist", () => {
  const mockArray = jest.fn(() => ([
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
  const mockKey = jest.fn(() => ("namee"));
  
  expect(getArrayOfArrayOfObjectsKeyValues(mockArray(), mockKey())).toStrictEqual(
    []
  );
});

test("return an empty array if array used as parameter is empty", () => {
  const mockArray = jest.fn(() => ([]));
  const mockKey = jest.fn(() => ("name"));
  
  expect(getArrayOfArrayOfObjectsKeyValues(mockArray(), mockKey())).toStrictEqual(
    []
  );
});
