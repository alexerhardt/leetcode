/**
 * You are climbing a stair case. It takes n steps to reach the top.
 * Each time you can climb 1 or 2 steps.
 * How many distinct ways can you climb to the top?
 * @param {} n 
 */
var climbStairs = function(n) {
  return fib(n + 1);
};

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

module.exports = climbStairs;

// In: 1
// Out: 1
// 1

// In: 2
// Out: 2
// 1 + 1
// 2

// In: 3
// Out: 3
// 1 + 1 + 1
// 1 + 2
// 2 + 1

// In: 4
// Out: 5
// 1 + 1 + 1 + 1 (always an option)
// 1 + 1 + 2
// 1 + 2 + 1
// 2 + 1 + 1
// 2 + 2

// In: 5
// Out: 8 
// 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 2
// 1 + 1 + 2 + 1
// 1 + 2 + 1 + 1
// 2 + 1 + 1 + 1
// 1 + 2 + 2
// 2 + 1 + 2
// 2 + 2 + 1

// In: 6
// Out: 13
// 1 + 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 2
// 1 + 1 + 1 + 2 + 1
// 1 + 1 + 2 + 1 + 1
// 1 + 2 + 1 + 1 + 1
// 2 + 1 + 1 + 1 + 1
// 1 + 1 + 2 + 2
// 1 + 2 + 1 + 2
// 1 + 2 + 2 + 1
// 2 + 1 + 2 + 1
// 2 + 1 + 1 + 2
// 2 + 2 + 1 + 1
// 2 + 2 + 2

// At max n / 2 2's, call it m
// From 0 to m
  // k: current number of twos
  // Number of 1s: (n - 2 * k)
  // Calculate possible permutations
  // Increase k, repeat