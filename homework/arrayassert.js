// Find biggest Value using array
const assert = require("assert");

const findBiggestValue = listOfNumbers => {
  let biggestValue;
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (i === 0) {
      biggestValue = listOfNumbers[i];
    } else {
      if (listOfNumbers[i] > biggestValue) {
        biggestValue = listOfNumbers[i];
      }
    }
  }
  if (typeof biggestValue !== "undefined") {
    return biggestValue;
  } else {
    return "The list was empty";
  }
};

assert(findBiggestValue([1, 4, 6, 10]) === 10, "testing with [1, 4, 6, 10]");
assert(findBiggestValue([10, 4, 6, 1]) === 10, "testing with [10, 4, 6, 1]");
assert(findBiggestValue([1, 4, 10, 6]) === 10, "testing with [1, 4, 10, 6]");
assert(findBiggestValue([]) === "The list was empty", "testing with []");

//another example array
const anotherArray = [10, 2, 11];
///////////////////// 0   1   2
console.log("the array's length:", anotherArray.length); // 3
const saminasBrain = someArray => {
  let biggestValue; // define a variable to store the current biggest value
  for (let x = 0; x < someArray.length; x = x + 1) {
    // iterate through each of the elements to compare them // go through the list // looked through the list
    if (x === 0) {
      biggestValue = someArray[x]; // the first number compared will always be the biggest
    } else {
      if (someArray[x] > biggestValue) {
        // compare the current element with the previous champion/biggestnumber
        biggestValue = someArray[x];
      }
    }
  }
  return biggestValue; // give back the answer
};
assert(saminasBrain(anotherArray) === 11);
assert(saminasBrain([4, 2]) === 4);
assert(saminasBrain([6, 7, 1]) === 7);
assert(saminasBrain([1, 1]) === 1);
