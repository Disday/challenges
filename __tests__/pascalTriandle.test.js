import test from 'jest';

import simple from '../challenges/pascalTriangle/pascalTriangle.js';
import optimized from '../challenges/pascalTriangle/pascalTriangleOptimized.js';
import advanced from '../challenges/pascalTriangle/pascalTriangleAdvanced.js';

const map = [
  [0, [1]],
  [1, [1, 1]],
  [2, [1, 2, 1]],
  [3, [1, 3, 3, 1]],
  [4, [1, 4, 6, 4, 1]],
  [7, [1, 7, 21, 35, 35, 21, 7, 1]],
  [12, [1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1]],
];

test.each(map)('simple', (n, expected) => {
  expect(simple(n)).toEqual(expected);
});

test.each(map)('optimized', (n, expected) => {
  expect(optimized(n)).toEqual(expected);
});

test.each(map)('advanced', (n, expected) => {
  expect(advanced(n)).toEqual(expected);
});
