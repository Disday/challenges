const pascalTriangle = (row) => {
  const line = [1];

  for (let i = 0; i < row; i += 1) {
    const element = Math.round(line[i] * ((row - i) / (i + 1)));
    line.push(element);
  }

  return line;
};

export default pascalTriangle;

console.time('pascal');
if (process.argv[2]) {
  console.log(
    pascalTriangle(Number(process.argv[2])),
  );
  console.timeEnd('pascal');
}
