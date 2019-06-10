var isSameTree = function(p, q) {
  if (p.val !== q.val) {
    return false;
  }
  else if (p.val === null && q.val === null) {
    return true;
  }
  else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};

module.exports = sametree;
