const canConstruct = require('./383.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(canConstruct(key)).toBe(value);
    });
}
