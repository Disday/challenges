// import { expect, test } from '@jest/globals';
import assert from 'assert';
import { fibonacci, fibonacciLoop } from '../challenges/fibMemoized.js';

// assert.equal(fibonacci(0), 0);
// assert.equal(fibonacci(5), 5);
// assert.equal(fibonacci(10), 55);
// assert.equal(fibonacci(15), 610);
// assert.equal(fibonacci(20), 6765);
// assert.equal(fibonacci(50), 12586269025);
// assert.equal(fibonacci(60), 1548008755920);
// assert.equal(fibonacci(70), 190392490709135);

assert.equal(fibonacciLoop(0), 0);
assert.equal(fibonacciLoop(5), 5);
assert.equal(fibonacciLoop(10), 55);
assert.equal(fibonacciLoop(15), 610);
assert.equal(fibonacciLoop(20), 6765);
assert.equal(fibonacciLoop(50), 12586269025);
assert.equal(fibonacciLoop(60), 1548008755920);
assert.equal(fibonacciLoop(70), 190392490709135);
