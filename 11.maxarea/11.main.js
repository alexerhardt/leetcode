var maxArea = function(height) {
  let max = 0;
  let area;
  let minHeight;
  for (let i = 0; i < height.length; i++) {
    for (let j = height.length - 1; j > i; j--) {
      minHeight = Math.min(height[i], height[j]);
      area = minHeight * (j - i);
      console.log(`i: ${i}, j: ${j}, minHeight: ${minHeight}, area: ${area}`);
      max = area > max ? area : max;
    }
  }
  return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

module.exports = maxArea;
