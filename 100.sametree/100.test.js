const sametree = require('./100.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(sametree(key)).toBe(value);
    });
}
