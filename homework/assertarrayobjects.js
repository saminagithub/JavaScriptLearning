// const assert = require("./node_modules/assert");
const assert = require("assert");

const findBiggestValue = listOfBiggestNumb => {
  let biggestValue;
  for (let i = 0; i < listOfBiggestNumb.length; i++) {
    if (i === 0) {
      biggestValue = listOfBiggestNumb[i];
    } else {
      if (listOfBiggestNumb[i] > biggestValue) {
        biggestValue = listOfBiggestNumb[i];
      }
    }
  }
  return biggestValue;
};
assert(findBiggestValue([1, 4, 6, 11]) === 11);

const findSmallestValue = listOfSmallestNumb => {
  let smallestValue;
  for (let i = 0; i < listOfSmallestNumb.length; i++) {
    if (i === 0) {
      smallestValue = listOfSmallestNumb[i];
    } else {
      if (listOfSmallestNumb[i] < smallestValue) {
        smallestValue = listOfSmallestNumb[i];
      }
    }
  }
  return smallestValue;
};
assert(findSmallestValue([4, 6, 11, 1]) === 1);

const findSumOfAllElements = numberOfElements => {
  let sum = 0;
  for (let i = 0; i < numberOfElements.length; i++) {
    sum = numberOfElements[i] + sum;
  }
  return sum;
};
// let NumberOfElements[i] and 3 = 3
// let NumberOfElements[i] and 6 = 9
//let NumberOfElements[i] and 1 = 10
assert(findSumOfAllElements([3, 6, 1]) === 10);

const findAveOfAllElements = numberOfElements => {
  return findSumOfAllElements(numberOfElements) / numberOfElements.length;
};
// let NumberOfElements[i] and 3 = 3
// let NumberOfElements[i] and 6 = 9
// let NumberOfElements[i] and 3 = 12
assert(findAveOfAllElements([3, 6, 3]) === (3 + 6 + 3) / 3);
assert(findAveOfAllElements([3, 6, 1]) === (3 + 6 + 1) / 3);
assert(findAveOfAllElements([2, 6, 4, 12]) === (2 + 6 + 4 + 12) / 4);

const twoElementsCanGiveAnswer = (elements, targetValue) => {
  let result = false;
  // iloop
  for (let i = 0; i < elements.length; i = i + 1) {
    for (let j = i + 1; j < elements.length; j = j + 1) {
      // console.log(elements[i], "and", elements[j]);
      if (elements[i] + elements[j] === targetValue) {
        result = true;
      }
    }
  }
  return result;
};

// f(x) = 1, 3, 5, 7 ... n

assert(twoElementsCanGiveAnswer([1, 2, 3], 5) === true);
assert(twoElementsCanGiveAnswer([1, 2, 3, 4], 6) === true);
assert(twoElementsCanGiveAnswer([1, 2, 3, 4], 20) === false);

///////////////
//Screen output
// 1 and 2
// 1 and 3
// 2 and 3
//
// 1 and 2
// 1 and 3
// 1 and 4
// 2 and 3
// 2 and 4
// 3 and 4

/////////////
//New example
// pass an array into the function for example [1,2,3]
// then it
//iterate through the array
// 1 and 2
// 1 and 3
// 2 and 3
//
// pass an array into the function for example [1,2,3,4]
// we basically want to test all the combinations ofthese numbers
// 1 and 2
// 1 and 3
// 1 and 4
// 2 and 3
// 2 and 4
// 3 and 4

////////////////////////////
// Trying the example again

const twoElementsCanGiveAnswer1 = (elements, targetValue) => {
  let result = false;
  for (let b = 0; b < elements.length; b = b + 1) {
    for (let c = b + 1; c < elements.length; c = c + 1) {
      //  console.log(elements[b], "and", elements[c]);
      if (elements[c] + elements[b] === targetValue);
      {
        return true;
      }
    }
  }
  return false;
};

assert(twoElementsCanGiveAnswer1([1, 2, 3], 5) === true);

///////////////////////////
// Trying the example again

const twoElementsCanGiveAnswer2 = (elements, targetValue) => {
  let result = false;
  for (let i = 0; i < elements.length; i = i + 1) {
    for (let m = i + 1; m < elements.length; m = m + 1) {
      console.log(elements[i], "and", elements[m]);
      if (elements[i] + elements[m] === targetValue) {
        return true;
      }
    }
  }
  return false;
};

assert(twoElementsCanGiveAnswer2([1, 5, 3, 9, 10], 10) === true);
assert(twoElementsCanGiveAnswer2([1, 5, 3, 5, 9], 10) === true);

/////////////////
//Expected Output
// 1 and 5 --> 6  --> false
// 1 and 3 --> 4  --> false
// 1 and 9 --> 10 --> true stops
// 1 and 10
//
// 1 and 5 --> 6  --> false
// 1 and 3 --> 4  --> false
// 1 and 5 --> 6  --> false
// 1 and 9 --> 10 --> true
//

///////////////////////////
// Trying the example again

const twoElementsCanGiveAnswer3 = (elements, expectedOutCome) => {
  let result = false;
  for (i = 0; i < elements.length; i = i + 1) {
    for (j = i + 1; j < elements.length; j = j + 1) {
      console.log(elements[i], "and", elements[j]);
      if (elements[i] + elements[j] === expectedOutCome);
      return true;
    }
    return false;
  }
};

assert(twoElementsCanGiveAnswer3([1, 5, 3, 9, 10], 6) === true);
assert(twoElementsCanGiveAnswer3([1, 5, 3, 4, 7], 8) === true);

///////////
// 1st loop
//
// 1 and 5 --> 6 true
// 1 and 3 --> 4 false
// 1 and 9 --> 10 true loops stops at this place
// 1 and 10 --> loop does not reach this place
// 5 and 3 --> 8 false
// 5 and 9 --> 13 false
// 5 and 10 --> 15 false
// 3 and 9 -->  12 false
// 3 and 10 --> 13 false
// 9 and 10 --> 19 false

// 1 and 5 --> 6 false
// 1 and 3 --> 4 false
// 1 and 4 --> 5 false
// 1 and 7 --> 8 true
//////////////////////////

const twoElementsCanGiveAnswer4 = (elements, expectedResult) => {
  let result = false;
  for (i = 0; i < elements.length; i = i + 1) {
    for (j = i + 1; j < elements.length; j = i + 1) {
      if (elements[i] + elements[j] === expectedResult);
      console.log(elements[i], "and", elements[j]);
      return true;
    }
    return false;
  }
};

assert(twoElementsCanGiveAnswer4([10, 10, 10, 4, 10], 20) === true);

//Expected Output
// 10 and 5   --> 15 --> false
// 10 and 10  --> 20 --> true
// 10 and 4   --> 14 --> false
// 10 and 10  --> 20 --> true
//
// 5  and 10  --> 15 --> false
// 5  and 4   --> 9  --> false
// 5  and 10  --> 15 --> false
//
// 10 and 4   --> 14 --> false
// 10 and 10  --> 20 --> true
//
// 4  and 10  --> 14 --> false
