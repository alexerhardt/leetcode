/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max = Number.MIN_SAFE_INTEGER;

    var result = nums.reduce( (sum, val) => {
        sum = val > sum + val ? val : sum + val;
        max = Math.max(sum, max);
        return sum;
    }, 0);

    return max;
};

module.exports = maxSubArray;