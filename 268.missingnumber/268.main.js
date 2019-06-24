var missingNumber = function() {
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] !== i) return i;
  }
  return i;
};

module.exports = missingNumber;
