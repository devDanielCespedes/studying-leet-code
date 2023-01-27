// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/


// Problem 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/description/


// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


// Example 1:
// Input: nums = [-4, -1, 0, 3, 10]
// Output: [0, 1, 9, 16, 100]
// Explanation: After squaring, the array becomes[16, 1, 0, 9, 100].
// After sorting, it becomes[0, 1, 9, 16, 100].


// Example 2:
// Input: nums = [-7, -3, 2, 3, 11]
// Output: [4, 9, 9, 49, 121]


// Constraints:
// 1 <= nums.length <= 104
// - 104 <= nums[i] <= 104
// nums is sorted in non - decreasing order.


// run `npx ts-node explore/introduction-data-structure/arrays-101/squaresOfSortedArray.ts` 

function sortedSquares(nums: number[]): number[] {
  return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b)
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))

// Better approach

// function sortedSquaresForLoop(nums: number[]): number[] {
//   let sortedSquaresNumbers = []
//   let indexLeft = 0
//   let indexRight = nums.length - 1

//   while (indexLeft <= indexRight) {
//     const leftPow = Math.pow(nums[indexLeft], 2)
//     const rightPow = Math.pow(nums[indexRight], 2)

//     if (leftPow <= rightPow) {
//       sortedSquaresNumbers[indexRight - indexLeft] = rightPow
//       indexRight --
//     } else {
//       sortedSquaresNumbers[indexRight - indexLeft] = leftPow
//       indexLeft ++ 
//     }
//   }
//   return sortedSquaresNumbers
// };

// console.log(sortedSquaresForLoop([-4, -1, 0, 3, 10]))
// console.log(sortedSquaresForLoop([-7, -3, 2, 3, 11]))
