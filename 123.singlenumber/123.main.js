/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    }
    else {
      delete map[nums[i]];
    }
  }
    
  return new Number(Object.keys(map)[0]);
    
};

// clever alternative
var singleNumberClever = function(nums) {
  let a = 0;
  for (let num of nums) {
    a ^= num;
  }
  return a;
}


module.exports = singleNumber;
