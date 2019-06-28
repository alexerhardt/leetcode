const readBinaryWatch = require('./401.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(readBinaryWatch(key)).toBe(value);
    });
}
