// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/692/challenge-problems/4422/


// Problem 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.


// Example 1:
// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
// Explanation: Running sum is obtained as follows: [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4].


// Example 2:
// Input: nums = [1, 1, 1, 1, 1]
// Output: [1, 2, 3, 4, 5]
// Explanation: Running sum is obtained as follows: [1, 1 + 1, 1 + 1 + 1, 1 + 1 + 1 + 1, 1 + 1 + 1 + 1 + 1].


//  Constraints:
//  1 <= nums.length <= 1000
// - 10 ^ 6 <= nums[i] <= 10 ^ 6


// run `npx ts-node explore/beginners-guide/challenge-problems/RunningSumOf1DArray.ts` 

function runningSum(nums: number[]): number[] {
  for (let index = 1; index < nums.length; index += 1) {
    nums[index] += nums[index - 1]
  }
  return nums
};

console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1, 1]))
