import assert from 'assert'

function splitArrayDeclarative(arr: number[], cellCount: number): number[][] {
  const maxElemsInCell = Math.ceil(arr.length / cellCount)
  const arrCopy = [...arr]

  return Array(cellCount)
    .fill([])
    .map((cell, i) => [...cell, ...arrCopy.splice(0, maxElemsInCell)])
}

function splitArrayImperative(arr: number[], cellCount: number): number[][] {
  const maxElemsInCell = Math.ceil(arr.length / cellCount)
  const result: number[][] = Array(cellCount).fill(null).map(cell => [])
  let cellIndex = 0

  for (const elem of arr) {
    let cell = result[cellIndex]

    if (cell.length < maxElemsInCell) {
      cell.push(elem)
    }
    else {
      cellIndex += 1
      result[cellIndex].push(elem)
    }
  }

  return result
}

assert.deepEqual(
  splitArrayDeclarative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
  [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
)
assert.deepEqual(
  splitArrayDeclarative([4, 1, 4], 5),
  [[4], [1], [4], [], []]
)
assert.deepEqual(
  splitArrayDeclarative([9, 1, 4, 1, 2], 4),
  [[9, 1], [4, 1], [2], []]
)

assert.deepEqual(
  splitArrayImperative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
  [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
)
assert.deepEqual(
  splitArrayImperative([4, 1, 4], 5),
  [[4], [1], [4], [], []]
)
assert.deepEqual(
  splitArrayImperative([9, 1, 4, 1, 2], 4),
  [[9, 1], [4, 1], [2], []]
)

