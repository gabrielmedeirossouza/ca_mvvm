import { Position } from './position';

it.each([
  { x: 0, y: 0,  expected: { x: 0, y: 0, } },
  { x: 1, y: 1,  expected: { x: 1, y: 1, } },
  { x: 2, y: 2,  expected: { x: 2, y: 2, } },
  { x: 3.37, y: 3.123, expected: { x: 3.37, y: 3.123 } },
])(`should create a position ($x, $y)`, ({ x, y, expected }) => {
  const position = new Position(x, y);
  expect(position).toEqual(expected);
});
