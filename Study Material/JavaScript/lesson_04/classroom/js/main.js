// fix to previous homework Q5
function findSubString(longStr, shortStr){
    let counter = 0;
    while(longStr.indexOf(shortStr) != 0){
        let start = longStr.indexOf(shortStr) + shortStr.length;
        longStr = longStr.substring(start, longStr.length);
    }
    return counter;
}

// arrays
let x = 5;
let array = [1, 2, 3]; // value is indexed
array[0] = 8;
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array);

// adding a value to the end of array
array.push('Ben'); // [8, 2, 3, Ben]
// take value from end of array, then delete from source
let popped = array.pop(); // Ben [8, 2, 3]

// adding value to beginning of array
array.unshift('Hi') // [Hi, 8, 2, 3]
// take value from start of array, then delete from source
popped = array.shift(); // Hi [8, 2, 3]


// task1
let task1 = [1, 2, 3, 4];
task1.unshift(0);
let sum = task1.shift() + task1.shift();
console.log(task1, sum);

// task2
let task2 = [1, 2, 3, 4];
task2.push(5);
sum = task2.pop() + task2.pop();
console.log(task2, sum);

// task3
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let thirdArray = [];
for(let i = 0; i < firstArray.length; i ++){
    thirdArray.push(firstArray[i]);
}
for(let i = 0; i < secondArray.length; i ++){
    thirdArray.push(secondArray[i]);
}
console.log(firstArray,secondArray,thirdArray);


// the spread operator
let arr = [1, 2, 3];
arr = [0,...arr]; // [0,1,2,3] - instead of unshift
arr = [...arr, 4]; // [0,1,2,3,4] - instead of push