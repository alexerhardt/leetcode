/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var strArr = s.trim().split(/ +/g);
    return strArr[strArr.length - 1].length;
};

module.exports = lengthOfLastWord;