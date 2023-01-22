// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/692/challenge-problems/4424/


// Problem 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/


// Given an integer n, return a string array answer(1 - indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i(as a string) if none of the above conditions are true.


// Example 1:
// Input: n = 3
// Output: ["1", "2", "Fizz"]


// Example 2:
// Input: n = 5
// Output: ["1", "2", "Fizz", "4", "Buzz"]


// Constraints:
// 1 <= n <= 104


// run `npx ts-node explore/beginners-guide/challenge-problems/fizzBuzz.ts` 

function fizzBuzz(n: number): string[] {
  let array = []
  for (let index = 1; index <= n; index += 1) {
    if (index % 3 === 0 && index % 5 === 0) {
      array.push('FizzBuzz')
    } else if (index % 3 === 0) {
      array.push('Fizz')
    } else if (index % 5 === 0) {
      array.push('Buzz')
    } else {
      array.push(index.toString())
    }
  }
  return array
};

console.log(fizzBuzz(3))
console.log(fizzBuzz(15))
