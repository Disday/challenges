export function fibonacciLoop(n) {
  if (n === 0) {
    return 0;
  }

  const list = [0, 1];

  for (let i = 2; i <= n; i += 1) {
    const prevElem = list[list.length - 1];
    const prevPrevElem = list[list.length - 2];

    list.push(prevElem + prevPrevElem);
  }

  return list.pop();
}

export function fibonacci(arg) {
  const cache = new Map([
    [0, 0],
    [1, 1],
  ]);

  const iter = (n) => {
    if (n < 2) return n;

    if (cache.has(arg)) {
      return cache.get(n);
    }

    const result = iter(n - 1) + cache.get(n - 2);
    cache.set(n, result);

    return result;
  };

  return iter(arg);
}

console.time('1');
console.log(fibonacci(50));
console.timeEnd('1');

function fibonacci2(n) {
  if (n < 2) return n;
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

console.time('2');
console.log(fibonacci2(45));
console.timeEnd('2');
