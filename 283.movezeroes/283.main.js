var moveZeroes = function(nums) {
  let i = 0;
  let moved = 0;
  while (i < nums.length && nums.length - i >= moved) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      moved++;
    } else {
      i++;
    }
  }
  console.log(nums);
};

console.log(moveZeroes([0, 1, 0, 3, 13]));

module.exports = moveZeroes;
