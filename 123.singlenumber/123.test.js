const singleNumber = require('./123.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(singleNumber(key)).toBe(value);
    });
}
