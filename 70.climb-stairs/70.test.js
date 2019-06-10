const climbStairs = require('./70.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(climb-stairs(key)).toBe(value);
    });
}
