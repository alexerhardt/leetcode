const addTwoNumbers = require('./2.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(addTwoNumbers(key)).toBe(value);
    });
}
