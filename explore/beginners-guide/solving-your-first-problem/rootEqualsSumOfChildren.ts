// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/678/sql-data-structure/4353/


// Problem 2236. Root Equals Sum of Children:
// https://leetcode.com/problems/root-equals-sum-of-children/


// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
// Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.

// Example 1:
// Input: root = [10, 4, 6]
// Output: true
// Explanation: The values of the root, its left child, and its right child are 10, 4, and 6, respectively.
// 10 is equal to 4 + 6, so we return true.


// Example 2:
// Input: root = [5, 3, 1]
// Output: false
// Explanation: The values of the root, its left child, and its right child are 5, 3, and 1, respectively.
// 5 is not equal to 3 + 1, so we return false.


// Constraints:
// The tree consists only of the root, its left child, and its right child.
// - 100 <= Node.val <= 100


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 * }
 */


// run `npm ts-node explore/beginners-guide/solving-your-first-problem/rootEqualsSumOfChildren.ts`


interface TreeNode {
  val: number;
  left: TreeNode | null
  right: TreeNode | null
}

function checkTree(root: TreeNode | null): boolean {
  return root?.val === (root?.left?.val ?? 0) + (root?.right?.val ?? 0)
};

const list1: TreeNode = {
  val: 10,
  left: {
    val: 4,
    left: null,
    right: null
  },
  right: {
    val: 6,
    left: null,
    right: null
  }
}

const list2: TreeNode = {
  val: 85,
  left: {
    val: 10,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: null,
    right: null
  }
}

console.log(checkTree(list1))
console.log(checkTree(list2))