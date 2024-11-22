import { log } from "console"

export function rob(arr: number[]): number {
  let prevPrev = 0
  let prev = 0

  for (let elem of arr) {
    const temp = prev
    prev = Math.max(prev, prevPrev + elem)
    prevPrev = temp
  }

  return Math.max(prev, prevPrev)
}

// export function rob21(nums: number[]): number {
//   let [prev, prevp] = [0, 0];
//   for (const m of nums) {
//     const temp = prev;
//     prev = Math.max(prevp + m, prev);
//     prevp = temp;
//     log(prev, prevp)
//   }
//   return Math.max(prev, prevp);
// };

// export function rob2(nums: number[]): number {
//   if (nums.length === 1) {
//     return nums[0]
//   }

//   const lastIndex = nums.length - 1
//   const routeStack: number[][] = [[0], [1]]
//   const map = new Map<number, number>

//   while (routeStack.length > 0) {
//     const route = routeStack.pop()
//     const i = route.at(-1)

//     const childIndex1 = i + 2
//     const childIndex2 = i + 3

//     if ((childIndex1 > lastIndex && childIndex2 > lastIndex) || map.has(i)) {
//       for (const [key, nodeIndex] of route.reverse().entries()) {
//         const parentIndex = route[key + 1]

//         const parentSum = map.get(parentIndex) ?? 0
//         const currentSum = map.get(nodeIndex) ?? nums[nodeIndex]
//         map.set(nodeIndex, currentSum)

//         const newParentSum = nums[parentIndex] + currentSum
//         if (newParentSum > parentSum) {
//           map.set(parentIndex, newParentSum)
//         }
//       }
//       continue
//     }

//     if (childIndex2 <= lastIndex) {
//       routeStack.push([...route, childIndex2])
//     }

//     if (childIndex1 <= lastIndex) {
//       routeStack.push([...route, childIndex1])
//     }
//   }

//   return Math.max(map.get(0), map.get(1))
// }

// export function robRecursive(nums: number[]): number {
//   if (nums.length === 1) {
//     return nums[0]
//   }

//   const map = new Map<number, number>()

//   const iter = (i: number, route: number[] = []) => {
//     const currentRoute = [...route, i]

//     if (i + 2 > nums.length - 1 || map.has(i)) {
//       while (currentRoute.length > 0) {
//         const currentIndex = currentRoute.pop()
//         const parentIndex = currentRoute[currentRoute.length - 1]

//         const parentSum = map.get(parentIndex) ?? 0
//         const currentSum = map.get(currentIndex) ?? nums[currentIndex]
//         map.set(currentIndex, currentSum)

//         const newParentSum = nums[parentIndex] + currentSum
//         if (newParentSum > parentSum) {
//           map.set(parentIndex, newParentSum)
//         }
//       }

//       return
//     }

//     iter(i + 2, currentRoute)
//     iter(i + 3, currentRoute)
//   }

//   iter(0)
//   iter(1)
//   return Math.max(map.get(0), map.get(1))
// }
