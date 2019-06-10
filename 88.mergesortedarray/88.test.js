const mergeSortedArray = require('./88.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(mergeSortedArray(key)).toBe(value);
    });
}
