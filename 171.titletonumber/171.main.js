var titleToNumber = function(s) {
  let sum = 0;
  let n = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    sum += (n * 26) + (s.charCodeAt(i) - 64)
    n++;
  }
  return sum;
};

module.exports = titleToNumber;
