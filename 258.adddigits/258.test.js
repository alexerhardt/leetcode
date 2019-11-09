const addDigits = require('./258.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(addDigits(key)).toBe(value);
    });
}
