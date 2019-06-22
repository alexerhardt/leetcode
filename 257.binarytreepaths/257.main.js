var binaryTreePaths = function(root) {

  function binaryTreePathsIn(root, string, list) {
    if (!root || root.val === null) {
      return;
    }

    if (root.left === null && root.right === null) {
      string += root.val;
      list.push(string);
    } else {
      string += root.val + '->';
      if (root.left !== null) {
        binaryTreePathsIn(root.left, string, list);
      }
      if (root.right !== null) {
        binaryTreePathsIn(root.right, string, list);
      }
    }

    return list;
  }

  return binaryTreePathsIn(root, '', list);
};

module.exports = binaryTreePaths;
