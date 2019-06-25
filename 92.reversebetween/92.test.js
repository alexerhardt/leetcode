const reverseBetween = require('./92.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(reverseBetween(key)).toBe(value);
    });
}
