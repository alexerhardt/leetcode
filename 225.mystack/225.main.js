var MyStack = function() {
  this.data = [];
  this.top = undefined;
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.data.push(x);
  this.top = this.data.length - 1;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const element = this.data[this.top];
  this.top = this.top - 1;
  return element;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.data[this.top];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.data.length === 0;
};

module.exports = MyStack;
