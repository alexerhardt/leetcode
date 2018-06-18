const lengthOfLastWord = require('./58.main.js');

const data = [
    ["Hello World", 5],
    [" This is a test   ", 4],
    ["", 0],
    ["anticonstitutional", 18],
    ["alex  tiene mucha  clase", 5]
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(lengthOfLastWord(key)).toBe(value);
    });
}