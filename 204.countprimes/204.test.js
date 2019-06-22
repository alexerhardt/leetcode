const countPrimes = require('./204.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(countPrimes(key)).toBe(value);
    });
}
