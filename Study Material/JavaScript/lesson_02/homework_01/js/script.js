// Answer to Q1
function lowestNumber(a, b){
    if(a < b && a != b){
        alert('Lowest number is: ' + a);
    } else if(b < a && b != a){
        alert('Lowest number is: ' + b);
    } else{
        alert('!Both numbers are equal!');
    }
}

// Answer to Q2
function variableCharacterCount(a, b, c, d){
    let aCount = a.length;
    let bCount = b.length;
    let cCount = c.length;
    let dCount = d.length;
    let aboveThree = 0;
    if(aCount > 3){
        aboveThree ++ ;
    }
    if(bCount > 3){
        aboveThree ++ ;
    }
    if(cCount > 3){
        aboveThree ++ ;
    }
    if(dCount > 3){
        aboveThree ++ ;
    }
    alert('Variables over 3 characters: ' + aboveThree);
}

// Answer to Q3
function removeCapsOnA(str){
    let strIndex = str.indexOf('A');
    if(strIndex == -1){
        alert('Nothing changed: ' + str);
    } else{
        str = str.replace('A', 'a');
        alert('After change: ' + str);
    }
}

// Answer to Q4
function analyzeNumber(number){
    let moduluNum = number % 2;
    if(number > 0 && number != 0){
        if(moduluNum != 0){
            alert(number + ' is positive & odd');
        } else{
            alert(number + ' is positive & even');
        }
    } else if(number < 0 && number != 0){
        if(moduluNum != 0){
            alert(number + ' is negative & odd');
        } else{
            alert(number + ' is negative & even');
        }
    } else{
        alert('cannot define ' + number);
    }
}

// Answer to Q5
function compareStartAndEnd(str){
    let firstLetter = str.charAt(0);
    let lastLetterIndex = str.length;
    lastLetterIndex -= 1;
    let lastLetter = str.charAt(lastLetterIndex);
    if(firstLetter == lastLetter){
        let strChange = str.substring(1, lastLetterIndex);
        alert('before: ' + str + ', after: ' + strChange);
    } else{
        alert('they dont compare');
    }
}

// Answer to Q6
function variableAnalyze(str){
    if(str.indexOf('*') != -1){
        let strIndex = str.indexOf('*');
        str = str.slice(0, strIndex) + str.slice(strIndex + 1);
        alert('result: ' + str);
    } else if(str.indexOf('@') != -1){
        str = '*' + str + '*';
        alert('result: ' + str);
    } else if(str.indexOf('₪') != -1){
        alert('new shekel');
    }else{
        alert('are you f*cking around?')
    }
}

// Answer to 'currency calculator'
function currencyCalc(number, currency){
    if(currency == 'dollar'){
        currency = 0.29;
        alert('₪' + number + ' = ' + '$' + number*currency);
    } else if(currency == "euro"){
        currency = 0.26;
        alert('₪' + number + ' = ' + '€' + number*currency);
    } else if(currency == 'pound'){
        currency = 0.23;
        alert('₪' + number + ' = ' + '£' + number*currency);
    }
}