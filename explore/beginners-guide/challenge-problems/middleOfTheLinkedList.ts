// https://leetcode.com/explore/featured/card/the-leetcode-beginners-guide/692/challenge-problems/4426/


// Problem 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/


// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.


// Example 1:
// Input: head = [1, 2, 3, 4, 5]
// Output: [3, 4, 5]
// Explanation: The middle node of the list is node 3.


// Example 2:
// Input: head = [1, 2, 3, 4, 5, 6]
// Output: [4, 5, 6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


// Constraints:
// The number of nodes in the list is in the range[1, 100].
// 1 <= Node.val <= 100


// run `npx ts-node explore/beginners-guide/challenge-problems/middleOfTheLinkedList.ts` 

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 * }
 */

interface ListNode {
  val: number;
  next: ListNode | null
}

function middleNode(head: ListNode | null): ListNode | null {
  let middleNode = head
  let endNode = head

  while (endNode !== null && endNode.next !== null) {
    middleNode = middleNode?.next || null
    endNode = endNode?.next?.next || null
  }
  return middleNode
};

const listNode1: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
}

const listNode2: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next:  null
    }
  }
}

console.log(middleNode(listNode1))
console.log(middleNode(listNode2))
