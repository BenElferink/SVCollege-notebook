function checkDiff(){
    let tilesCounter;

    let randomMatrix = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];

    if(difficulty == 'easy'){
        tilesCounter = Math.floor(chartSize * chartSize * 0.25);
    } else if(difficulty == 'normal'){
        tilesCounter = Math.floor(chartSize * chartSize * 0.5);
    } else{
        tilesCounter = Math.floor(chartSize * chartSize * 0.75);
    }

    for(let counter = 0; counter  < tilesCounter; counter++){
        let i = randomize(0, chartSize);
        let j = randomize(0, chartSize);


        if(randomMatrix[i][j] != null){
            randomMatrix[i][j] = null;
        } else{
            counter--;
        }
    }

    return randomMatrix;
}