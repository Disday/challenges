"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_assert_1 = require("node:assert");
// 1) splitIntoSubarrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) -> [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
// 2) splitIntoSubarrays([4, 1, 4], 5) -> [[4], [1], [4], [] , []]
// 3) splitIntoSubarrays([9, 1, 4, 1, 2], 4) -> [[9, 1], [4, 1], [2], []]
function split(arr, count) {
    var result = [[]];
    var maxElemsCount = Math.ceil(arr.length / count);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elem = arr_1[_i];
        var currentCell = result[result.length - 1];
        console.log(maxElemsCount);
        if (currentCell.length < maxElemsCount) {
            currentCell.push(elem);
        }
        else {
            result.push([elem]);
        }
    }
    return result;
}
// console.log(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
node_assert_1.default.equal(split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
