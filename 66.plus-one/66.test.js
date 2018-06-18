const plusOne = require('./66.main.js');

const data = [
    [ [0], [1] ],
    [ [9], [1, 0] ],
    [ [1, 9], [2, 0] ],
    [ [1, 0, 0, 0, 0], [1, 0, 0, 0, 1] ]
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(plusOne(key)).toEqual(value);
    });
}