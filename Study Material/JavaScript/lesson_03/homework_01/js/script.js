// Answer to Q1
function idVerify(num){
    let result;
    let counter = 0;
    if(num.length == 9){
        for(let i = 0; i < 9; i++){
            if(num.charAt(i) >= 0 || num.charAt(i) <= 9){
                counter ++;
                if(counter == 9){
                    result = true;
                }
            }
        }
    } else{
        result = false;
    }
    alert('#ID: ' + result);
}

// Answer to Q2
function primeNumber(num){
    let counter = 0;
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            counter ++;
        }
    }
    if(counter == 2){
        alert(num + ' is a "prime" number.')
    } else{
        alert(num + ' is a "composite" number.')
    }
}

// Answer to Q3
function spaceBeforeCaps(str){
    let subStr1, subStr2;
    let newStr = str;
    let count = 0;
    for(let i = 0; i < newStr.length; i++){
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
            subStr1 = newStr.slice(0, i + count);
            subStr2 = newStr.slice(i + count);
            newStr = subStr1 + ' ' + subStr2;
            count ++;
        }
    }
    alert('Fixed string: ' + newStr);
}

// Answer to Q4
// let memo1 = null, memo2 = null;
// function negativeNumber(num){
//     for(let i = 0; i <= num;){
//         if(memo1 == null){
//             memo1 = num;
//         } else if(memo2 == null){
//             memo2 = num;
//         } else if(memo1 != null && memo2 != null){
//             if(memo1 > memo2){
//                 memo2 = num;
//             } else if(memo1 < memo2){
//                 memo1 = num;
//             }
//         }
//         console.log(memo1, memo2);
//         alert('!ALERT!  try agin;  negative number required;');
//         break;
//     }
//     if(num < 0){
//         let memoHigh;
//         if(memo1 > memo2){
//             memoHigh = memo1;
//             memo1 = null;
//             memo2 = null;
//         } else if(memo1 < memo2){
//             memoHigh = memo2;
//             memo1 = null;
//             memo2 = null;
//         } else if(memo1 == memo2){
//             memoHigh = 'all-numbers-typed-equal';
//             memo1 = null;
//             memo2= null;
//         }
//         alert('!CONGRATS!  highest number typed by far: ' + memoHigh);
//     }
// }
let highNumMemo = 0;
function negativeNumber(num){
    if(num >= 0){
        if(num > highNumMemo){
            highNumMemo = num;
        }
        alert(`try agin;  ${num} is not a negative number;`);
    } else if(num < 0){
        alert(`awesome; ${highNumMemo} is the highest number typed;`);
    }
}

// Answer to Q5
function playingWithStrings(str1, str2){
    let counter = 0;
    let dynamicString;
    if(str1.length < str2.length){
        dynamicString = str2;
        for(let i = 0; i < dynamicString.length; i ++){
            if(dynamicString.indexOf(str1) == i){
                counter ++;
                dynamicString = dynamicString.slice(i + 1);
                i = 0;
            }
        }
        alert(`${str1} appears ${counter} times in ${str2}`);
    } else if(str1.length > str2.length){
        dynamicString = str1;
        for(let i = 0; i < dynamicString.length; i++){
            if(dynamicString.indexOf(str2) == i){
                counter ++;
                dynamicString = dynamicString.slice(i + 1);
                i = 0;
            }
        }
        alert(`${str2} appears ${counter} times in ${str1}`);
    }
    console.log(`note to self: bug found-
    if short string contains 1 input (say: A),
    and long string is on repeat (say: AAAAA)
    code will recognize it's existence only once!`)
}

// Answer to Q6
function bubbleSort(str){
    for(let i = 0; i < str.length; i ++){
        for(let j = 0; j < str.length; j ++){
            if(str.charCodeAt(j) > str.charCodeAt(j + 1)){
                let tempMemo1 = str.charAt(j);
                let tempMemo2 = str.charAt(j + 1);
                let tempStr1 = str.slice(0, j);
                let tempStr2 = str.slice(j + 2);
                str = tempStr1 + tempMemo2 + tempMemo1 + tempStr2;
            }
        }
    }
    alert(`reorganized: ${str}`);
}

// Answer to Q7 (calculator)
let displayedNum, x, y, mathFunc;
function calcKeypad(num){
    displayedNum = document.getElementById('calcDisplay').value;
    document.getElementById('calcDisplay').value = displayedNum + num;
    if(mathFunc == null){
        x = parseFloat(displayedNum + num);
        displayedNum = x;
    } else{
        let mathIndex = displayedNum.indexOf(mathFunc);
        y = parseFloat(displayedNum.slice(mathIndex + 1) + num);
        displayedNum = y;
    }
}
function calcClear(){
    document.getElementById('calcDisplay').value = null;
    displayedNum = null;
    mathFunc = null;
    x = null;
    y = null;
}
function calcFunction(func){
    mathFunc = func;
    displayedNum = parseFloat(document.getElementById('calcDisplay').value);
    document.getElementById('calcDisplay').value = displayedNum + func;
}
function calcResult(){
    document.getElementById('calcDisplay').value = null;
    if(mathFunc == '+'){
        document.getElementById('calcDisplay').value = x + y;
    } else if(mathFunc == '-'){
        document.getElementById('calcDisplay').value = x - y;
    } else if(mathFunc == '*'){
        document.getElementById('calcDisplay').value = x * y;
    } else if(mathFunc == '/'){
        if(y != 0){
            document.getElementById('calcDisplay').value = x / y;
        } else if(y == 0){
            document.getElementById('calcDisplay').value = undefined;
        }
    }
    displayedNum = parseFloat(document.getElementById('calcDisplay').value);
    x = displayedNum;
    y = 0;
    mathFunc = null;
}