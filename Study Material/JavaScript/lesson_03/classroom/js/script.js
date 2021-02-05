/* let i = 1;
while(i <= 3){
    console.log('Hello');
    i++;
}

for(let 1 = 1; i <= 3; i++){
    console.log('Hello');
} */

function print10(){
    for(let i = 1; i <=10; i++){
        console.log(i);
    }
}

function reversePrint10(){
    for(let i = 10; i >0; i--){
        console.log(i);
    }
}

function factorial(num){
    let fac = 1;
    for(let i = 1; i <= num; i ++){
        fac *= i;
    }
    alert('Factorial is: ' + fac);
}

function dividerCount(num){
    let numCount = 0;
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            numCount ++;
        }
    }
    alert(num + ' divides ' + numCount + ' times.');
}

function identicalCounter(num1, num2){
    if(num1.length == 3 && num2.length == 3){
        let numOfIdentical = 0;
        let charNum = 0;
        for(let i = 0; i < 3; i ++){
            if(num1.charAt(charNum) == num2.charAt(charNum)){
                numOfIdentical ++;
            }
            charNum ++;
        }
        alert('Number of identical digits: ' + numOfIdentical);
    }
}

/* function identicalCounter(number1, number2){
    let counter = 0;
    for(let i = 1; i <= 3; i ++){
        let digit1 = number1 %10;
        let digit2 = number2 %10;
        if(digit1 == digit2){
            counter ++;
        }
        number1 = parseInt(number1 / 10);
        number2 = parseInt(number2 / 10);
    }
    alert('Number of identical digits: ' + counter);
} */

function lionInTheDesert(num){
    let minRange = 0;
    let maxRange = 100;
    let halfOfRange;
    while(true){
        halfOfRange = (minRange + maxRange) / 2;
        if(num > halfOfRange){
            minRange = halfOfRange;
        } else if(num < halfOfRange){
            maxRange = halfOfRange;
        } else if(num == halfOfRange){
            alert('Number guessed is: ' + halfOfRange);
            break;
        }
    }
}