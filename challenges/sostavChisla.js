/**
* Написать функцию sostavChisla(massivChisel: number[], chislo: number),
  которая бы находила все возможные комбинации чисел из massivChisel,
  сумма которых равна chislo. При этом:
  1) massivChisel содержит, только уникальные положительные числа (> 0)
  2) в комбинации не должно быть повторений чисел
  3) все комбинации должны быть уникальными

  Для проверки работоспособности функции запустить runTests()

  @param massivChisel: number[]
  @param chislo: number
  @return Array<Array<number>>
*/
function sostavChisla(massivChisel, chislo) {
  // код писать только внутри данной функции
  massivChisel.sort((a, b) => b - a);
  // console.log(mas);

  const result = [];
  let i = 0;
  let goal = chislo;
  let combo = [];

  while (i < massivChisel.length) {
    const max = massivChisel[i];
    const d = goal - max;
    // console.log({ d, max });

    if (d !== 0) {
      combo.push(max);
      i++;
      goal = d;
      console.log(combo);
      continue;
    }

    i = 0;
    goal = chislo;
    result.push(combo);
    combo = [];
  }

  return result;
}

console.log(sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 15));

// function compareNumericArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   arr1 = [...arr1].sort();
//   arr2 = [...arr2].sort();

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// function compareArraysOfNumericArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let el1 of arr1) {
//     if (arr2.findIndex((el2) => compareNumericArrays(el1, el2)) < 0) {
//       return false;
//     }
//   }

//   return true;
// }

// runTests();

// function runTests() {
//   const tests = [
//     {
//       chislo: 5,
//       massivChisel: [8, 2, 3, 4, 6, 7, 1],
//       result: [
//         [2, 3],
//         [4, 1],
//       ],
//     },
//     {
//       chislo: 99,
//       massivChisel: [8, 2, 3, 4, 6, 7, 1],
//       result: [],
//     },
//     {
//       chislo: 8,
//       massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
//       result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]],
//     },
//     {
//       chislo: 8,
//       massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
//       result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]],
//     },
//     {
//       chislo: 15,
//       massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
//       result: [
//         [1, 2, 3, 4, 5],
//         [2, 3, 4, 6],
//         [1, 3, 5, 6],
//         [4, 5, 6],
//         [1, 3, 4, 7],
//         [1, 2, 5, 7],
//         [3, 5, 7],
//         [2, 6, 7],
//         [1, 2, 4, 8],
//         [3, 4, 8],
//         [2, 5, 8],
//         [1, 6, 8],
//         [7, 8],
//       ],
//     },
//   ];

//   let errors = 0;
//   for (const test of tests) {
//     let result;
//     try {
//       result = sostavChisla(test.massivChisel, test.chislo);

//       if (!compareArraysOfNumericArrays(result, test.result)) {
//         errors++;
//         console.log("--------------------------------------------");
//         console.log("failed for test", test, "Got result", result);
//       }
//     } catch (e) {
//       errors++;
//       console.log("failed for", test, "exception", e.message);
//     }
//   }

//   if (errors === 0) {
//     console.log("checkStringForBracects test successfuly completed");
//   } else {
//     console.log(`checkStringForBracects test failed with ${errors} errors`);
//   }
// }
