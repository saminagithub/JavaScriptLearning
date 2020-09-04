const assert = require("assert");

//write a function that takes a name as input, and prints: Goodmornin, John
const printInput = name => {
  console.log("Goodmornin, ", name);
};

printInput("John");

// write a function that takes 2 numbers, and gives you the sum of them
//
const addTowNumbers = (firstNum, secondNum) => {
  let sum = firstNum + secondNum;
  console.log(sum);
};

// create a function that takes two parameters, a person's name and their birth year... the function must return a string for example
// CalculateAge("John", 1990) === "John you will have your 30th birthday this year..."

const CalculateAge = (currentyear, birthyear) => {
  return currentyear - birthyear;
};

//
const displayNameAge = (name, birthyear) => {
  // console.log(
  //   name,
  //   age + " === John you will have your 30th birthday this year..."
  // );
  let result =
    name +
    " you will have your " +
    CalculateAge(2020, birthyear) +
    "th birthday this year...";
  return result;
};

console.log(displayNameAge("Jon4", 1976));

assert(
  displayNameAge("Jon", 1990) ===
    "Jon you will have your 30th birthday this year..."
);
assert(
  displayNameAge("Jon2", 1991) ===
    "Jon2 you will have your 29th birthday this year..."
);
assert(
  displayNameAge("Jon3", 1992) ===
    "Jon3 you will have your 28th birthday this year..."
);

assert(
  displayNameAge("Jon4", 1976) ===
    "Jon4 you will have your 44th birthday this year..."
);

console.log("1 === 1 is equal to:", 1 === 1);
// 1 === 1 is equal to: true
console.log("1 === 2 is equal to:", 1 === 2);
// 1 === 2 is equal to: false

if (
  displayNameAge("Jon4", 1978) ===
  "Jon4 you will have your 44th birthday this year..."
) {
  console.log("The test passed");
} else {
  console.log("The test failed");
}

console.log("We are here:"); // We are here:
//
