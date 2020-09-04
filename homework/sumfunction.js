const assert = require("assert");

//Sum function test
const sum = (x, y) => {
  return x + y;
};

assert(sum(2, 8) === 10);
assert(sum(6, 8) === 14);
assert(sum(5, 5) === 10);
