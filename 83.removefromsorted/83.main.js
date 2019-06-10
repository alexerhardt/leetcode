/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var removeFromSorted = function(val) {
  let map = {};

  function traverseAndRemove(prev, current) {
    while (current.val !== null) {
      if (map[current.val]) {
        prev.next = current.next;
      }
      else {
        map[current.val] = true;
        prev = current;
      }
      current = current.next;
    }
  }

  traverseAndRemove(null, val);
  return val;
};

module.exports = removeFromSorted;
