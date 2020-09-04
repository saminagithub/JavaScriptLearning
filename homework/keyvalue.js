//######## Key and Value 

question1Object = {
  // key : value
  "1.option 1": 0,
  "1.option 2": 2,
  "1.option 3": 7
};
question2Object = {
  "2.option 1": 1,
  "2.option 2": 3,
  "2.option 3": 5
};
question3Object = {
  "3.option 1": 2,
  "3.option 2": 6,
  "3.option 3": 10
};
console.log("->>>>>>>>mapping all options Mapped1");
const allOptionsMapped1 = (question1, question2, question3) => {
  for (let key in question1) {
    for (let key2 in question2) {
      for (let key3 in question3) {
        const sumOfValues = question1[key] + question2[key2] + question3[key3];
        console.log(key, "and", key2, "and", key3, "sum is", sumOfValues);
      }
    }
  }
};

allOptionsMapped1(question1Object, question2Object, question3Object);

// see if you can print out the following:
// key + "and" + key2 + "sum is" + (question1[key] + question2[key2])
// 1.option 1  and  2.option 1 sum is 1
// 1.option 1  and  2.option 2 sum is 3
// 1.option 1  and  2.option 3 sum is 5
// 1.option 2  and  2.option 1 sum is 3
// 1.option 2  and  2.option 2 sum is 5
// 1.option 2  and  2.option 3 sum is 7
// 1.option 3  and  2.option 1 sum is 8
// 1.option 3  and  2.option 2 sum is 10
// 1.option 3  and  2.option 3 sum is 12

console.log("->>>>>>>>mapping all options Mapped2");
const allOptionsMapped2 = (question1, question2) => {
    for (let key in question1) {
      console.log(key, question1[key]);
    }
    for (let key2 in question2) {
      console.log(key2, question2[key2]);
    }
  };
  allOptionsMapped2(question1Object, question2Object);

//##################################################################
//
//next example
//
//###################################################################

question1Object = {
  // key : value
  "1.option 1": 0,
  "1.option 2": 2,
  "1.option 3": 7
};
question2Object = {
  "2.option 1": 1,
  "2.option 2": 3,
  "2.option 3": 5
};

console.log('->>>>>>>>mapping all options Mapped3');
const allOptionsMapped3 = (question1, question2) => {
  for (let key in question1) {
    for (let key2 in question2) {
      console.log(key,question1[key], "and" ,key2,question2[key2],"and",(question1[key] + question2[key2]));
   } 
  }
};
console.log('->>>>>>>>mapping all options');
console.log(question1Object)

 allOptionsMapped3(question1Object, question2Object)

question1Object = {
  '1.option 1': 0,
  '1.option 2': 2,
  '1.option 3': 7
};
question2Object = {
  '2.option 1': 1,
  '2.option 2': 3,
  '2.option 3': 5
};
question3Object = {
  "3.option 1": 2,
  "3.option 2": 6,
  "3.option 3": 10
};
console.log('->>>>>>>>mapping all options Mapped4');
const allOptionsMapped4 = (question1, question2,question3) => {
  for (let key in question1) {
       for (let key2 in question2) {
          for (let key3 in question3) {
           const sumOfValues = question1[key] + question2[key2] + question3[key3];
           console.log(key, "and", key2, "and", key3, "sum is", sumOfValues);
         }    
      }      
  } 
};
allOptionsMapped4(question1Object, question2Object, question3Object);

// 1.option 1  and  2.option 1 1
// 1.option 1  and  2.option 2 3
// 1.option 1  and  2.option 3 5
// 1.option 2  and  2.option 1 3
// 1.option 2  and  2.option 2 5
// 1.option 2  and  2.option 3 7
// 1.option 3  and  2.option 1 8
// 1.option 3  and  2.option 2 10
// 1.option 3  and  2.option 3 12