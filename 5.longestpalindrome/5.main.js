var longestPalindrome = function(s) {
  let largest = s.charAt(0);

  let i = 0;
  let j = s.length - 1;
  let k;
  let sliced;

  while (i < j && j - i >= largest.length) {
    k = j;
    while (i < k && k - i >= largest.length) {
      sliced = s.slice(i, k + 1);
      if (isPalindrome(sliced)) {
        largest = sliced;
        break;
      }
      k--;
    }
    j = s.length - 1;
    i++;
  }

  return largest;
};

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s.charAt(i++) !== s.charAt(j--)) {
      return false;
    }
  }
  return true;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));

module.exports = longestPalindrome;
