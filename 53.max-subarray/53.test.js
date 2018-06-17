const maxSubArray = require('./53.main.js');

const data = [
    [[0], 0],
    [[1, 0], 1],
    [[1, 1], 2],
    [[2, 1], 3],
    [[-5, 8], 8],
    [[3, -1, 5], 7],
    [[10, -9, 1], 10],
    [[7, 4, 1, -6], 12],
    [[-2,1,-3,4,-1,2,1,-5,4], 6]
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(maxSubArray(key)).toBe(value);
    });
}

