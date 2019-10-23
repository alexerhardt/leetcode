const rob = require('./198.main.js');

const data = [
  [[1], 1],
  [[1, 3], 3],
  [[3, 1, 5], 8],
  [[3, 17, 12], 17],
  [[2, 1, 1, 2], 4],
  [[2, 1, 3, 7, 1], 9],
  [[4, 17, 18, 17, 4], 34],
];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
  test(`${key} = ${value}`, () => {
    expect(rob(key)).toBe(value);
  });
}
