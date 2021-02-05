let chartSize = 9;


function createMatrix(){
    // let sudoMat = [];
    // let sudoMatRow = [];
    // for(let i = 0; i < chartSize; i++){
    //     sudoMatRow.push(0);
    // }

    // for(let i = 0; i < chartSize; i++){
    //     sudoMat.push(sudoMatRow);
    // }

    // console.log(sudoMat);
    let sudoMat = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

    // debugger
    let randomNumber;

    for( let i = 0; i < sudoMat.length; i++){
        let intCounter = 0;

        for(j = 0; j < sudoMat.length; j++){

            randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            sudoMat[i][j] = randomNumber;

            let rowStatus = true;
            let columnStatus = true;


            for(let j1 = j - 1; j1 >= 0; j1--, intCounter++){
                if(intCounter < 1000){
                    if(sudoMat[i][j1] == sudoMat[i][j]){
                        rowStatus = false;
                        break;
                    }
                } else{
                    i = 0;
                    j = 0;
                    rowStatus = false;
                    break;
                }
            }

            if(rowStatus == true){
                if(intCounter < 1000){
                    for(let i1 = i - 1; i1 >= 0; i1--, intCounter++){
                        if(sudoMat[i1][j] == sudoMat[i][j]){
                            columnStatus = false;
                            break;
                        }
                    }
                } else{
                    i = 0;
                    j = 0;
                    columnStatus = false;
                    break;
                }
            }
            if(rowStatus == false || columnStatus == false){
                j--;
            }
        }
    }
    console.log(sudoMat);
    // return sudoMat;
}
createMatrix();
// let matrix = createMatrix();
// console.log(matrix);