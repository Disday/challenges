// unoptimizied
const pascalTriangle = (n) => {
  const iter = (prev) => {
    if (prev.length > n) {
      return prev;
    }

    const row = Array.from(
      Array(prev.length + 1),
      (elem, i) => {
        const sum = prev[i] + prev[i - 1];
        return Number.isNaN(sum) ? 1 : sum;
      },
    );

    return iter(row);
  };

  return n === 0 ? [1] : iter([1]);
};

export default pascalTriangle;

console.time('pascal');
if (process.argv[2]) {
  console.log(
    pascalTriangle(Number(process.argv[2])),
  );
  console.timeEnd('pascal');
}
