// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/


// Problem 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/description/


// Given a fixed - length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.Do the above modifications to the input array in place and do not return anything.


// Example 1:
// Input: arr = [1, 0, 2, 3, 0, 4, 5, 0]
// Output: [1, 0, 0, 2, 3, 0, 0, 4]
// Explanation: After calling your function, the input array is modified to: [1, 0, 0, 2, 3, 0, 0, 4]


// Example 2:
// Input: arr = [1, 2, 3]
// Output: [1, 2, 3]
// Explanation: After calling your function, the input array is modified to: [1, 2, 3]


// Constraints:
// 1 <= arr.length <= 104
// 0 <= arr[i] <= 9


// run `npx ts-node explore/introduction-data-structure/arrays-101/duplicateZeros.ts` 

function duplicateZeros(arr: number[]): number[] {
  for (let index = 0; index < arr.length - 1; index += 1) {
    if (arr[index] === 0) {
      for (let j = arr.length - 2; j > index; j--) {
        arr[j + 1] = arr[j]
      }
      arr[index + 1] = 0
      index++
    }
  }
  return arr
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
console.log(duplicateZeros([1, 2, 3]))