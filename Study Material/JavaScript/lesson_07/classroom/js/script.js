/// object contains many properties

// object
let student = {
    // properties
    name: 'ben',
    id: '1234',
    age: 23
}
console.log(student.name);
console.log(student);

// change property value
student.age++;
console.log(student.age);

// create new property
student.car = 'Porsche';
console.log(student);

// object in object
let person = {
    name: 'ben',
    id: '777',
    city: {
        address: 'jaffa st.',
        number: 1
    }
}
console.log(person.city.address);

// array of objects
let listOfStudents = [{name: 'ben', age: 23},{name: 'yossi', age: 22},{name: 'liran', age: 21}];
// print a property of all objects
for(let i=0; i < listOfStudents.length; i++){
    console.log(listOfStudents[i].name);
}

/// תרגיל: כתבו פוקנצייה המקבלת מערך של אנשים 
/// הפונקצייה תייצור מערך חדש עם כל שמות האנשים שגרים בתל אביב
/// ותדפיס את המערך החדש
let arrayTask1 = [
    {id: 1, name: 'ben', car: {type: 'porsche', color: 'black'}, address: {city: 'rishon letsion', street: 'moshe dayan'}},
    {id: 2, name: 'orgad', car: {type: 'bmw', color: 'white'}, address: {city: 'tlv', street: 'allenby'}},
    {id: 3, name: 'yossi', car: {type: 'honda', color: 'blue'}, address: {city: 'petah tikva', street: 'jerusalem'}},
    {id: 4, name: 'dor', car: {type: 'masserati', color: 'blue'}, address: {city: 'tlv', street: 'even gvirol'}},
    {id: 5, name: 'ranni', car: {type: 'audi', color: 'grey'}, address: {city: 'haifa', street: 'jaffa'}}
];
function checkCity(arr){
    let newArray = [];
    for(let i=0; i < arr.length; i++){
        if(arr[i].address.city == 'tlv'){
            newArray.push(arr[i].name)
        }
    }
    console.log(newArray);
}
checkCity(arrayTask1);

// RANDOM
let max = 50;
let min = 10;
// until max, not including max
let randomNumber = Math.floor(Math.random()*(max-min)+min);
// until max, including max
randomNumber = Math.floor(Math.random()*(max-min+1)+min);
console.log(randomNumber);

function randomize(){
    // create random number
    let res = Math.floor(Math.random()*(100-1)+1);
    // put number in div
    document.getElementById('random').innerHTML = res;
}

// EXCEPTIONS
function checkFirstChar(str){
    try{
        if(str.charAt(0) == 'A'){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }
    catch(e){
        console.error(e);
    }
}
checkFirstChar('Abcdefgh');
checkFirstChar('abcdefgh');
checkFirstChar(12345);
console.warn('finish');

// create error
let ageArr = [10,20,30,-40,50,60];
for(let i=0; i < ageArr.length; i++){
    try{
        if(ageArr[i] < 0) throw `${ageArr[i]} must be positive`;
        console.log(ageArr[i]);
    }
    catch(e){
        console.error(e);
    }
}

// ------ //
// answer to previous homework Q6
let matQ6 = [[1,0,0],[0,0,0],[1,0,1]];

function createMatBorder(mat){
    let zeroArray = [];
    // create zero's border
    for(let i=0; i <= mat.length+2; i++){
        // create zero's to be added on top & bottom
        zeroArray.push(0);
        // add zero's to left and right of matrix
        if(i < mat.length){
            mat[i].unshift(0);
            mat[i].push(0);
        }
    }
    // add zero's to top & bottom
    mat.unshift(zeroArray);
    mat.push(zeroArray);
    return mat;
}
let newMatQ6 = createMatBorder(matQ6);

function checkMatIslands(mat){
    let counter = 0;
    for(let i=1; i < mat.length-1; i++){
        for(let j=1; j < mat[i].length-1; j++){
            if(mat[i][j] == 1){
                if(mat[i-1][j-1] == 0){
                    if(mat[i-1][j] == 0){
                        if(mat[i-1][j+1] == 0){
                            if(mat[i][j-1] == 0){
                                if(mat[i][j+1] == 0){
                                    if(mat[i+1][j-1] == 0){
                                        if(mat[i+1][j] == 0){
                                            if(mat[i+1][j+1] == 0){
                                                counter++;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return counter;
}
console.log(checkMatIslands(newMatQ6));