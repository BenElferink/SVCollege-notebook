// 
// let
// recognized by scope

// 
// var
// recocgnized by all

// 
// arrow function
const hiName = (name) =>{
    console.log(`Hello ${name}`);
}
hiName('Ben');

// 
// forEach
let names = ['ben', 'orgad', 'yossi', 'dror', 'rakhan'];
names.forEach((item, index, array)=>{
    console.log(item, index);
})

// 
// כתבו פונקצייה אשר קולטת מערך של אובייקטים ואות אחת
// לכל אובייקט יש שני מאפיינים
// הפונקציה תדפיס כמה אנשים מתחילים באות שיקבלה הפונקצייה, ושגילם מעל18
let arrayOfObjects = [
    {name: 'ben', age: 23},
    {name: 'yossi', age: 22},
    {name: 'dror', age: 30},
    {name: 'orgad', age: 16},
    {name: 'oreo', age: 25}];
const checkPerson = (array, char) => {
    let counter=0;
    arrayOfObjects.forEach((obj, i, arr) => {
        if(obj.name.charAt(0) == char && obj.age > 18){
            counter++;
        }
    });
    console.log(counter);
}
checkPerson(arrayOfObjects, 'o');

// 
// filter
let newNames = names.filter((name, i, arr)=>
    (name != 'orgad'));
console.log(newNames);

// 
// תייצרו מערך 1-10, בעזרת פילטר תייצרו מערך חדש עם המספרים הזוגיים
let numArray = [1,2,3,4,5,6,7,8,9,10];
let newNumArray = numArray.filter((num)=>
    (num%2 == 0));
console.log(newNumArray);

// 
// map
let mapArr = [1,2,3,4,5,6,7,8];
let newMapArr = mapArr.map((num)=>{
    if(num%2 == 0){
        return 'even'
    }
    return 'odd'
});
console.log(newMapArr);

//
// תגדירו מערך של שמות
// באמצעות map
// תייצרו מערך חדש שיכיל את אורך כל השמות
let randNames = ['ben','orgad','yossi','dror','avior'];
let newRandNames = randNames.map((name)=>{
    return name.length;
});
console.log(newRandNames);