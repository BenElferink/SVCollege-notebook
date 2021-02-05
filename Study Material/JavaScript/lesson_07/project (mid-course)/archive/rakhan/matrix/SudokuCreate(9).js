//let iterations = 0;

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
            let  lastRow = arr[lastRowIndex]; //the reference to the last row
            let  rowsToCheck = lastRowIndex % verticalBoxSize; //find what row of the sub box we are in vertically
            let  safeIndexes = []; //find which column is save to put a number in to
            let  randomSafeIndex; //pick one of the columns to place the number into from the safeIndexes array

            //used to find a safe column to place the number in the current row
            function findSafeIndex(boxesUsed) {
                //looks at previous rows if inside the sub box to see if the current number can be placed in the sub box
                function boxSafe(index) {
                    let indexBox = Math.floor(index / horizontalBoxSize);//finds which sub box the current index is in
                    if (boxesUsed.indexOf(indexBox) >= 0) {//checks to see if the current index's sub box has already been used
                        return false;
                    } else {
                        return true;
                    }
                }

                //loop through the current row to find a safe place to put the number
                for (let indexInLastRow = 0, rowLen = lastRow.length; indexInLastRow < rowLen; indexInLastRow++) {
                    let columnSafe = true; //assume the current column is safe

                    //make sure the current number isn't already used in this column
                    for (let rowIndex = arr.length - 1; rowIndex >= 0; rowIndex--) {
                        if(arr[rowIndex][indexInLastRow] == num) {
                            columnSafe = false;
                        }
                    }

                    //make sure current index is empty, column is safe, and that current box is safe
                    if(lastRow[indexInLastRow] === undefined && columnSafe && boxSafe(indexInLastRow)) {
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
                    let horizontalBox = Math.floor(arr[lastRowIndex - i].indexOf(num) / horizontalBoxSize);
                    horizontalBoxesUsed.push( horizontalBox );
                }
            }

            //get a safe index to put the number in to the row
            randomSafeIndex = findSafeIndex(horizontalBoxesUsed);

            //if there are no safe indexs return the number
            if(randomSafeIndex == undefined) {
                return num;
            } else {//else if there are safe indexs add the number to an index in the row and return true
                lastRow[randomSafeIndex] = num;
                return true;
            }
        }

        //loop through the numbers to set them in the sudoku
        for (let i = numSet.length - 1; i >= 0; i--) {
            let workingArray = [];//holds the rows we are currently working with and/or have already wored with
            let possible = true;//is the sudoku even possible?
            while (sudokuArray.length > 0) {//while there are rows in the sudokuArray have have been been processed keep looping
                workingArray.push(sudokuArray.shift());//add a row to the working array from the sudoku array

                possible = placeNumber(numSet[i], workingArray);//place the current working number in to the working array, to find out if the sudoku puzzle is possible

                if(possible !== true) {//if its not possible generate a new sudoku puzzle
                   // ++iterations;
                    return SudokuCreate(maxNum);
                }
            }

            //make the sudoku array equal to the working array when we're done
           sudokuArray = workingArray;
        }

      // console.log(iterations);
       console.table(sudokuArray);
    return sudokuArray;//return our array to start to do some sudoku
    }

    SudokuCreate(9);//make a 9x9 sudoku