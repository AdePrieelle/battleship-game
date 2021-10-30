import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from '../checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds';
import { getFirstDigitOfNumber } from '../../getFirstDigitOfNumber/getFirstDigitOfNumber';

test("check if startIndex with the direction horizontal generate ship coords that aren't placed out of bounds in the gameboard works correctly", () => {
  expect(checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(6, { name: "c1", shipLength: 4}, "horizontal", "horizontal", "vertical", getFirstDigitOfNumber)).toBe(true);
})

test("check if startIndex with the direction horizontal generate ship coords that are placed out of bounds in the gameboard works correctly", () => {
  expect(checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(7, { name: "c1", shipLength: 4}, "horizontal", "horizontal", "vertical", getFirstDigitOfNumber)).toBe(false);
})

test("check if startIndex with the direction vertical generate ship coords that aren't placed out of bounds in the gameboard works correctly", () => {
  expect(checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(69, { name: "c1", shipLength: 4}, "vertical", "horizontal", "vertical", getFirstDigitOfNumber)).toBe(true);
})

test("check if startIndex with the direction vertical generate ship coords that are placed out of bounds in the gameboard works correctly", () => {
  expect(checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(79, { name: "c1", shipLength: 4}, "vertical", "horizontal", "vertical", getFirstDigitOfNumber)).toBe(false);
})
