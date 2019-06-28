var readBinaryWatch = function(n) {

  let hrsBits;
  let minBits;
  let minString;
  let results = [];

  for (let hrs = 0; hrs <= 11; i++) {
    hrsBits = calculateBits(hrs);
    for (let min = 0; min <= 59; j++) {
      minBits = calculateBits(min);
      if (hrsBits + minBits === n) {
        minString = min < 10 ? `0${min}` : `${min}`;
        results.push(`${hrs}:${minString}`);
      }
    }
  }

  return results;
};

var calculateBits = function(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) count++;
    n = Math.trunc(n / 2);
  }
  return count;
}

module.exports = readBinaryWatch;
