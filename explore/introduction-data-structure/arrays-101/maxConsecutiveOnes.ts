// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/


// Problem 485. Max Consecutive Ones
// https://leetcode.com/problems/max-consecutive-ones/submissions/883383586/


// Given a binary array nums, return the maximum number of consecutive 1's in the array.


// Example 1:
// Input: nums = [1, 1, 0, 1, 1, 1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.The maximum number of consecutive 1s is 3.


// Example 2:
// Input: nums = [1, 0, 1, 1, 0, 1]
// Output: 2


// Constraints:
// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.


// run `npx ts-node explore/introduction-data-structure/arrays-101/maxConsecutiveOnes.ts` 

function findMaxConsecutiveOnes(nums: number[]): number {
  let highest = 0
  let currentCount = 0

  nums.forEach((num) => {
    if (num === 1) {
      currentCount += 1
    }

    if (currentCount > highest) {
      highest = currentCount
    }

    if (num !== 1) {
      currentCount = 0
    }
  })

  return highest
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))
