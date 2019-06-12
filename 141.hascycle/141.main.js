var hasCycle = function() {
  const set = new Set();
  while (head !== null) {
      if (head.next && set.has(head.next)) {
          return true;
      }
      set.add(head);
      head = head.next;
  }
  return false;
};

module.exports = hasCycle;
