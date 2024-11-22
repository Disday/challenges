import assert from 'assert'

function split(arr: number[], cellCount: number): number[][] {
  const maxElemsInCell = Math.ceil(arr.length / cellCount)
  const arrCopy = [...arr]

  return Array(cellCount)
    .fill([])
    .map((cell, i) => [...cell, ...arrCopy.splice(0, maxElemsInCell)])
}

// assert.deepEqual(
//   split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5),
//   [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
// )
// assert.deepEqual(
//   split([4, 1, 4], 5),
//   [[4], [1], [4], [], []]
// )
// assert.deepEqual(
//   split([9, 1, 4, 1, 2], 4),
//   [[9, 1], [4, 1], [2], []]
// )

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

// console.log(splitArrayImperative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
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

/**
 * По маршруту /api/user/disable-problems администратор системы отправляет запрос
 * на простановку группе пользователей флага problem: false.
 *
 * Необходимо найти всех пользователей по указанной в запросе роли и проставить им нужный флаг.
 * В результате выполнения запроса вернуть количество измененных пользователей в БД за эту операцию.
 * Используется MongoDB / Postgres / MySQL / любая другая БД
 * 
 * Junior-разработчик отдал вам на ревью код, необходимо указать комментарии, что тут стоит улучшить.
 * Можете либо указать комментарии текстом, либо написать свой вариант на псевдо-коде
*/

