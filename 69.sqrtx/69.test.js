const sqrtx = require('./69.main.js');

const data = [
    [ [0], [0] ],
    [ [0.35], [0] ],
    [ [0.9999], [0] ],
    [ [1], [1] ],
    [ [2], [1] ],
    [ [3], [1] ],
    [ [4], [2] ],
    [ [16], [4] ],
    [ [17.45], [4]],
    [ [37.3524554], [6] ],
    [ [1000000], [1000] ],
    [ [490000000], [22135] ],
    [ [Number.MAX_SAFE_INTEGER], [94906265] ]
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(`${key} = ${value}`, () => {
        expect(sqrtx(key[0])).toBe(value[0]);
    });
}
