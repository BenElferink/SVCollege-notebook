// calculator database
let numArray = [];
let oprArray = [];
let numCounter = 0;
let oprCounter = 0;
let ifClearScreen = 0;

function allClear(){
    // clears all data to default
    document.getElementById('display').value = null;
    numArray = [];
    oprArray = [];
    numCounter = 0;
    oprCounter = 0;
    ifClearScreen = 0;
}

function numpad(num){
    // clears screen after previous input(s)
    if(numCounter != ifClearScreen){
        document.getElementById('display').value = null;
        ifClearScreen++;
    }
    // create number on display
    document.getElementById('display').value += num;
}

function operator(opr){
    // remember number from display on array-memory
    if(numCounter == oprCounter){
        numArray.push(parseFloat(document.getElementById('display').value));
        numCounter++;
    }
    // remember operator on array-memory
    oprArray.push(opr);
    oprCounter++;
}

function result(){
    let result = 0;
    // remember number from display on array-memory
    numArray.push(parseFloat(document.getElementById('display').value));
    numCounter++;
    // loop all array-properties until empty
    while(oprCounter != 0){
        let oprAtUse = oprArray.shift();
        if(oprAtUse == '+'){
            result = numArray.shift() + numArray.shift();
        } else if(oprAtUse == '-'){
            result = numArray.shift() - numArray.shift();
        } else if(oprAtUse == '*'){
            result = numArray.shift() * numArray.shift();
        } else if(oprAtUse == '/'){
            result = numArray.shift() / numArray.shift();
        }
        // display result, and reset counter(s)
        numArray.unshift(result);
        numCounter -= 1;
        oprCounter -= 1;
    }
    document.getElementById('display').value = result;
    ifClearScreen = 0;
}