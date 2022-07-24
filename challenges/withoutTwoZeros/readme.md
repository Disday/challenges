## Without two zeros

Implement  function that takes two arguments as input - the number of zeros and the number of ones, and determines how many ways to place those zeros and ones so that there are no two zeros in a row.

For example, let's define all the ways of placing two zeros and two ones. There are six possible ways of placement: 0011, 0101, 0110, 1001, 1010, 1100. Three cases contain two zeros in a row: 0011, 1001, and 1100. Subtract them from the total number and we get three possible ways: 0101, 0110, and 1010. The answer is 3.

Examples of use:
```js
withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3); // 4
withoutTwoZeros(2, 4); // 10
```