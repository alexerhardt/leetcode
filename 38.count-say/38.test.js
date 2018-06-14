const countAndSay = require('./38.main.js');

const data = [
    [1, "1"],
    [2, "11"],
    [3, "21"],
    [4, "1211"],
    [5, "111221"],
    [6, "312211"],
    [7, "13112221"],
    [8, "1113213211"],
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(countAndSay(key)).toBe(value);
    });
}

