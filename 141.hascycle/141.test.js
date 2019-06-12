const hasCycle = require('./141.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(hasCycle(key)).toBe(value);
    });
}
