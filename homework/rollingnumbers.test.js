//this is the test file for crimson-sso-test1.js
// to run the test...
// npm run test

// scala
// def sum( x : Int, y : Int) = { x +  y }

const sum = (x, y) => {
  return x + y;
};

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

const divide = (x, y) => {
  return x / y;
};

test("divide 4 with 2 to equal 2", () => {
  expect(divide(4, 2)).toBe(2);
});

const multiply = (y, z) => {
  return y * z;
};

test("multiply 4 with 2 to equal 8", () => {
  expect(multiply(4, 2)).toBe(8);
});

const testData = rollingNumbers => {
  return {
    row1: `11111111${rollingNumbers}`,
    row2: `22222222${rollingNumbers}`,
    row3: `33333333${rollingNumbers}`,
    row4: `44444444${rollingNumbers}`,
    row5: `55555555${rollingNumbers}`,
    row6: `66666666${rollingNumbers}`,
    row7: `77777777${rollingNumbers}`,
    row8: `88888888${rollingNumbers}`,
    row9: `99999999${rollingNumbers}`,
    row10: `00000000${rollingNumbers}`
  };
};

/**
 * Challenge:
 * define a function, that takes an object as a parameter,
 * and then it prints the object out.
 * It should print the object's key-and-value pairs out, line by line.
 * Also think of a good name for the function
 */

const objectKeys = objX => {
  return Object.keys(objX);
};

//https://jestjs.io/docs/en/using-matchers.html
//If it should pass with deep equality, replace "toBe" with "toStrictEqual"
test("Give function a object, and get back a list of strings", () => {
  const functionWeAreTesting = objectKeys(testData("xxxasd"));
  console.log("answer: " + functionWeAreTesting);
  expect(functionWeAreTesting).toStrictEqual([
    "row1",
    "row2",
    "row3",
    "row4",
    "row5",
    "row6",
    "row7",
    "row8",
    "row9",
    "row10"
  ]);
});

const objectKeysAndValuesToString = objX => {
  const keys = objectKeys(objX);
  var answer = [];
  keys.forEach((key, index) => {
    answer.push(`${key} -> ${objX[key]}`);
  });
  return answer;
};

test("Give function a object, and get back a list of strings, each string consisting of key -> value", () => {
  const functionWeAreTesting = objectKeysAndValuesToString(testData("xxxasd"));
  console.log("answer: " + functionWeAreTesting);
  expect(functionWeAreTesting).toStrictEqual([
    "row1 -> 11111111xxxasd",
    "row2 -> 22222222xxxasd",
    "row3 -> 33333333xxxasd",
    "row4 -> 44444444xxxasd",
    "row5 -> 55555555xxxasd",
    "row6 -> 66666666xxxasd",
    "row7 -> 77777777xxxasd",
    "row8 -> 88888888xxxasd",
    "row9 -> 99999999xxxasd",
    "row10 -> 00000000xxxasd"
  ]);
});
