// optimized
const isEven = (n) => n % 2 === 0;

const pascalTriangle = (n) => {
  const iter = (prev) => {
    if (prev.length > n) {
      return prev;
    }

    const count = Math.floor(prev.length / 2);
    const elems = Array.from(Array(count), (elem, i) => prev[i] + prev[i + 1]);

    const head = [...elems];
    if (isEven(elems[0])) {
      elems.pop();
    }
    const row = [1, ...head, ...elems.reverse(), 1];
    return iter(row);
  };

  return n === 0 ? [1] : iter([1, 1]);
};
export default pascalTriangle;

console.time('pascal');
if (process.argv[2]) {
  console.log(
    pascalTriangle(Number(process.argv[2])),
  );
  console.timeEnd('pascal');
}
