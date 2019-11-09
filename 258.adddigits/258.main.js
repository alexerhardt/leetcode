var addDigits = function(num) {
  const digits = num.toString().split('');
  if (digits.length === 1) {
    return num;
  } else {
    const newNum = digits.reduce((ac, val) => ac + parseInt(val), 0);
    return addDigits(newNum);
  }
};

module.exports = addDigits;
