// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/678/sql-data-structure/4352/


// Problem 2235. Add Two Integers
// https://leetcode.com/problems/add-two-integers/description/


// Given two integers num1 and num2, return the sum of the two integers.


// Example 1:
// Input: num1 = 12, num2 = 5
// Output: 17
// Explanation: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.


// Example 2:
// Input: num1 = -10, num2 = 4
// Output: -6
// Explanation: num1 + num2 = -6, so - 6 is returned.


//  Constraints:
// -100 <= num1, num2 <= 100


// run `npx ts-node explore/beginners-guide/solving-your-first-problem/solvingYourFirstProblem.ts` 

function sum(num1: number, num2: number): number {
  return num1 + num2
};

console.log(sum(5, -3))
console.log(sum(6, 17))
