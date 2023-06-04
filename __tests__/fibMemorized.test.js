import { expect, test } from '@jest/globals';
import fib from '../fibMemoized.js'

test('Small Numbers', () => {

    expect(fib(0)).toEqual(0);
    expect(fib(1)).toEqual(1);
    expect(fib(5)).toEqual(5);
    expect(fib(10)).toEqual(55);
    expect(fib(15)).toEqual(610);
    expect(fib(20)).toEqual(6765);
});

test('Large Numbers', () => {
    expect(fib(50)).toEqual(12586269025);
    expect(fib(60)).toEqual(1548008755920);
    expect(fib(70)).toEqual(190392490709135);
});