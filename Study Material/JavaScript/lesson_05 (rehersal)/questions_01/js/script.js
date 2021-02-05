// Answer to Q1
let strQ1 = 'abcdefgh';
let indexOfE = strQ1.indexOf('e');
let indexOfB = strQ1.indexOf('b');
console.log(`Q1;  ${indexOfE}, ${indexOfB}`);

// Answer to Q2
let strQ2 = 'I really like fruits and vegetables';
let indexOfFruits = strQ2.indexOf('fruits');
let strFruits = strQ2.substring(indexOfFruits, indexOfFruits + 6);
console.log(`Q2;  ${strFruits}`);

// Answer to Q3
let firstName = 'Ben';
let lastName = 'Elferink';
let age = 23;
console.log(`Q3;  My name is ${firstName} ${lastName}, I am ${age} years old`);

// Answer to Q4
let strOneQ4 = 'Variable#1';
let strTwoQ4 = 'Variable#2';
cnosole.log(`Q4;  String1 contains: ${strOneQ4}, String2 contains: ${strTwoQ4}`);

// Answer to Q5
let strQ5 = 'capitalize this';
strQ5 = strQ5.toUpperCase();
console.log(`Q5;  ${strQ5}`);

// Answer to Q6
function split(str) {
  let strHalf = parseInt(str.length / 2);
  let strNew = str.slice(strHalf) + str.slice(0, strHalf);
  window.alert(`Q6;  before: ${str}, after: ${strNew}`);
}
