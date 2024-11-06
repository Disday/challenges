import assert from 'node:assert';
import { log, time, timeEnd } from 'node:console';
import { intersection1, intersection2 } from '../dist/uniqueIntersection/solution.js';
import { repeat } from '../lib/lib.js';

const getRandom = () => Math.round(Math.random() * 1000);

const arr1 = Array(1000).fill().map(getRandom);
const arr2 = Array(1000).fill().map(getRandom);

const iterationsCount = 10000;

const nodeSetResult = [...new Set(arr1).intersection(new Set(arr2))];

assert.deepEqual(
  intersection1(arr1, arr2).sort(),
  nodeSetResult.sort(),
);

assert.deepEqual(
  intersection2(arr1, arr2).sort(),
  nodeSetResult.sort(),
);

log(`n = ${arr1.length}`);
log(`m = ${arr1.length}`);

('node Set.intersection()', () => {
  const timerName = `nodeSet ${iterationsCount} iterations`;

  time(timerName);
  repeat(
    () => {
      const set1 = new Set(arr1);
      const set2 = new Set(arr2);
      set1.intersection(set2);
    },
    iterationsCount,
  );

  timeEnd(timerName);
})();

('Solution1', () => {
  const timerName = `Solution1 ${iterationsCount} iterations`;

  time(timerName);
  repeat(() => intersection1(arr1, arr2), iterationsCount);
  timeEnd(timerName);
})();

('Solution2', () => {
  const timerName = `Solution2 ${iterationsCount} iterations`;

  time(timerName);
  repeat(() => intersection2(arr1, arr2), iterationsCount);
  timeEnd(timerName);
})();
