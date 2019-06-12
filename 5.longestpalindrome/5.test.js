const longestPalindrome = require('./5.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(longestPalindrome(key)).toBe(value);
    });
}
