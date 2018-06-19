#!/bin/bash

# newleet - sets up a new leetcode problem JavaScript scaffold
# usage: newleet problemnumber problemname [argnames]
# step 1: creates a folder 
# step 2: creates a main.js file with the function stub
# step 3: creates a test.js file with a basic Jest test

if [ "$#" -lt 2 ]; then
    echo "Missing arguments."
    exit 1
fi

PNUM=$1
PNAME=$2

DIRNAME=$PNUM$(echo ".$PNAME" | tr '[:upper:]' '[:lower:]')
mkdir $DIRNAME

cat <<EOT >> "$DIRNAME"/"$PNUM".main.js
var $PNAME = function() {

};

module.exports = $PNAME;
EOT

cat <<EOT >> "$DIRNAME"/"$PNUM".test.js
const $PNAME = require('./$PNUM.main.js');

const data = [

];

let testMap = new Map(data);

for (let [key, value] of testMap.entries()) {
    test(\`\${key} = \${value}\`, () => {
        expect($PNAME(key)).toBe(value);
    });
}
EOT