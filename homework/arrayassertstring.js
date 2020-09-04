//New string split
// var str = "How are you doing today?";
// var res = str.split(" ");

const assert = require('assert');

const x = 'This is a string';
const xArray = x.split(' ');
for (let i = 0; i < xArray.length; i = i + 1) {
  console.log(xArray[i]);
}
xArray[xArray.length - 1] = 'NICE';
for (let i = 0; i < xArray.length; i = i + 1) {
  console.log(xArray[i]);
}

// INPUT -> BLACKBOX -> OUTPUT

const tamperWithString = (fmessage, name) => {
  const wordArray = fmessage.split('-');
  wordArray[wordArray.length - 1] = name;

  let finalResult = '';
  for (let j = 0; j < wordArray.length; j = j + 1) {
    if (j === 0) {
      finalResult = wordArray[j];
    } else {
      finalResult = finalResult + '-' + wordArray[j];
    }
  }

  return finalResult;
};

assert(tamperWithString('Hallo-there-John', 'Samina') === 'Hallo-there-Samina');
assert(tamperWithString('Hallo-there-John', 'Mohini') === 'Hallo-there-Mohini');

const cutOutFirstPartOfCookie = cookie => {
  const cookieArray = cookie.split('-');

  let finalResult = '';
  for (let j = 1; j < cookieArray.length; j = j + 1) {
    if (j === 1) {
      finalResult = cookieArray[j];
    } else {
      finalResult = finalResult + '-' + cookieArray[j];
    }
  }

  return finalResult;
};

assert(cutOutFirstPartOfCookie('1234-5678') === '5678');
assert(cutOutFirstPartOfCookie('1234-5678-1111') === '5678-1111');
assert(cutOutFirstPartOfCookie('1234-5678-1111-2222') === '5678-1111-2222');

assert(
  replaceSessionType('12345SessionType=somebank78900123') ===
    '12345SessionType=OIDC78900123'
);
