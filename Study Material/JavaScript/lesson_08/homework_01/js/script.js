// Answer to Q1
console.log('Answer to Q1');
let funcQ1 = (str) =>{
    if(str.length > 5){
        return true
    } else{
        return false
    }
}
console.log(funcQ1('abcdefgh'));

// Answer to Q2
console.log('Answer to Q2');
let funcQ2 = (str) =>{
    if(str.charAt(0) == str.charAt(str.length-1)){
        return "first & last letters are similar"
    } else{
        return "first & last letter are different"
    }
}
console.log(funcQ2('abcdefga'));

// Answer to Q3
console.log('answer to Q3');
let funcQ3 = (str) =>{
    let lastLetter = str.charAt(str.length-1);
    if(lastLetter >= 'A' && lastLetter <= 'Z'){
        return true
    } else{
        return false
    }
}
console.log(funcQ3('beN'));

// Answer to Q4
console.log('Answer to Q4');
let arrQ4 = [1,2,3,4,5,6,7,8];
let counterQ4 = 0;
arrQ4.forEach((num, i, arr)=>{
    if(num%3 == 0){
        console.log(`${num} at index ${i} divides by 3`);
        counterQ4++;
    }
    if(i == arr.length-1){
        if(counterQ4 == 0){
            console.log('none of the numbers divide by 3');
        }
    }
});

// Answer to Q5
console.log('Answer to Q5');
let arrQ5 = [
    {name: 'ben', age: 23, id: 1},
    {name: 'sun', age: 24, id: 2},
    {name: 'tomer', age: 22, id: 3}
];
arrQ5.forEach((obj, i, arr)=>{
    if(obj.name.charAt(0) == 'b' && obj.age > 20){
        console.log(obj.name);
    }
});

// Answer to Q6
console.log('Answer to Q6');
let arrQ6 = ['a', 'B', 'c', 'D', 'e', 'f', 'G'];
let newArrQ6 = arrQ6.map((char, i, arr)=>{
    if(char >= 'A' && char <= 'Z'){
        return 'U'
    } else if(char >= 'a' && char <= 'z'){
        return 'L'
    }
});
console.log(newArrQ6);

// Answer to Q7
console.log('Answer to Q7');
let arrQ7 = ['a', 'b', 'c', 'd', 'e', 'f'];
let newArrQ7 = arrQ7.map((char, i, arr)=>{
    if(i%2 == 0 ){
        return i
    } else{
        return char
    }
});
console.log(newArrQ7);

// Answer to Q8
console.log('Answer to Q8');
let arrQ8 = [4, 7, 16, 18 ,21 ,23, 69, 11];
let newArrQ8 = arrQ8.filter((num)=>(num>18));
console.log(newArrQ8);

// Answer to Q9
console.log('Answer to Q9');
let arrQ9 = [2,4,1,2,7,2,8];
let funcQ9 = (arr) => {
    for(let i=0; i < arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr.splice(j, 1);
            }
        }
    }
    return arr.filter((num, i)=>(i!=3));
}
console.log(funcQ9(arrQ9));

// Answer to Q10
console.log('Answer to Q10');
let arrQ10 = ['name1', 'name2', 'name3'];
let funcQ10 = (name) => {
    return [...arrQ10, name];
}
console.log(funcQ10('name4'));

// Answer to Q11
console.log('Answer to Q11');
let firstArrQ11 = ['name1', 'name2', 'name3'];
let secondArrQ11 = ['name4', 'name5', 'name6'];
let funcQ11 = (arr1, arr2) => {
    return [...arr1, ...arr2]
}
let thirdArrQ11 = funcQ11(firstArrQ11, secondArrQ11);
console.log(thirdArrQ11);