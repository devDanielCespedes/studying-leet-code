// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/678/sql-data-structure/4353/


// problem 226. Invert Binary Tree:
// https://leetcode.com/problems/invert-binary-tree/description/


// Given the root of a binary tree, invert the tree, and return its root.


// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]


// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]


// Constraints:
// The number of nodes in the tree is in the range[0, 100].
// - 100 <= Node.val <= 100


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 * }
 */


// run `npm ts-node explore/beginners-guide/solving-your-first-problem/invertBinaryTree.ts `


interface TreeNode {
  val: number;
  left: TreeNode | null
  right: TreeNode | null
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  invertTree(root?.left)
  invertTree(root?.right)

  const auxRight = root.right
  root.right = root.left
  root.left = auxRight

  return root
};

const firstList: TreeNode = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
}

const secondList: TreeNode = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}

console.log(invertTree(firstList))
console.log(invertTree(secondList))