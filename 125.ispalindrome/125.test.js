const isPalindrome = require('./125.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(isPalindrome(key)).toBe(value);
    });
}
