/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carryOver = 1;

    var result = digits.reduceRight((ac, val, index) => {
        var toAdd = (digits[index] + carryOver) % 10;
        ac.unshift(toAdd);
        carryOver = digits[index] + carryOver > 9 ? 1 : 0;
        return ac;
    }, []);

    if (carryOver === 1)
        result.unshift(1);

    return result;
};

module.exports = plusOne;