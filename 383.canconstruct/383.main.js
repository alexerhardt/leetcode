var canConstruct = function(ransomeNote, magazine) {
    for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
        map[magazine[i]] += 1;
    }
    else {
        map[magazine[i]] = 1;
    }
  }
  console.log(map);
  for (let j = 0; j < ransomNote; j++) {
    if (!map[ransomNote[j]]) {
        return false;
    } else if (map[ransomNote[j]] > 1)  {
        map[ransomNote[j]] -= 1;
    } else {
        delete map[ransomNote[j]];
    }
  }
  return true;
};

module.exports = canConstruct;
