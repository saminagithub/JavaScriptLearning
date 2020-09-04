//
//first part
// write a function that takes as
// input, a number (which represents temperature in degreeC), and then gives as
// output, a number (which represents temperature in degreeF)
// the way to convert degreeC into degreeF is:
// °F = °C * 1.8000 + 32.00
// 25°C= 77°F
// 30°C= 86°F
// 33°C= 91.4°F
// 35°C= 95°F
// 40°C= 104°F
// 180°C= 356°F

//
// Second part
// take this function and add another parameter, type to convert to
// if type is "F" convert the degreeC to Farenheit
// else convert it to Kelvin
//
//(32°F − 32) × 5/9 + 273.15 = 273,15K
//Subtract 32 from the Fahrenheit temperature.
//Multiply this number by 5.
//Divide this number by 9.
//Add 272.15 to this number.
//

const assert = require("assert");

const convertDegreeCToFarenheit = degreeC => {
  const farenheit = degreeC * 1.8 + 32.0;
  //console.log(farenheit);
  return farenheit;

  //is our function returning anything? Yes it is
};

const convertDegreeCToKelvin = degreeC => {
  const kelvin = degreeC + 273.15;
  return kelvin;
};

assert(convertDegreeCToFarenheit(25) === 77);
assert(convertDegreeCToFarenheit(30) === 86);
assert(convertDegreeCToFarenheit(33) === 91.4);
assert(convertDegreeCToFarenheit(35) === 95);
assert(convertDegreeCToFarenheit(40) === 104);
assert(convertDegreeCToFarenheit(180) === 356);

const convertDegreeCtoSomeThingElse = (degreeC, someTEMPUNIT) => {
  // converting a form of temperature to another unit of temperature
  if (someTEMPUNIT === "K") {
    return convertDegreeCToKelvin(degreeC);
  } else if (someTEMPUNIT === "F") {
    return convertDegreeCToFarenheit(degreeC);
  } else {
    return "No temperature unit were given";
  }
};

assert(convertDegreeCtoSomeThingElse(25, "K") === 298.15);
assert(convertDegreeCtoSomeThingElse(25, "F") === 77);
assert(convertDegreeCtoSomeThingElse(257) === "No temperature unit were given");

const convertFarenheitToKelvin = farenheit => {
  const kelvin = ((farenheit - 32) * 5) / (9 + 273.15);
  //console.log("kelvin", kelvin);
  return kelvin;
};

assert(convertFarenheitToKelvin(77) === 0.7974481658692185);
assert(convertFarenheitToKelvin(86) === 0.9569377990430623);
assert(convertFarenheitToKelvin(91.4) === 1.0526315789473686);
assert(convertFarenheitToKelvin(95) === 1.116427432216906);
assert(convertFarenheitToKelvin(40) === 0.1417685628211944);
assert(convertFarenheitToKelvin(180) === 2.622718412192097);

const convertFarenheitToDegreeC = farenheit => {
  const degreeC = (farenheit - 32) * (5 / 9);
  //  console.log("degreeC", degreeC);
  return degreeC;
};

assert(convertFarenheitToDegreeC(77) === 25);
assert(convertFarenheitToDegreeC(86) === 30);
assert(convertFarenheitToDegreeC(91.4) === 33.00000000000001);
assert(convertFarenheitToDegreeC(95) === 35);
assert(convertFarenheitToDegreeC(40) === 4.444444444444445);
assert(convertFarenheitToDegreeC(180) === 82.22222222222223);

const convertFarenhToSomthingElse = (farenheit, someTEMPUNIT) => {
  // converting a form of temperature to another unit of temperature
  if (someTEMPUNIT === "K") {
    return convertFarenheitToKelvin(farenheit);
  } else if (someTEMPUNIT === "C") {
    return convertFarenheitToDegreeC(farenheit);
  } else {
    return "No temperature unit were given";
  }
};

assert(convertFarenhToSomthingElse(77, "K") === 0.7974481658692185);
assert(convertFarenhToSomthingElse(77, "C") === 25);
assert(convertFarenhToSomthingElse(5) === "No temperature unit were given");

const temperatureChecker = temperatureValue => {
  // if the temperature is equal to 0, then  give bak "Ice Cole"
  if (temperatureValue == 0) {
    return "Ice Cold";
  }

  if (temperatureValue === 15) {
    return "Coolish";
  }

  if (temperatureValue == 25) {
    return "Nice";
  }

  if (temperatureValue == 35) {
    return "Quite Warm";
  }

  if (temperatureValue == 45) {
    return "Are you in Durban?";
  } else {
    return "No temperature unit were given";
  }
};

assert(temperatureChecker(0) === "Ice Cold");
assert(temperatureChecker(15) === "Coolish");
assert(temperatureChecker(25) === "Nice");
assert(temperatureChecker(35) === "Quite Warm");
assert(temperatureChecker(45) === "Are you in Durban?");
assert(temperatureChecker() === "No temperature unit were given");

console.log("Checking the temp:", temperatureChecker(45));
