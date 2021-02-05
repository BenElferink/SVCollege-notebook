// Answer to Q1
let oneA = 7;
let oneB = 4;
let oneC = 3;
console.log(oneA * oneB * oneC);

// Answer to Q2
let twoA = 'Alpha';
let twoB = 'Beta';
console.log(twoA, twoB);
let twoC = twoA;
twoA = twoB;
twoB = twoC;
console.log(twoA, twoB);

// Answer to Q3
let threeA = 'Ben Elferink';
let threeB = threeA.replace(' ', '*');
console.log(threeB);

// Answer to Q4
let fourA = 3;
let fourB = 5;
console.log(Math.pow(fourA, fourB));

// Answer to Q5
let fiveA = 'Z';
let fiveB = 'abcdefg';
let fiveLength = fiveB.length;
let fiveSplit = fiveLength / 2;
fiveSplit = Math.round(fiveSplit);
let fiveC = fiveB.substring(fiveSplit, fiveLength);
fiveB = fiveA + fiveB.replace(fiveC, fiveA) + fiveC + fiveA;
console.log(fiveB);

// Answer to Q6
let sixA = 11;
let sixB = 22;
let sixC = 33;
let sixD = 44;
let sixE = 55;
console.log(sixA * sixB * sixC * sixD * sixE);
let sixA2 = sixA % 10;
let sixB2 = sixB % 10;
let sixC2 = sixC % 10;
let sixD2 = sixD % 10;
let sixE2 = sixE % 10;
console.log(sixA2 + sixB2 + sixC2 + sixD2 + sixE2);

// Answer to Q7
let sevenA = 'abc';
let sevenB = 'def';
let sevenC = sevenA + ' ' + sevenB;
console.log(sevenC);
let sevenLength = sevenC.length;
console.log(sevenLength);

// Answer to Q8
let eightA = 'Ben Elferink';
let eightIndex = eightA.indexOf(' ');
let eightLength = eightA.length;
let eightFirstName = eightA.substring(0, eightIndex);
console.log(eightFirstName, eightFirstName.length);
eightIndex = eightIndex + 1;
let eightLastName = eightA.substring(eightIndex, eightLength);
console.log(eightLastName, eightLastName.length);

// Answer to BONUS
let bonusA = 7;
let bonusB = 35;
console.log(bonusA);
console.log(bonusB);
bonusA = bonusA + bonusB;
bonusB = bonusA - bonusB;
bonusA = bonusA - bonusB;
console.log(bonusA);
console.log(bonusB);
