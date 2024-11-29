import { equal } from 'assert';
import { fibonacci, fibonacciLoop } from '../challenges/fibonacci/fibMemoized.js';

equal(fibonacci(0), 0);
equal(fibonacci(5), 5);
equal(fibonacci(10), 55);
equal(fibonacci(15), 610);
equal(fibonacci(20), 6765);
equal(fibonacci(50), 12586269025);
equal(fibonacci(60), 1548008755920);
equal(fibonacci(70), 190392490709135);

equal(fibonacciLoop(0), 0);
equal(fibonacciLoop(5), 5);
equal(fibonacciLoop(10), 55);
equal(fibonacciLoop(15), 610);
equal(fibonacciLoop(20), 6765);
equal(fibonacciLoop(50), 12586269025);
equal(fibonacciLoop(60), 1548008755920);
equal(fibonacciLoop(70), 190392490709135);
