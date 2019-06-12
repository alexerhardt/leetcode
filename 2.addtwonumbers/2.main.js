function ListNode(val) {
  this.val = val;
  this.next = null;
};

var addTwoNumbers = function(l1, l2) {
  let head = null;
  let prev = null;
  let carry = 0;
  let sum = 0;
  let lVal = 0;
  let rVal = 0;
  let digit = 0;
  

  while (l1 || l2) {
    lVal = l1 ? l1.val : 0;
    rVal = l2 ? l2.val : 0;
    sum = lVal + rVal + carry;
    digit = sum % 10;
    carry = sum >= 10 ? 1 : 0;
    if (!prev) {
      head = new ListNode(digit);
      prev = head;
    } else {
      prev.next = new ListNode(digit);
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry) {
    prev.next = new ListNode(carry);
  }

  return head;
};

module.exports = addTwoNumbers;
