var combinationSum = function(candidates, target) {

  function combinationSumIn(candidates, target, sols) {
    for (let i = 0; i < candidates.length; i++) {
      let current = candidates[i];
      if (target % current === 0) {
        let tmp = [];
        for (let j = 0; j < target / current; j++) {
          tmp.push(current);
        }
        sols.push(tmp);
      } 
      if (target / current > 2) {
        for (let k = 1; target - (current * k) >= current; k++) {
          let tmp = [];
          for (let l = 0; l < k; l++) {
            tmp.push(current);
          }
          console.log('current', current);
          console.log('tmp: ', tmp);
          let rem = target - (current * k);
          let ret = combinationSumIn(candidates.slice(1), rem, []);
          for (let sol of ret) {
            sols.push(tmp.concat(sol));
          }
        }
      }
    }
    return sols;
  }

  candidates.sort((a, b) => a - b);
  return combinationSumIn(candidates, target, []);
};

console.log(combinationSum([7, 3, 2], 18));

module.exports = combinationSum;
