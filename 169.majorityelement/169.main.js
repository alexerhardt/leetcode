var majorityElement = function(nums) {
  let map = {};
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    }
    else {
      map[nums[i]]++;
    }
    max = map[nums[i]] > map[max] ? nums[i] : max;
    if (map[nums[i]] > nums.length / 2) {
      return max;
    }
  }
  return max;
};

module.exports = majorityElement;
