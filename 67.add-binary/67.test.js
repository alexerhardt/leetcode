const addBinary = require('./67.main.js');

const data = [
    [ {'a': '0', 'b': '0'}, '0' ],
    [ {'a': '1', 'b': '0'}, '1' ],
    [ {'a': '1', 'b': '1'}, '10' ],
    [ {'a': '11', 'b': '1'}, '100' ],
    [ {'a': '1010', 'b': '1011'}, '10101' ]
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key.a}, ${key.b}  = ${value}`, () => {
        expect(addBinary(key.a, key.b)).toEqual(value);
    });
}