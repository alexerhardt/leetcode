const missingNumber = require('./268.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(missingNumber(key)).toBe(value);
    });
}
