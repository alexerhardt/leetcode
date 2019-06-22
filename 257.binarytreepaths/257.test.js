const binaryTreePaths = require('./257.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(binaryTreePaths(key)).toBe(value);
    });
}
