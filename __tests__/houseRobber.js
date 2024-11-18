import assert from 'node:assert';
import { time, timeEnd } from 'node:console';
import { rob, robRecursive } from '../dist/houseRobber/solution.js';
import { repeat } from '../lib/lib.js';

// eslint-disable-next-line
const bigInput = [226, 174, 214, 16, 218, 48, 153, 131, 128, 17, 157, 142, 88, 43, 37, 157, 43, 221, 191, 68, 206, 23, 225, 82, 54, 118, 111, 46, 80, 49, 245, 63, 25, 194, 72, 80, 143, 55, 209, 18, 55, 122, 65, 66, 177, 101, 63, 201, 172, 130, 103, 225, 142, 46, 86, 185, 62, 138, 212, 192, 125, 77, 223, 188, 99, 228, 90, 25, 193, 211, 84, 239, 119, 234, 85, 83, 123, 120, 131, 203, 219, 10, 82, 35, 120, 180, 249, 106, 37, 169, 225, 54, 103, 55, 166, 124]

// assert.equal(robRecursive([0]), 0);
// assert.equal(robRecursive([1, 2]), 2);
// assert.equal(robRecursive([1, 2, 3, 1]), 4);
// assert.equal(robRecursive([2, 7, 9, 3, 1, 5]), 16);

// time('recursion');
// repeat(() => robRecursive(bigInput), 10000);
// timeEnd('recursion');

assert.equal(robRecursive(bigInput), 7102);

// assert.equal(rob([0]), 0);
// assert.equal(rob([1, 2]), 2);
// assert.equal(rob([1, 2, 3, 1]), 4);
assert.equal(rob([2, 7, 9, 3, 1, 5]), 16);
// assert.equal(rob(bigInput), 7102);

// time('loop');
// repeat(() => rob(bigInput), 10000);
// timeEnd('loop');
