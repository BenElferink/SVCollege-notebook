// DATABASE
let username = 'admin';
let password = 'admin1234';
let chartSize = id('size').value;
let difficulty = id('diff').value;
let cube = Math.sqrt(chartSize);
let sudoku;
let sudokuToDisplay = [];
let sudokuSolvedByUser = [];

// LOAD SCREEN
window.onload = function(){
    createChart();
}

// LOGIN BUTTON
function login(){
    // CLEAR PREVIOUS COMMENTS
    let unameComment = id('uname-addto');
    let passComment = id('pass-addto');
    unameComment.innerText = null;
    passComment.innerText = null;
    // COLLECT USERNAME & PASSWORD
    let inputUsername = id('uname').value;
    let inputPassword = id('pass').value;
    // CHECK DATA
    if(inputUsername == username && inputPassword == password){
        // HIDE LOGIN SCREEN
        let modal = id('modal');
        modal.style.opacity = '0';
        modal.style.visibility = 'hidden';
    } else if(inputUsername != username && inputPassword == password){
        // DISPLAY CORRECT VALUE'S FOR USERNAME
        unameComment.innerText = 'admin';
        unameComment.style.color = 'red';
    } else if(inputUsername == username && inputPassword != password){
        // DISPLAY CORRECT VALUE'S FOR PASSWORD
        passComment.innerText = 'admin1234';
        passComment.style.color = 'red';
    } else{
        // DISPLAY CORRECT VALUE'S FOR BOTH
        unameComment.innerText = 'admin';
        unameComment.style.color = 'red';
        passComment.innerText = 'admin1234';
        passComment.style.color = 'red';
    }
}

// START GAME BUTTON
function startGame(){
    // COLLECT SETTINGS
    chartSize = id('size').value;
    difficulty = id('diff').value;
    // REMOVE CHART TABLE FROM DISPLAY
    removeChart();
    // CREATE CHART TABLE ON DISPLAY
    createChart();
    // RENDER SUDOKU MATRIX
    sudoku = SudokuCreate(9);  // fix required
    duplicateMatrix();
    checkDiff();
    // SEND MATRIX TO CHART
    sendMatrix();
    // RESET HINT COUNTER AND HEARTS OPACITY
    hintCounter = 3;
    id('hint-pic1').style.opacity = "100%";
    id('hint-pic2').style.opacity = "100%";
    id('hint-pic3').style.opacity = "100%";
    // START TIMER
    console.warn('solution:');
    console.log(sudoku);
}

// RESET BUTTON
function resetGame(){
    // REMOVE CHART TABLE FROM DISPLAY
    removeChart();
    // CREATE CHART TABLE ON DISPLAY
    createChart();
    // SEND MATRIX TO CHART
    sendMatrix();
    // START TIMER
}

// FINISH BUTTON
function finishGame(){
    // STOP AND COLLECT TIME
    // COLLECT DATA FROM CHART
    collectPlayerMatrix();
    // CHECK DATA
    let ifSuccess = checkPlayerMatrix()
    // POST RESULT
    postResult(ifSuccess);
}





// ---------- //
// CHART FUNCTIONS
// ---------- //


// REMOVE PREVIOUS CHART FROM DISPLAY
function removeChart(){
    id('chart').innerHTML = null;
}

// CREATE CHART TABLE ON DISPLAY
function createChart(){
    let chart = id('chart');
    let tileNum = 0;

    // CREATE CHART ROW
    for(let i=0; i < chartSize; i++){
        let row = document.createElement('div');
        row.style.display = 'flex';

        // CREATE CHART COLUMN
        for(let j=0; j < chartSize; j++){
            let col = document.createElement('div');
            col.style.border = '0.5px solid rgb(255, 150, 100)';
            col.style.borderRadius = '25%';
            col.style.color = 'orange';
            col.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            col.style.boxShadow = '0 0 10px black';
            col.style.textAlign = 'center';
            col.style.margin = '0.1em';

            // CREATE BLOCK BORDERS FOR AXIS-X
            if((i+1)%cube == 0){
                col.style.borderBottom = 'solid';
            } else if(i%cube == 0){
                col.style.borderTop = 'solid';
            }
            // CREATE BLOCK BORDERS FOR AXIS-Y
            if((j+1)%cube == 0){
                col.style.borderRight = 'solid';
            } else if(j%cube == 0){
                col.style.borderLeft = 'solid';
            }

            // CREATE INPUT
            let inp = document.createElement('input');
            let tileSize = 490/chartSize;
            let fontSize = 300/chartSize;
            inp.style.backgroundColor = 'transparent';
            inp.style.color = 'rgb(255, 150, 100)';
            inp.style.border = 'none';
            inp.style.textAlign = 'center';
            inp.style.fontSize = `${fontSize}px`;
            inp.style.height = `${tileSize}px`;
            inp.style.width = `${tileSize}px`;
            inp.setAttribute("id", `tileNum${tileNum}`);
            tileNum++;
            // SETS LIMIT TO USER, WHEN TYPING IN INPUT
            if(chartSize == 9){
                inp.setAttribute("maxlength", '1');
            } else if(chartSize == 16){
                inp.setAttribute("maxlength", '2');
            }

            // SEND ELEMENTS OUT
            col.appendChild(inp);
            row.appendChild(col);
        }
        chart.appendChild(row);
    }
}





// ---------- //
// MATRIX FUNCTIONS
// ---------- //


function SudokuCreate(maxNum) {
    //generate number set
    let numSet = [];
    let sudokuArray = [];
    //populates number set and files sudoku with the rows and columns it needs
    for (let i = 1; i <= maxNum; ++i) {
        numSet.push(i);
        sudokuArray.push(new Array(maxNum));
    }
    //loop through the numbers to set them in the sudoku
    for (let i=numSet.length-1; i >= 0; i--){
        let workingArray = []; //holds the rows we are currently working with and/or have already wored with
        let possible = true; // is the sudoku even possible?
        while (sudokuArray.length > 0){ // while there are rows in the sudokuArray have have been been processed keep looping
            workingArray.push(sudokuArray.shift()); //add a row to the working array from the sudoku array
            possible = placeNumber(numSet[i], workingArray); // place the current working number in to the working array, to find out if the sudoku puzzle is possible
            if(possible != true) { // if its not possible generate a new sudoku puzzle
                return SudokuCreate(maxNum);
            }
        }
        //make the sudoku array equal to the working array when we're done
        sudokuArray = workingArray;
    }
    return sudokuArray;//return our array to start to do some sudoku
}

//places numbers in the sudoku matrix
function placeNumber(num, arr) {
    let currentRowIndex = arr.length-1; //the index of the last row in the working array
    let currentRow = arr[currentRowIndex]; //the reference to the last row
    let rowsToCheck = currentRowIndex % cube; //find what row of the cube we are in AXIS-Y
    let randomSafeIndex; //pick one of the columns to place the number into from the safeIndexes array
    let horizontalBoxesUsed = []; //records which cube has been used, in the current cube row
    //if we are not the first row of the cube, loop through the other rows to see which cubes have been used
    if (rowsToCheck > 0) {
        for (let i = rowsToCheck; i > 0; i--) {
            let horizontalBox = Math.floor(arr[currentRowIndex - i].indexOf(num) / cube);
            horizontalBoxesUsed.push( horizontalBox );
        }
    }
    //get a safe index to put the number in to the row
    randomSafeIndex = findSafeIndex(horizontalBoxesUsed, num, arr);
    //if there are no safe indexs return the number
    if(randomSafeIndex == undefined) {
        return num;
    } else {//else if there are safe indexs add the number to an index in the row and return true
        currentRow[randomSafeIndex] = num;
        return true;
    }
}

//used to find a safe column to place the number in the current row
function findSafeIndex(boxesUsed, num, arr) {
    let currentRowIndex = arr.length - 1; //the index of the last row in the working array
    let currentRow = arr[currentRowIndex]; //the reference to the last row
    let safeIndexes = []; //find which column is save to put a number in to
    //looks at previous rows if inside the sub box to see if the current number can be placed in the sub box
    function boxSafe(index) {
        let indexBox = Math.floor(index / cube);//finds which sub box the current index is in
        if (boxesUsed.indexOf(indexBox) >= 0) {//checks to see if the current index's sub box has already been used
            return false;
        } else {
            return true;
        }
    }
    //loop through the current row to find a safe place to put the number
    for (let indexInLastRow = 0, rowLen = currentRow.length; indexInLastRow < rowLen; indexInLastRow++) {
        let columnSafe = true; //assume the current column is safe
        //make sure the current number isn't already used in this column
        for (let rowIndex = arr.length - 1; rowIndex >= 0; rowIndex--) {
            if(arr[rowIndex][indexInLastRow] == num) {
                columnSafe = false;
            }
        }
        //make sure current index is empty, column is safe, and that current box is safe
        if(currentRow[indexInLastRow] === undefined && columnSafe && boxSafe(indexInLastRow)) {
            safeIndexes.push(indexInLastRow);
        }
    }
    //return a safe index to be used for the current number
    return safeIndexes[randomize(0, safeIndexes.length)];
}

// DUPLICATES COMPLETE SUDOKU MATRIX, SO WE CAN REMOVE TILES LATER
function duplicateMatrix(){
    for(let i=0; i < chartSize; i++){
        sudokuToDisplay.push(new Array());
        for(let j=0; j < chartSize; j++){
            sudokuToDisplay[i][j] = sudoku[i][j];
        }
    }
}

// SET TILES TO PUBLISH BY DIFFICULTY
function checkDiff(){
    let tilesCounter;
    // SETS NUMBER OF TILES TO CLEAR
    if(difficulty == 'easy'){
        tilesCounter = chartSize * chartSize * 0.25;
    } else if(difficulty == 'normal'){
        tilesCounter = chartSize * chartSize * 0.5;
    } else if(difficulty == 'hard'){
        tilesCounter = chartSize * chartSize * 0.75;
    }
    // TARGETS RANDOM TILE ON MATRIX
    for(let counter = 0; counter  < tilesCounter; counter++){
        let i = randomize(0, chartSize);
        let j = randomize(0, chartSize);
        // CLEARS CHOSEN TILE, IF NOT CLEARED ALREADY
        if(sudokuToDisplay[i][j] != null){
            sudokuToDisplay[i][j] = null;
        } else{
            counter--;
        }
    }
}

// SEND MATRIX TO CHART
function sendMatrix(){
    let tileNum = 0;
    for(let i=0; i < chartSize; i++){
        for(let j=0; j < chartSize; j++){
            id(`tileNum${tileNum}`).value = sudokuToDisplay[i][j];
            if(sudokuToDisplay[i][j] != null){
                id(`tileNum${tileNum}`).style.backgroundColor = "rgba(188, 19, 254, 0.25)";
                id(`tileNum${tileNum}`).style.borderRadius = "25%";
                id(`tileNum${tileNum}`).style.cursor = "crosshair";
                id(`tileNum${tileNum}`).disabled = true;
            } else{
                id(`tileNum${tileNum}`).style.cursor = "pointer";
            }
            tileNum++;
        }
    }
}

// COLLECTS DATA FROM THE PLAYERS SCREEN, PUTS THEM IN A MATRIX
function collectPlayerMatrix(){
    let tileNum = 0;
    for(let i=0; i < chartSize; i++){
        sudokuSolvedByUser.push(new Array());
        for(let j = 0; j < chartSize; j++){
            sudokuSolvedByUser[i][j] = parseInt(id(`tileNum${tileNum}`).value);
            tileNum++;
        }
    }
}

// CHECKS IF PLAYER INPUT IS CORRECT
function checkPlayerMatrix(){
    for(let i=0; i < chartSize; i++){
        for(let j=0; j < chartSize; j++){
            if(sudokuSolvedByUser[i][j] != sudoku[i][j]){
                return false;
            }
        }
    }
    return true;
}

// POSTS THE RESULT
function postResult(ifSuccess){
    if(ifSuccess == true){
        window.alert('Well done!');
    } else{
        window.alert('Try again...');
    }
}


// HINT FUNCTION//
let hintCounter = 3;

function hint(){
    let runLoop = true;

    while(runLoop == true){
        let i = randomize(0, chartSize);
        let j = randomize(0, chartSize);
        let tileNumCounter = -1;

        console.log(i , j);

        if(hintCounter > 0){
            if(sudokuToDisplay[i][j] == null){
                for( let i1 = 0; i1 <= i; i1++){
                    for( let j1 = 0; j1 < sudokuToDisplay.length; j1++){
                        tileNumCounter++;
                    }
                }
                tileNumCounter = tileNumCounter - ((sudokuToDisplay.length - 1) - j);
                id(`tileNum${tileNumCounter}`).value = sudoku[i][j];
                
                id(`tileNum${tileNumCounter}`).style.backgroundColor = "rgba(188, 19, 254, 0.25)";
                id(`tileNum${tileNumCounter}`).style.borderRadius = "25%";
                id(`tileNum${tileNumCounter}`).style.cursor = "crosshair";
                id(`tileNum${tileNumCounter}`).disabled = true;
    
                id(`hint-pic${hintCounter}`).style.opacity = "20%";
    
                hintCounter--;
                runLoop = false;
            }
        } else{
            runLoop = false;
        }
    }
}


// ---------- //
// HELPER FUNCTIONS
// ---------- //


// GET ELEMENT BY ID
function id(id){
    return document.getElementById(id);
}
// RANDOM INTEGER BETWEEN "min-max" (NOT INCLUDING MAX)
function randomize(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}