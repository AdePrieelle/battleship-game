import { getValidStartIdShipNotOutOfBounds } from "../getValidStartIdShipNotOutOfBounds";

test("returns the original id as validStartIdShipNotOutOfBounds for a ship if the id was already valid and shipPlacementDirection is horizontal", () => {
  const mockId = jest.fn(() => 16);
  const mockGetRowNumberOfIndexTwoDimensionalArray = jest.fn(() => 1);
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockGetLastDigitOfNumber = jest.fn(() => 6);
  const mockGetLastIdInRowTwoDimensionalArray = jest.fn(() => 19);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockCurrentIndexShipToBePlaced = jest.fn(() => 1);
  const mockShipLengthPropertyText = jest.fn(() => "shipLength");
  const mockShipPlacementDirection = jest.fn(() => "horizontal");
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockAmountOfRows = jest.fn(() => 10);
  const mockAmountOfColumns = jest.fn(() => 10);
  const mockSortedShipsLengthDescendingOrder = jest.fn(() => ([
    {
      name: "c1",
      shipLength: 4,
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
    }
  ]));
  
  expect(getValidStartIdShipNotOutOfBounds(
    mockId(),
    mockGetRowNumberOfIndexTwoDimensionalArray,
    mockGetFirstDigitOfNumber(),
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockShipPlacementDirection(),
    mockHorizontalDirectionValue(),
    mockGetLastIdInRowTwoDimensionalArray(),
    mockAmountOfRows(),
    mockAmountOfColumns(),
    mockSortedShipsLengthDescendingOrder(),
    mockCurrentIndexShipToBePlaced(),
    mockVerticalDirectionValue(),
    mockShipLengthPropertyText(),
    mockGetLastDigitOfNumber()
  )).toBe(16);
});

test("returns the original id as validStartIdShipNotOutOfBounds for a ship if the id was already valid and shipPlacementDirection is vertical", () => {
  const mockId = jest.fn(() => 16);
  const mockGetRowNumberOfIndexTwoDimensionalArray = jest.fn(() => 1);
  const mockGetFirstDigitOfNumber = jest.fn(() => 1);
  const mockGetLastDigitOfNumber = jest.fn(() => 6);
  const mockGetLastIdInRowTwoDimensionalArray = jest.fn(() => 19);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockCurrentIndexShipToBePlaced = jest.fn(() => 1);
  const mockShipLengthPropertyText = jest.fn(() => "shipLength");
  const mockShipPlacementDirection = jest.fn(() => "vertical");
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockAmountOfRows = jest.fn(() => 10);
  const mockAmountOfColumns = jest.fn(() => 10);
  const mockSortedShipsLengthDescendingOrder = jest.fn(() => ([
    {
      name: "c1",
      shipLength: 4,
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
    }
  ]));
  
  expect(getValidStartIdShipNotOutOfBounds(
    mockId(),
    mockGetRowNumberOfIndexTwoDimensionalArray,
    mockGetFirstDigitOfNumber(),
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockShipPlacementDirection(),
    mockHorizontalDirectionValue(),
    mockGetLastIdInRowTwoDimensionalArray(),
    mockAmountOfRows(),
    mockAmountOfColumns(),
    mockSortedShipsLengthDescendingOrder(),
    mockCurrentIndexShipToBePlaced(),
    mockVerticalDirectionValue(),
    mockShipLengthPropertyText(),
    mockGetLastDigitOfNumber()
  )).toBe(16);
});

test("returns the original id as validStartIdShipNotOutOfBounds for a ship if the id was already valid and id is lower than 10", () => {
  const mockId = jest.fn(() => 6);
  const mockGetRowNumberOfIndexTwoDimensionalArray = jest.fn(() => 0);
  const mockGetFirstDigitOfNumber = jest.fn(() => 6);
  const mockGetLastDigitOfNumber = jest.fn(() => 6);
  const mockGetLastIdInRowTwoDimensionalArray = jest.fn(() => 9);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => true);
  const mockCurrentIndexShipToBePlaced = jest.fn(() => 1);
  const mockShipLengthPropertyText = jest.fn(() => "shipLength");
  const mockShipPlacementDirection = jest.fn(() => "horizontal");
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockAmountOfRows = jest.fn(() => 10);
  const mockAmountOfColumns = jest.fn(() => 10);
  const mockSortedShipsLengthDescendingOrder = jest.fn(() => ([
    {
      name: "c1",
      shipLength: 4,
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
    }
  ]));
  
  expect(getValidStartIdShipNotOutOfBounds(
    mockId(),
    mockGetRowNumberOfIndexTwoDimensionalArray,
    mockGetFirstDigitOfNumber(),
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockShipPlacementDirection(),
    mockHorizontalDirectionValue(),
    mockGetLastIdInRowTwoDimensionalArray(),
    mockAmountOfRows(),
    mockAmountOfColumns(),
    mockSortedShipsLengthDescendingOrder(),
    mockCurrentIndexShipToBePlaced(),
    mockVerticalDirectionValue(),
    mockShipLengthPropertyText,
    mockGetLastDigitOfNumber()
  )).toBe(6);
});

test("returns the a validStartIdShipNotOutOfBounds for a ship if the current id is out of bounds and id is higher than 10 and shipPlacementDirection is horizontal", () => {
  const mockId = jest.fn(() => 38);
  const mockGetRowNumberOfIndexTwoDimensionalArray = jest.fn(() => 3);
  const mockGetFirstDigitOfNumber = jest.fn(() => 3);
  const mockGetLastDigitOfNumber = jest.fn(() => 8);
  const mockGetLastIdInRowTwoDimensionalArray = jest.fn(() => 39);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => false);
  const mockCurrentIndexShipToBePlaced = jest.fn(() => 0);
  const mockShipLengthPropertyText = jest.fn(() => "shipLength");
  const mockShipPlacementDirection = jest.fn(() => "horizontal");
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockAmountOfRows = jest.fn(() => 10);
  const mockAmountOfColumns = jest.fn(() => 10);
  const mockSortedShipsLengthDescendingOrder = jest.fn(() => ([
    {
      name: "c1",
      shipLength: 4,
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
    }
  ]));
  
  expect(getValidStartIdShipNotOutOfBounds(
    mockId(),
    mockGetRowNumberOfIndexTwoDimensionalArray,
    mockGetFirstDigitOfNumber(),
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockShipPlacementDirection(),
    mockHorizontalDirectionValue(),
    mockGetLastIdInRowTwoDimensionalArray,
    mockAmountOfRows(),
    mockAmountOfColumns(),
    mockSortedShipsLengthDescendingOrder(),
    mockCurrentIndexShipToBePlaced(),
    mockVerticalDirectionValue(),
    mockShipLengthPropertyText(),
    mockGetLastDigitOfNumber()
  )).toBe(36);
});

test("returns the a validStartIdShipNotOutOfBounds for a ship if the current id is out of bounds and id is lower than 10 and shipPlacementDirection is horizontal", () => {
  const mockId = jest.fn(() => 8);
  const mockGetRowNumberOfIndexTwoDimensionalArray = jest.fn(() => 0);
  const mockGetFirstDigitOfNumber = jest.fn(() => 8);
  const mockGetLastDigitOfNumber = jest.fn(() => 8);
  const mockGetLastIdInRowTwoDimensionalArray = jest.fn(() => 9);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => false);
  const mockCurrentIndexShipToBePlaced = jest.fn(() => 0);
  const mockShipLengthPropertyText = jest.fn(() => "shipLength");
  const mockShipPlacementDirection = jest.fn(() => "horizontal");
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockAmountOfRows = jest.fn(() => 10);
  const mockAmountOfColumns = jest.fn(() => 10);
  const mockSortedShipsLengthDescendingOrder = jest.fn(() => ([
    {
      name: "c1",
      shipLength: 4,
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
    }
  ]));
  
  expect(getValidStartIdShipNotOutOfBounds(
    mockId(),
    mockGetRowNumberOfIndexTwoDimensionalArray,
    mockGetFirstDigitOfNumber(),
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockShipPlacementDirection(),
    mockHorizontalDirectionValue(),
    mockGetLastIdInRowTwoDimensionalArray,
    mockAmountOfRows(),
    mockAmountOfColumns(),
    mockSortedShipsLengthDescendingOrder(),
    mockCurrentIndexShipToBePlaced(),
    mockVerticalDirectionValue(),
    mockShipLengthPropertyText(),
    mockGetLastDigitOfNumber()
  )).toBe(6);
});

test("returns the a validStartIdShipNotOutOfBounds for a ship if the current id is out of bounds and shipPlacementDirection is vertical", () => {
  const mockId = jest.fn(() => 86);
  const mockGetRowNumberOfIndexTwoDimensionalArray = jest.fn(() => 8);
  const mockGetFirstDigitOfNumber = jest.fn(() => 8);
  const mockGetLastDigitOfNumber = jest.fn(() => 6);
  const mockGetLastIdInRowTwoDimensionalArray = jest.fn(() => 89);
  const mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds = jest.fn(() => false);
  const mockCurrentIndexShipToBePlaced = jest.fn(() => 0);
  const mockShipLengthPropertyText = jest.fn(() => "shipLength");
  const mockShipPlacementDirection = jest.fn(() => "vertical");
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockAmountOfRows = jest.fn(() => 10);
  const mockAmountOfColumns = jest.fn(() => 10);
  const mockSortedShipsLengthDescendingOrder = jest.fn(() => ([
    {
      name: "c1",
      shipLength: 4,
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
    }
  ]));
  
  expect(getValidStartIdShipNotOutOfBounds(
    mockId(),
    mockGetRowNumberOfIndexTwoDimensionalArray,
    mockGetFirstDigitOfNumber(),
    mockCheckIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    mockShipPlacementDirection(),
    mockHorizontalDirectionValue(),
    mockGetLastIdInRowTwoDimensionalArray,
    mockAmountOfRows(),
    mockAmountOfColumns(),
    mockSortedShipsLengthDescendingOrder(),
    mockCurrentIndexShipToBePlaced(),
    mockVerticalDirectionValue(),
    mockShipLengthPropertyText(),
    mockGetLastDigitOfNumber
  )).toBe(66);
});
