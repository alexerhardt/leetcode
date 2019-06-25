var reverseBetween = function(head, m, n) {

  let i = 1;
  let cur = head;
  let half = (n - m) / 2;
  let toSwap = [];
  let tmp;
  while (cur && cur.val !== null && i <= n) {
    if (i >= m && i < m + half) {
      toSwap.push(cur);
    } else if (i > m + half && toSwap.length > 0) {
      tmp = toSwap[toSwap.length - 1].val;
      toSwap[toSwap.length -1].val = cur.val;
      cur.val = tmp;
      toSwap.pop();
    }
    i++;
    cur = cur.next;
  }
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function test() {
  let prv;
  let cur;
  let head;
  for (let i = 1; i <= 5; i++) {
    cur = new ListNode(i);
    if (!head) {
      head = cur;
    }
    if (prv) {
      prv.next = cur;
    }
    prv = cur;
  }

  let obj = reverseBetween(head, 2, 4);
  console.log(JSON.stringify(obj, null, 2));
}

test();


module.exports = reverseBetween;
