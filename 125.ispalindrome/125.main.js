var isPalindrome = function(s) {
  const clean = s.toLowerCase().split('').filter(substr => {
    return substr.match(/[a-z0-9]/i);
});

console.log(clean);

let i = 0;
let j = clean.length - 1;

while (i !== j) {
    if (clean[i] !== clean[j]) {
        return false;
    }
    i++;
    j++;
}

return true;
};

isPalindrome('A man, a plan, a canal: Panama');

module.exports = isPalindrome;
