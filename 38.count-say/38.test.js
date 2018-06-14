const countAndSay = require('./38.main.js');

const data = [
    [1, "1"],
    [2, "0"],
    [3, "0"]
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(countAndSay(key)).toBe(value);
    });
}

