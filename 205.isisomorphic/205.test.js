const isIsomorphic = require('./205.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(isIsomorphic(key)).toBe(value);
    });
}
