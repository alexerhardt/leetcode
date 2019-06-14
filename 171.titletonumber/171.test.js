const titleToNumber = require('./171.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(titleToNumber(key)).toBe(value);
    });
}
