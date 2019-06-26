const intersection = require('./349.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(intersection(key)).toBe(value);
    });
}
