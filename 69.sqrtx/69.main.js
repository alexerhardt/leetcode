// const sqrtx = function(x) {
//   for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
//     if ( i * i <= x && x < (i + 1) * (i + 1) ) {
//       return i;
//     }
//   }
// };

let sqrtx = function(x)  {
  let i = 0;

  const sqrtxIn = function(n_0) {
    // Calculate n_1
    const n_1 = (1 / 2) * ( n_0 + (x / n_0) );
    
    const equalUnits = Math.trunc(n_0) === Math.trunc(n_1);
    if (equalUnits && getTwoDecimals(n_0) === getTwoDecimals(n_1)) {
      return Math.trunc(n_1);
    }
    else {
      return sqrtxIn(n_1);
    }
  }

  const init = getInitialGuess(x);
  return sqrtxIn(init);
}

let getTwoDecimals = function(x) {
  const t = Math.trunc(x * 100) / 100;
  return Number.parseInt(Number.parseFloat(t).toFixed(2).split('.')[1]);
}

let getInitialGuess = function(x) {
  const len = Math.trunc(Math.trunc(x).toString().length / 2);
  const guessA = 2 * Math.pow(10, len - 1);
  const guessB = 7 * Math.pow(10, len - 1);
  return x - guessA <= x - guessB ? guessA : guessB;
}



module.exports = sqrtx;
