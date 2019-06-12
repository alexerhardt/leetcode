var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  let dict = {};
  let max = 0;
  let streak;
  let idx;
  for (let i = 0; i < s.length; i++) {
    idx = dict[s.charAt(i)]
    if (idx || idx === 0) {
      streak = Object.keys(dict).length;
      max = streak > max ? streak : max;
      deleteAllPrevious(dict, idx);
    }
    dict[s.charAt(i)] = i;
  }
  streak = Object.keys(dict).length;
  max = streak > max ? streak : max;
  return max;
};

var deleteAllPrevious = function(dict, index) {
  for (let key of Object.keys(dict)) {
    if (dict[key] <= index) {
      delete dict[key];
    }
  }
}

console.log(lengthOfLongestSubstring('dvdf'));

module.exports = lengthOfLongestSubstring;
