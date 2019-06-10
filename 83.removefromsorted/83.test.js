const removeFromSorted = require('./83.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(removeFromSorted(key)).toBe(value);
    });
}
