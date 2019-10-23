let memo;
const rob = function(nums) {
  memo = Array(nums.length).fill(-1);
  return robIn(nums, nums.length - 1);
};

const robIn = function(nums, i) {
  if (i < 0) {
    return 0;
  }
  if (memo[i] >= 0) {
    return memo[i];
  }
  const result = Math.max(robIn(nums, i - 2) + nums[i], robIn(nums, i - 1));
  memo[i] = result;
  return result;
};

module.exports = rob;
