/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n < 1) return "0";

    var result = "1";
    for(var i = 1; i < n; i++) {
        result = countString(result);
    }

    return result;
};

var countString = function(str) {
    var arr = str.split("");

    var resultString = "";
    var currentChar = arr[0];
    var charCount = 0;
    for (var i = 0; i < arr.length; i++) {
        charCount++;
        if (i + 1 < arr.length && arr[i + 1] !== currentChar) {
            resultString += charCount + currentChar;
            charCount = 0; 
            currentChar = arr[i + 1];
        }
    }
    resultString += charCount + currentChar;
    return resultString;
};

module.exports = countAndSay;