// Answer to Q1
function funcQ1(){
    console.log('Answer to Q1');
    for(let i=100; i < 1000; i++){
        let units = i%10;
        let tens = parseInt(i/10)%10;
        if(units == tens){
            console.log(i);
        }
    }
}

// Answer to Q2
function funcQ2(){
    console.log('Answer to Q2');
    for(let i=99; i > 9; i--){
        if(i%2 != 0){
            if(i%3 == 0){
                console.log(i);
            }
        }
    }
}

// Answer to Q3
function funcQ3(){
    console.log('Answer to Q3');
    for(let i=10; i < 100; i++){
        if(i%2 == 0){
            let units = i%10;
            let tens = parseInt(i/10);
            if((tens/2) == units){
                console.log(i);
            }
        }
    }
}

// Answer to Q4
function funcQ4(str){
    console.log('Answer to Q4');
    let counter = 0;
    let usedLetters = [];
    for(let i=0; i < str.length; i++){
        if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
            counter++;
            for(let j=0; j < usedLetters.length; j++){
                if(str.charAt(i) == usedLetters[j]){
                    counter--;
                    j=usedLetters.length
                }
            }
            usedLetters.push(str.charAt(i));
        }
    }
    console.log(counter);
}

// Answer to Q5
function funcQ5(str, sub, place){
    console.log('Answer to Q5');
    if(place < str.length){
        let newStr = str.slice(0,place) + sub + str.slice(place);
        console.log(newStr);
    } else{
        console.log(`${place} must be smaller than ${str}'s length`);
    }
}

// Answer to Q6
function funcQ6(str){
    console.log('Answer to Q6');
    let counter=0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i < str.length; i++){
        for(let j=0; j < 5; j++){
            if(str.charAt(i) == vowels[j]){
                counter++;
            }
        }
    }
    console.log(counter);
}