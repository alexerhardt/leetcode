const lengthOfLongestSubstring = require('./3.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(lengthOfLongestSubstring(key)).toBe(value);
    });
}
