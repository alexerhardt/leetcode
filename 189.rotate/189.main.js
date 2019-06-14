var rotate = function(nums, k) {
  let reordered = [];
  for (let i = 0; i < nums.length; i++) {
    reordered[(i + k) % nums.length] = nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    nums[j] = reoredered[j];
  }
};

module.exports = rotate;