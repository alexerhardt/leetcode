const isValidSudoku = require('./36.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(isValidSudoku(key)).toBe(value);
    });
}
