var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const map = {};
  for (let i = 0; i < s.length; i++) {
    let c1 = s.charAt(i);
    let c2 = t.charAt(i);
    if (!map[c1]) {
      if (Object.values(map).includes(c2)) {
        return false;
      }
      map[c1] = c2;
    } else if (map[c1] !== c2) {
      return false;
    }
  }
  return true;
};

module.exports = isIsomorphic;
