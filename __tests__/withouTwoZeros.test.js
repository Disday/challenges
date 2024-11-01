import withoutTwoZeros from '../challenges/withoutTwoZeros/solution.js';

describe('withoutTwoZeros', () => {
  it('the base cases', () => {
    expect(withoutTwoZeros(3, 1)).toBe(0);
    expect(withoutTwoZeros(3, 2)).toBe(1);
    expect(withoutTwoZeros(1, 1)).toBe(2);
    expect(withoutTwoZeros(3, 5)).toBe(20);
  });
  it('should work', () => {
    expect(withoutTwoZeros(1, 3)).toBe(4);
    expect(withoutTwoZeros(2, 2)).toBe(3);
    expect(withoutTwoZeros(2, 4)).toBe(10);
    expect(withoutTwoZeros(4, 6)).toBe(35);
    expect(withoutTwoZeros(5, 6)).toBe(21);
    expect(withoutTwoZeros(5, 7)).toBe(56);
    expect(withoutTwoZeros(6, 8)).toBe(84);
  });
});
