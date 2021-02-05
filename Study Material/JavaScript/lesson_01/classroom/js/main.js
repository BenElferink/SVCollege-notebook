// alert('hello');

// targeting the element
// read it's value
// mainpulate the element

// targeting the content, and it's content
console.log(document.getElementById('h').innerText);
console.log(document.getElementById('d'));
console.log(document.getElementById('d').innerHTML);
console.log(document.getElementById('d').innerText);

// targeting the content, and it's value
console.log(document.getElementById('pass').value);

// show password value
let element = document.getElementById('pass');
console.log(element.value);

// math
let x = 0;
x = x + 1; // x=0+1; 1
x += 1; // x=1+1; 2
x++; // x=2+1; 3

x = x - 1; // x=3-1; 2
x -= 1; // x=2-1; 1
x--; // x=1-1; 0

// take 3-digit number, and sum each individual digit.
let y = 126;
let a, b, c;
a = y % 10; // 6
console.log(a);
b = parseInt(y / 10); // 12
c = parseInt(b / 10); // 1
b %= 10; // 2
console.log(b);
console.log(c);
let sum = c + b + a;
console.log(sum);

//
let str = 'ABCDEFGH'; // index memory '01234567'
let str1 = str.indexOf('CDE'); // 2 (only 1st digit, NULL is -1)
let str2 = str.charAt(0); // A (character at index)
let str3 = str.substring(6, 8); // GH (from index to index, not including last digit)
//
let nul = 'ABCDEFGHIJ'; // index memory '0123456789'
let nulLength = nul.length; // 10
let nulDisplay = nul.substring(nulLength - 2, nulLength); // IJ

//
let alex = 'ABCDEFGHIJK';
let alexIndex = alex.indexOf('GH');
let alexSubstring = alex.substring(alexIndex, alexIndex + 2);
console.log(alexSubstring);
