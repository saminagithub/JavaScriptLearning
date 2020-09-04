//Program to print a square using two parameters, two functions , outer loop and inner loop
// $$$$$$     outer loop --> 1st loop creates the rows value 22 rows
// $$$$$$     inner loop --> 2nd loop creates the columns value 27 columns
// $$$$$$
//
const printSquare = (row, column) => {
  //defining a function.
  // for (counter variable, end condition, increment or decrement)

  for (let i = 1; i <= row; i = i + 1) {
    // console.log("drawHorizontalLine", i);
    drawHorizontalLine(column, "S");
  }
};

const drawHorizontalLine = (count, characterWeWantToDrawWith) => {
  //*****
  let lineToPrint = "";
  //let lineToPrint; //defining a variable
  // lineToPrint = ""; //assigning a value to a variable
  for (let i = 1; i <= count; i = i + 1) {
    lineToPrint = lineToPrint.concat(characterWeWantToDrawWith); //reassign the value of the concat operation to lineToPrint
    // console.log(lineToPrint);
  }
  /////////////////////////////////
  // initially: lTP = ""
  // 1: lTP="" + "S" = "S"
  // 2: lTP="S"+ "S" = "SS"
  // 3: lTP="SS" + "S" = "SSS"
  ////////////////////////////////////
  console.log(lineToPrint);
};

//invoking a function
//calling a function
//jump to this code and execute it (goto/branch)
printSquare(3, 5); //using a function with 2x variables inserted
//drawHorizontalLine(20);

const recipe = (ingredient1, ingredient2) => {
  // console.log("recipe + ingredient1");
  //cake
};
