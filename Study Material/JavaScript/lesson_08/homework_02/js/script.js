// Answer to Q1
var funcQ1 = () => {
  console.log('Answer to Q1');
  for (let i = 100; i < 1000; i++) {
    let units = i % 10;
    let hundreds = parseInt(i / 100);
    if (units == hundreds) {
      console.log(i);
    }
  }
};
funcQ1();

// Answer to Q2
var funcQ2 = () => {
  console.log('Answer to Q2');
  for (let i = 99; i > 9; i--) {
    if (i % 2 != 0 && i % 3 == 0) {
      console.log(i);
    }
  }
};
funcQ2();

// Answer to Q3
var funcQ3 = () => {
  console.log('Answer to Q3');
  for (let i = 10; i < 100; i++) {
    let units = i % 10;
    let tens = parseInt(i / 10);
    if (i % 2 == 0 && tens / 2 == units) {
      console.log(i);
    }
  }
};
funcQ3();

// Answer to Q4
var funcQ4 = (str) => {
  let lowercaseLetters = [];
  //   this loop gets all the lowercase letters from the string
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      lowercaseLetters.push(str.charAt(i));
    }
  }
  //   this line sorts all the letters from small to big
  lowercaseLetters.sort();
  //   this loop removes the duplicated letters
  for (let i = 0; i < lowercaseLetters.length; i++) {
    for (let j = i + 1; j < lowercaseLetters.length; j++) {
      if (lowercaseLetters[i] == lowercaseLetters[j]) {
        lowercaseLetters.splice(j, 1);
        j = i;
      }
    }
  }
  //   here we display the answer
  let element = document.getElementById('q4-addTo');
  element.innerText = lowercaseLetters.length;
  element.style.color = 'blue';
  element.style.backgroundColor = 'white';
};

// Answer to Q5
var funcQ5 = () => {
  console.log('Answer to Q5');
  let randomNum = Math.floor(Math.random() * 12 + 1);
  if (randomNum == 7 || randomNum == 8) {
    console.log(`month_${randomNum} = vacation`);
  } else {
    console.log(`month_${randomNum} = school`);
  }
};
funcQ5();

// Answer to Q6
var funcQ6 = (str) => {
  console.log('Answer to Q6');
  // checks if string length qualifies
  if (str.length <= 20) {
    // this loop fetches the substrings
    let arr = [];
    for (let i = 0; true; ) {
      if (str.indexOf('*') != -1) {
        arr[i] = str.substring(0, str.indexOf('*'));
        str = str.replace(arr[i] + '*', '');
        i++;
      } else {
        break;
      }
    }
    // this picks the 1-2 middle chars of each substring
    let mappedArr = arr.map((subStr) => {
      let newStr;
      if (subStr.length % 2 != 0) {
        newStr = subStr.charAt(subStr.length / 2);
      } else if (subStr.length % 2 == 0) {
        newStr = subStr.charAt(subStr.length / 2 - 1);
        newStr += subStr.charAt(subStr.length / 2);
      }
      return newStr;
    });
    // this prints our required items individually
    mappedArr.forEach((char) => {
      console.log(char);
    });
  } else {
    console.log('string length must be lower than 20');
  }
};
funcQ6('DEFA*KBBG*X*ABC*');

// Answer to Q7
var funcQ7 = (str, subStr, num) => {
  let strPartOne = str.slice(0, num);
  let strPartTwo = str.slice(num);
  let newStr = `${strPartOne}${subStr}${strPartTwo}`;
  let element = document.getElementById('q7-addTo');
  element.innerText = newStr;
  element.style.color = 'blue';
  element.style.backgroundColor = 'white';
};

// Answer to Q8
var funcQ8 = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (
      char == 'a' ||
      char == 'e' ||
      char == 'i' ||
      char == 'o' ||
      char == 'u'
    ) {
      counter++;
    }
  }
  let element = document.getElementById('q8-addTo');
  element.innerText = counter;
  element.style.color = 'blue';
  element.style.backgroundColor = 'white';
};

// Answer to Q9
var funcQ9 = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == ' ') {
      if (str.charAt(i - 1) == 'Y') {
        counter++;
      }
    }
  }
  let element = document.getElementById('q9-addTo');
  element.innerText = counter;
  element.style.color = 'blue';
  element.style.backgroundColor = 'white';
};

// Answer to Q10
var funcQ10 = () => {
  console.log('Answer to Q10');
  let randomNum;
  let sum = 0;
  let counter = 0;
  while (sum < 70) {
    randomNum = Math.floor(Math.random() * 11);
    sum += randomNum;
    counter++;
  }
  console.log(`the sum is ${sum}`);
  console.log(`${counter} numbers have been lotted`);
};
funcQ10();

// Answer to Q11
var funcQ11 = () => {
  console.log('Answer to Q11');
  let mat = [];
  for (let i = 1; i <= 10; i++) {
    mat.push(new Array());
    for (let j = 1; j <= 10; j++) {
      let res = i * j;
      mat[i - 1][j - 1] = `${i}x${j}=${res}`;
    }
  }
  console.table(mat);
};
funcQ11();

// Answer to Q12
var funcQ12 = () => {
  console.log('Answer to Q12');
  let mat1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
    [3, 4, 5, 6],
  ];
  let mat2 = [
    [7, 8, 9, 0],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 1, 2],
  ];
  let mat3 = [];
  for (let i = 0; i < 4; i++) {
    mat3.push(new Array());
    for (let j = 0; j < 4; j++) {
      mat3[i][j] = mat1[i][j] + mat2[i][j];
    }
  }
  console.log(mat3);
};
funcQ12();
