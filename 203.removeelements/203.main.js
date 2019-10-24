var removeElements = function(head, val) {
  let cur = head;
  let prv = null;

  while (cur) {
    if (cur.val === val) {
      if (!prv) {
        head = cur.next;
      } else {
        prv.next = cur.next;
      }
      cur = cur.next;
    } else {
      prv = cur;
      cur = cur.next;
    }
  }

  return head;
};

module.exports = removeElements;
