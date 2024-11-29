import { equal } from 'assert';
import withoutTwoZeros from '../challenges/withoutTwoZeros/solution.js';

equal(withoutTwoZeros(3, 1), 0);

equal(withoutTwoZeros(3, 2), 1);
equal(withoutTwoZeros(1, 1), 2);
equal(withoutTwoZeros(3, 5), 20);
equal(withoutTwoZeros(1, 3), 4);
equal(withoutTwoZeros(2, 2), 3);
equal(withoutTwoZeros(2, 4), 10);
equal(withoutTwoZeros(4, 6), 35);
equal(withoutTwoZeros(5, 6), 21);
equal(withoutTwoZeros(5, 7), 56);
equal(withoutTwoZeros(6, 8), 84);
