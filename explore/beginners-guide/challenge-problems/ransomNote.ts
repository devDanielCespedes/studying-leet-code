// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/692/challenge-problems/4427/


// Problem 383. Ransom Note
// https://leetcode.com/problems/ransom-note/description/


// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.


// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false


// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true


// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


// run `npx ts-node explore/beginners-guide/challenge-problems/ransomNote.ts` 

function canConstruct(ransomNote: string, magazine: string): boolean {
  let ransomNoteLetter = ransomNote.split('')
  magazine.split('').forEach((letter) => {
    if (ransomNoteLetter.includes(letter)) {
      const index = ransomNoteLetter.indexOf(letter)
      ransomNoteLetter.splice(index, 1)
    }
  })
  return ransomNoteLetter.length === 0
};

console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))
