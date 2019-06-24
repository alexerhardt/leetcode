const combinationSum = require('./39.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(combinationSum(key)).toBe(value);
    });
}
