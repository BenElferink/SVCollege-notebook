// DATABASE
var username;
var difficulty = id('diff').value;
var chartSize = id('size').value;
var cube = Math.sqrt(chartSize);
var sudoku;
var sudokuToDisplay = [];
var sudokuSolvedByUser = [];
var hintCounter = 3;

// LOAD SCREEN
window.onload = function () {
  createChart();
  chartReadonly();
};

// LOGIN BUTTON
function login() {
  // CLEAR PREVIOUS COMMENTS
  let unameComment = id('uname-addto');
  unameComment.innerText = null;
  // COLLECT USERNAME
  username = id('uname').value;
  // CHECK DATA
  if (username != '') {
    // HIDE LOGIN SCREEN
    let modal = id('modal-login');
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
  } else {
    // DISPLAY CORRECT VALUE'S FOR USERNAME
    unameComment.innerText = 'FALSE';
    unameComment.style.color = 'red';
  }
}

// START GAME BUTTON
function startGame() {
  console.clear();
  // COLLECT SETTINGS
  chartSize = id('size').value;
  difficulty = id('diff').value;
  cube = Math.sqrt(chartSize);
  // RESET HINT COUNTER AND HEARTS OPACITY
  hintCounter = 3;
  id('hint-pic1').style.opacity = '100%';
  id('hint-pic2').style.opacity = '100%';
  id('hint-pic3').style.opacity = '100%';
  // CREATE CHART TABLE ON DISPLAY
  removeChart();
  createChart();
  // RENDER SUDOKU MATRIX
  if (chartSize == 9) {
    sudoku = SudokuCreate(9); // fix required
  } else if (chartSize == 16) {
    sudoku = createBigSudoku();
  }
  duplicateMatrix();
  checkDiff();
  // SEND MATRIX TO CHART
  sendMatrix();
  // START TIMER
  stopTimer();
  startTimer();
  console.warn('solution:');
  console.log(sudoku);
}

// RESET BUTTON
function resetGame() {
  // RESET HINT COUNTER AND HEARTS OPACITY
  hintCounter = 3;
  id('hint-pic1').style.opacity = '100%';
  id('hint-pic2').style.opacity = '100%';
  id('hint-pic3').style.opacity = '100%';
  // CREATE CHART TABLE ON DISPLAY
  removeChart();
  createChart();
  // SEND MATRIX TO CHART
  sendMatrix();
  // START TIMER
  stopTimer();
  startTimer();
}

// FINISH BUTTON
function finishGame() {
  // COLLECT DATA FROM CHART
  collectPlayerMatrix();
  // CHECK DATA
  let ifSuccess = checkPlayerMatrix();
  if (ifSuccess == true) {
    // STOP AND COLLECT TIME
    stopTimer();
    // POST RESULT
    postResult();
  } else {
    // SHOW THE WRONG TILES
    revealFalse();
  }
}

// HINT BUTTON
function hint() {
  // COLLECT USER MATRIX FROM DISPLAY
  collectPlayerMatrix();
  // KNOW WHEN TO STOP THE WHILE LOOP
  let runLoop;
  for (let i = 0; i < chartSize; i++) {
    for (let j = 0; j < chartSize; j++) {
      if (sudokuSolvedByUser[i][j] == '') {
        runLoop = true;
        break;
      } else {
        runLoop = false;
      }
    }
  }
  while (runLoop == true) {
    // TARGET RANDOM INDEX IN MATRIX
    let i = randomize(0, chartSize);
    let j = randomize(0, chartSize);
    let tileNumCounter = -1;
    if (hintCounter > 0) {
      if (sudokuSolvedByUser[i][j] == '') {
        // FIND TILE NUMBER ACCORDING TO TARGETED RANDOM INDEX IN MATRIX
        for (let i1 = 0; i1 <= i; i1++) {
          for (let j1 = 0; j1 < chartSize; j1++) {
            tileNumCounter++;
          }
        }
        tileNumCounter = tileNumCounter - (chartSize - 1 - j);
        // APPPLY PROPERTIES TO EMPTY TILE
        id(`tileNum${tileNumCounter}`).value = sudoku[i][j];
        id(`tileNum${tileNumCounter}`).style.backgroundColor =
          'rgba(188, 19, 254, 0.25)';
        id(`tileNum${tileNumCounter}`).style.borderRadius = '25%';
        id(`tileNum${tileNumCounter}`).style.cursor = 'crosshair';
        id(`tileNum${tileNumCounter}`).disabled = true;
        // REMOVE A HEART
        id(`hint-pic${hintCounter}`).style.opacity = '20%';
        hintCounter--;
        runLoop = false;
      }
    } else {
      runLoop = false;
    }
  }
}

// ---------- //
// CHART FUNCTIONS
// ---------- //

// REMOVE PREVIOUS CHART FROM DISPLAY
function removeChart() {
  id('chart').innerHTML = null;
}

// CREATE CHART TABLE ON DISPLAY
function createChart() {
  let chart = id('chart');
  let tileNum = 0;

  // CREATE CHART ROW
  for (let i = 0; i < chartSize; i++) {
    let row = document.createElement('div');
    row.style.display = 'flex';

    // CREATE CHART COLUMN
    for (let j = 0; j < chartSize; j++) {
      let col = document.createElement('div');
      col.style.border = '0.5px solid rgb(255, 150, 100)';
      col.style.borderRadius = '25%';
      col.style.color = 'orange';
      col.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      col.style.boxShadow = '0 0 10px black';
      col.style.textAlign = 'center';
      col.style.margin = '0.1em';

      // CREATE BLOCK BORDERS FOR AXIS-X
      if ((i + 1) % cube == 0) {
        col.style.borderBottom = 'solid';
      } else if (i % cube == 0) {
        col.style.borderTop = 'solid';
      }
      // CREATE BLOCK BORDERS FOR AXIS-Y
      if ((j + 1) % cube == 0) {
        col.style.borderRight = 'solid';
      } else if (j % cube == 0) {
        col.style.borderLeft = 'solid';
      }

      // CREATE INPUT
      let inp = document.createElement('input');
      let tileSize = 450 / chartSize;
      let fontSize = 300 / chartSize;
      inp.style.backgroundColor = 'transparent';
      inp.style.color = 'rgb(255, 150, 100)';
      inp.style.border = 'none';
      inp.style.outline = 'none';
      inp.style.textAlign = 'center';
      inp.style.fontSize = `${fontSize}px`;
      inp.style.height = `${tileSize}px`;
      inp.style.width = `${tileSize}px`;
      inp.setAttribute('id', `tileNum${tileNum}`);
      tileNum++;
      // SETS LIMIT TO USER, WHEN TYPING IN INPUT
      if (chartSize < 10) {
        inp.setAttribute('maxlength', '1');
      } else if (chartSize >= 10) {
        inp.setAttribute('maxlength', '2');
      }

      // SEND ELEMENTS OUT
      col.appendChild(inp);
      row.appendChild(col);
    }
    chart.appendChild(row);
  }
}

// MAKES DISPLAYED CHART READONLY (BEFORE START GAME)
function chartReadonly() {
  for (let i = 0; i < chartSize * chartSize; i++) {
    id(`tileNum${i}`).disabled = true;
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

  //size of sub boxes, figure out more dynamic way to set this
  let horizontalBoxSize = 3,
    verticalBoxSize = maxNum === 9 ? 3 : 2; //

  //find random number from 0 to max number, expludes max
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //places numbers in the sudoku array
  function placeNumber(num, arr) {
    let lastRowIndex = arr.length - 1; //the index of the last row in the working array
    let lastRow = arr[lastRowIndex]; //the reference to the last row
    let rowsToCheck = lastRowIndex % verticalBoxSize; //find what row of the sub box we are in vertically
    let safeIndexes = []; //find which column is save to put a number in to
    let randomSafeIndex; //pick one of the columns to place the number into from the safeIndexes array

    //used to find a safe column to place the number in the current row
    function findSafeIndex(boxesUsed) {
      //looks at previous rows if inside the sub box to see if the current number can be placed in the sub box
      function boxSafe(index) {
        let indexBox = Math.floor(index / horizontalBoxSize); //finds which sub box the current index is in
        if (boxesUsed.indexOf(indexBox) >= 0) {
          //checks to see if the current index's sub box has already been used
          return false;
        } else {
          return true;
        }
      }

      //loop through the current row to find a safe place to put the number
      for (
        let indexInLastRow = 0, rowLen = lastRow.length;
        indexInLastRow < rowLen;
        indexInLastRow++
      ) {
        let columnSafe = true; //assume the current column is safe

        //make sure the current number isn't already used in this column
        for (let rowIndex = arr.length - 1; rowIndex >= 0; rowIndex--) {
          if (arr[rowIndex][indexInLastRow] == num) {
            columnSafe = false;
          }
        }

        //make sure current index is empty, column is safe, and that current box is safe
        if (
          lastRow[indexInLastRow] === undefined &&
          columnSafe &&
          boxSafe(indexInLastRow)
        ) {
          safeIndexes.push(indexInLastRow);
        }
      }

      //return a safe index to be used for the current number
      return safeIndexes[getRandomInt(safeIndexes.length)];
    }

    let horizontalBoxesUsed = []; //records which sub box has been used, in the current sub box row

    //if we are not if the first row of the sub box, loop through the other rows to see which subboxes have been used
    if (rowsToCheck > 0) {
      for (let i = rowsToCheck; i > 0; i--) {
        let horizontalBox = Math.floor(
          arr[lastRowIndex - i].indexOf(num) / horizontalBoxSize
        );
        horizontalBoxesUsed.push(horizontalBox);
      }
    }

    //get a safe index to put the number in to the row
    randomSafeIndex = findSafeIndex(horizontalBoxesUsed);

    //if there are no safe indexs return the number
    if (randomSafeIndex == undefined) {
      return num;
    } else {
      //else if there are safe indexs add the number to an index in the row and return true
      lastRow[randomSafeIndex] = num;
      return true;
    }
  }

  //loop through the numbers to set them in the sudoku
  for (let i = numSet.length - 1; i >= 0; i--) {
    let workingArray = []; //holds the rows we are currently working with and/or have already wored with
    let possible = true; //is the sudoku even possible?
    while (sudokuArray.length > 0) {
      //while there are rows in the sudokuArray have have been been processed keep looping
      workingArray.push(sudokuArray.shift()); //add a row to the working array from the sudoku array

      possible = placeNumber(numSet[i], workingArray); //place the current working number in to the working array, to find out if the sudoku puzzle is possible

      if (possible !== true) {
        //if its not possible generate a new sudoku puzzle
        // ++iterations;
        return SudokuCreate(maxNum);
      }
    }

    //make the sudoku array equal to the working array when we're done
    sudokuArray = workingArray;
  }

  // console.log(iterations);
  //    console.table(sudokuArray);
  return sudokuArray; //return our array to start to do some sudoku
}

// CHOOSES A RANDOM SET 16X16 MATRIX
function createBigSudoku() {
  let bigMat1 = [
    [4, 10, 9, 15, 1, 7, 13, 8, 6, 14, 2, 12, 16, 5, 3, 11],
    [2, 5, 3, 1, 15, 4, 11, 16, 13, 9, 8, 7, 6, 10, 12, 14],
    [14, 6, 13, 12, 3, 10, 5, 2, 16, 11, 1, 4, 8, 15, 9, 7],
    [11, 7, 16, 8, 6, 14, 9, 12, 5, 3, 10, 15, 1, 2, 13, 4],
    [8, 16, 11, 4, 13, 15, 14, 9, 2, 5, 7, 3, 12, 1, 10, 6],
    [1, 14, 6, 13, 12, 8, 4, 5, 10, 16, 9, 11, 2, 3, 7, 15],
    [10, 15, 5, 3, 2, 1, 6, 7, 4, 12, 14, 8, 9, 11, 16, 13],
    [12, 2, 7, 9, 11, 3, 16, 10, 15, 13, 6, 1, 4, 8, 14, 5],
    [9, 4, 1, 10, 14, 2, 3, 13, 11, 15, 12, 6, 7, 16, 5, 8],
    [5, 8, 14, 16, 7, 9, 1, 6, 3, 4, 13, 10, 11, 12, 15, 2],
    [7, 3, 15, 6, 16, 11, 12, 4, 8, 2, 5, 9, 14, 13, 1, 10],
    [13, 12, 2, 11, 10, 5, 8, 15, 7, 1, 16, 14, 3, 6, 4, 9],
    [15, 9, 8, 2, 4, 12, 7, 3, 1, 10, 11, 13, 5, 14, 6, 16],
    [6, 13, 12, 5, 9, 16, 15, 1, 14, 8, 4, 2, 10, 7, 11, 3],
    [16, 11, 4, 7, 8, 13, 10, 14, 12, 6, 3, 5, 15, 9, 2, 1],
    [3, 1, 10, 14, 5, 6, 2, 11, 9, 7, 15, 16, 13, 4, 8, 12],
  ];
  let bigMat2 = [
    [15, 16, 5, 10, 4, 8, 11, 6, 7, 9, 13, 12, 1, 2, 14, 3],
    [8, 7, 12, 9, 3, 5, 15, 14, 11, 2, 10, 1, 16, 6, 13, 4],
    [1, 11, 4, 6, 2, 12, 9, 13, 15, 3, 16, 14, 8, 7, 5, 10],
    [14, 13, 2, 3, 16, 10, 7, 1, 4, 6, 5, 8, 11, 15, 9, 12],
    [2, 12, 9, 8, 13, 7, 6, 11, 10, 15, 14, 5, 3, 1, 4, 16],
    [6, 3, 16, 14, 15, 1, 12, 4, 13, 8, 2, 11, 9, 5, 10, 7],
    [5, 10, 15, 11, 9, 16, 2, 8, 3, 1, 4, 7, 6, 14, 12, 13],
    [7, 4, 1, 13, 10, 14, 3, 5, 9, 16, 12, 6, 15, 11, 8, 2],
    [3, 5, 13, 12, 6, 2, 1, 10, 14, 11, 7, 15, 4, 9, 16, 8],
    [11, 6, 14, 1, 12, 13, 8, 16, 5, 4, 3, 9, 7, 10, 2, 15],
    [16, 9, 8, 2, 7, 4, 5, 15, 1, 12, 6, 10, 13, 3, 11, 14],
    [10, 15, 7, 4, 11, 9, 14, 3, 16, 13, 8, 2, 5, 12, 1, 6],
    [13, 1, 6, 7, 5, 3, 4, 2, 12, 10, 11, 16, 14, 8, 15, 9],
    [12, 8, 3, 16, 1, 11, 10, 9, 6, 14, 15, 13, 2, 4, 7, 5],
    [4, 2, 11, 5, 14, 15, 13, 12, 8, 7, 9, 3, 10, 16, 6, 1],
    [9, 14, 10, 15, 8, 6, 16, 7, 2, 5, 1, 4, 12, 13, 3, 11],
  ];
  let bigMat3 = [
    [6, 14, 5, 16, 10, 12, 11, 15, 1, 8, 2, 9, 13, 7, 4, 3],
    [12, 10, 11, 9, 1, 5, 2, 3, 16, 7, 4, 13, 15, 14, 6, 8],
    [13, 1, 3, 15, 7, 4, 9, 8, 14, 10, 6, 11, 5, 2, 16, 12],
    [7, 8, 2, 4, 14, 6, 13, 16, 15, 12, 3, 5, 1, 11, 10, 9],
    [5, 15, 16, 7, 6, 1, 10, 11, 2, 3, 14, 12, 9, 13, 8, 4],
    [2, 12, 4, 14, 16, 8, 3, 5, 13, 6, 9, 10, 11, 15, 7, 1],
    [10, 11, 6, 13, 15, 9, 14, 4, 5, 1, 7, 8, 12, 3, 2, 16],
    [1, 9, 8, 3, 2, 13, 12, 7, 4, 16, 11, 15, 6, 10, 14, 5],
    [8, 16, 12, 5, 4, 10, 7, 6, 9, 11, 15, 14, 3, 1, 13, 2],
    [3, 13, 15, 11, 12, 14, 5, 1, 7, 2, 10, 16, 8, 4, 9, 6],
    [14, 4, 7, 1, 8, 2, 15, 9, 3, 5, 13, 6, 10, 16, 12, 11],
    [9, 6, 10, 2, 3, 11, 16, 13, 12, 4, 8, 1, 14, 5, 15, 7],
    [15, 2, 1, 6, 9, 16, 4, 12, 10, 13, 5, 3, 7, 8, 11, 14],
    [4, 5, 13, 8, 11, 15, 1, 2, 6, 14, 12, 7, 16, 9, 3, 10],
    [16, 3, 14, 12, 13, 7, 8, 10, 11, 9, 1, 2, 4, 6, 5, 15],
    [11, 7, 9, 10, 5, 3, 6, 14, 8, 15, 16, 4, 2, 12, 1, 13],
  ];
  let randomMat = randomize(1, 4);
  if (randomMat == 1) {
    return bigMat1;
  } else if (randomMat == 2) {
    return bigMat2;
  } else if (randomMat == 3) {
    return bigMat3;
  }
}

// DUPLICATES COMPLETE SUDOKU MATRIX, SO WE CAN REMOVE TILES LATER
function duplicateMatrix() {
  for (let i = 0; i < chartSize; i++) {
    sudokuToDisplay.push(new Array());
    for (let j = 0; j < chartSize; j++) {
      sudokuToDisplay[i][j] = sudoku[i][j];
    }
  }
}

// SET TILES TO PUBLISH BY DIFFICULTY
function checkDiff() {
  let tilesCounter;
  // SETS NUMBER OF TILES TO CLEAR
  if (difficulty == 'easy') {
    tilesCounter = Math.floor(chartSize * chartSize * 0.25);
  } else if (difficulty == 'normal') {
    tilesCounter = Math.floor(chartSize * chartSize * 0.5);
  } else if (difficulty == 'hard') {
    tilesCounter = Math.floor(chartSize * chartSize * 0.75);
  }
  // TARGETS RANDOM TILE ON MATRIX
  for (let counter = 0; counter < tilesCounter; counter++) {
    let i = randomize(0, chartSize);
    let j = randomize(0, chartSize);
    // CLEARS CHOSEN TILE, IF NOT CLEARED ALREADY
    if (sudokuToDisplay[i][j] != null) {
      sudokuToDisplay[i][j] = null;
    } else {
      counter--;
    }
  }
}

// SEND MATRIX TO CHART
function sendMatrix() {
  let tileNum = 0;
  for (let i = 0; i < chartSize; i++) {
    for (let j = 0; j < chartSize; j++) {
      id(`tileNum${tileNum}`).value = sudokuToDisplay[i][j];
      if (sudokuToDisplay[i][j] != null) {
        id(`tileNum${tileNum}`).style.backgroundColor =
          'rgba(188, 19, 254, 0.25)';
        id(`tileNum${tileNum}`).style.borderRadius = '25%';
        // id(`tileNum${tileNum}`).style.cursor = "crosshair";
        id(`tileNum${tileNum}`).disabled = true;
      } else {
        id(`tileNum${tileNum}`).style.cursor = 'pointer';
      }
      tileNum++;
    }
  }
}

// ---------- //
// FINISH FUNCTIONS //
// ---------- //

// COLLECTS DATA FROM THE PLAYERS SCREEN, PUTS THEM IN A MATRIX
function collectPlayerMatrix() {
  let tileNum = 0;
  for (let i = 0; i < chartSize; i++) {
    sudokuSolvedByUser.push(new Array());
    for (let j = 0; j < chartSize; j++) {
      sudokuSolvedByUser[i][j] = id(`tileNum${tileNum}`).value;
      tileNum++;
    }
  }
}

// CHECKS IF PLAYER INPUT IS CORRECT
function checkPlayerMatrix() {
  for (let i = 0; i < chartSize; i++) {
    for (let j = 0; j < chartSize; j++) {
      if (sudokuSolvedByUser[i][j] != sudoku[i][j]) {
        return false;
      }
    }
  }
  return true;
}

// TARGET THE WRONG TILES
function revealFalse() {
  let tileNum = 0;
  for (let i = 0; i < chartSize; i++) {
    for (let j = 0; j < chartSize; j++) {
      if (sudokuSolvedByUser[i][j] != sudoku[i][j]) {
        // THEN REVEAL THEM
        id(`tileNum${tileNum}`).style.color = 'red';
        id(`tileNum${tileNum}`).style.textShadow = '0 0 10px red';
      } else {
        // HIDE RED COLOR FROM FIXED ERRORS
        id(`tileNum${tileNum}`).style.color = 'rgb(255, 150, 100)';
        id(`tileNum${tileNum}`).style.textShadow = 'none';
      }
      tileNum++;
    }
  }
}

// ---------- //
// SCORE FUNCTIONS //
// ---------- //

// POSTS THE RESULT
function postResult() {
  // ANALYZE RECORDED TIME
  let minutes = parseInt(recentGameTime.slice(0, recentGameTime.indexOf(':')));
  let seconds = parseInt(recentGameTime.slice(recentGameTime.indexOf(':') + 1));
  // TARGET HTML ELEMENTS IN MODAL, AND GIVE THEM RECORDED VALUES
  id('score-name-title').innerText = username;
  id('score-minutes-title').innerText = minutes;
  id('score-seconds-title').innerText = seconds;
  // CALL FUNCTION THAT HANDLES LOCALSTORAGE
  scoreboardStorage(minutes, seconds);
  // SHOW THE SCOREBOARD MODAL
  let modal = id('modal-scoreboard');
  modal.style.opacity = '1';
  modal.style.visibility = 'visible';
}

// HANDLE LOCALSTORAGE (FOR LEADERBOARD)
function scoreboardStorage(min, sec) {
  // PULL KEYS FROM STORAGE
  let storedScores = [];
  for (let i = 1; i <= 5; i++) {
    storedScores.push(
      window.localStorage.getItem(`score${i}-${difficulty}${chartSize}`)
    );
  }
  // PULL TIME FROM LOCALSTORAGE KEYS
  let storedMin = [];
  let storedSec = [];
  for (let i = 0; i < 5; i++) {
    let currentKey = storedScores[i];
    try {
      let recordMin = parseInt(currentKey.slice(0, currentKey.indexOf(':')));
      let recordSec = parseInt(
        currentKey.slice(
          currentKey.indexOf(':') + 1,
          currentKey.indexOf(':') + 3
        )
      );
      storedMin.push(recordMin);
      storedSec.push(recordSec);
    } catch (error) {
      storedScores[i] = '';
    }
  }
  // LOOP THROUGH ALL KEYS,
  for (let i = 0; i < 5; i++) {
    // CHECK IF CURRENT GAMETIME WAS BETTER THAN KEY-RECORDS
    // BY FASTEST GAMETIME
    if (min < storedMin[i]) {
      storedScores.splice(i, 0, `${recentGameTime} - ${username}`);
      break;
    }
    // BY SAME MINUTE, FASTEST SECONDS
    if (min == storedMin[i] && sec < storedSec[i]) {
      storedScores.splice(i, 0, `${recentGameTime} - ${username}`);
      break;
    }
    // IF NOT FASTER, BUT SLOT(S) ARE EMPTY, THEN FILL NEXT SLOT
    if (storedScores[i] == '') {
      storedScores[i] = `${recentGameTime} - ${username}`;
      break;
    }
  }
  // UPDATE STORAGE & LIST WITH NEW CHANGES
  for (let i = 1; i <= 5; i++) {
    if (storedScores[i - 1] != null) {
      window.localStorage.setItem(
        `score${i}-${difficulty}${chartSize}`,
        storedScores[i - 1]
      );
      id(`scr${i}`).innerText = storedScores[i - 1];
    }
  }
  // SCOREBOARD SETTINGS MANUPALTION
  updateScrSettSelect('diff', difficulty);
  updateScrSettSelect('size', chartSize);
}

// SCOREBOARD SETTINGS MANUPALTION
function updateScrSettSelect(element, variable) {
  element = id(`scr-${element}`);
  for (let i = 0; i < element.options.length; i++) {
    if (element.options[i].value == variable) {
      element.options[i].selected = true;
      break;
    }
  }
}

// WHENEVER THE USER CHANGES THE OPTIONS, UPDATE THE SCREEN ACCORDINGLY
function updateScrScreen(setDiff, setSize) {
  for (let i = 1; i <= 5; i++) {
    id(`scr${i}`).innerText = window.localStorage.getItem(
      `score${i}-${setDiff}${setSize}`
    );
  }
}

// NEW GAME BUTTON (LEADERBOARD)
function newGame() {
  // CLOSE THE MODAL
  let modal = id('modal-scoreboard');
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  // RESET HINT COUNTER AND HEARTS OPACITY
  hintCounter = 3;
  id('hint-pic1').style.opacity = '100%';
  id('hint-pic2').style.opacity = '100%';
  id('hint-pic3').style.opacity = '100%';
  // CREATE NEW CHART
  removeChart();
  createChart();
}

// CLEARS LOCALSTORAGE & SCOREBOARD
function clearScores() {
  let answer = window.confirm(
    'This will reset all recorded scores! Are you sure?'
  );
  if (answer) {
    window.localStorage.clear();
    for (let i = 1; i <= 5; i++) {
      id(`scr${i}`).innerText = '';
    }
    window.alert('Score reset succesfull.');
  } else {
    window.alert('Phew you almost had me there ;)');
  }
}

// ---------- //
// TIMER FUNCTIONS //
// ---------- //

var timerInterval;
var recentGameTime;

// START TIMER
function startTimer() {
  let displayedTime = id('time');
  let minutes = '00';
  let seconds = '00';
  // ADDS SECONDS & MINUTES TO OUR TIME
  timerInterval = setInterval(
    function () {
      if (seconds < 60) {
        seconds++;
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        if (seconds == 60) {
          minutes++;
          if (minutes < 10) {
            minutes = '0' + minutes;
          }
          seconds = '00';
        }
      }
      // POSTS NEW TIME AFTER ABOVE CHANGE
      displayedTime.innerText = `${minutes}:${seconds}`;
    },
    1000,
    minutes,
    seconds,
    displayedTime
  );
}

// STOP TIMER
function stopTimer() {
  // STOPS THE TIME FROM COUNTING
  clearInterval(timerInterval);
  // COLLECTS & REMEMBERS THE TIME (FOR FINISHED GAME)
  recentGameTime = id('time').innerText;
  // RESETS THE TIME ON DISPLAY
  id('time').innerText = '00:00';
}

// ---------- //
// HELPER FUNCTIONS
// ---------- //

// GET ELEMENT BY ID
function id(id) {
  return document.getElementById(id);
}
// RANDOM INTEGER BETWEEN "min-max" (NOT INCLUDING MAX)
function randomize(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
