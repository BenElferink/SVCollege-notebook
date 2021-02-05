let num=7;
if(num>0 && num%2==0){
    console.log(`${num}: is 'even' & 'positive'`);
} else if(num<0 && num%2==0){
    console.log(`${num}: is 'even' & 'negative'`);
} else if(num<0 && num%2!=0){
    console.log(`${num}: is 'odd' & 'negative'`);
} else if(num>0 && num%2!=0){
    console.log(`${num}: is 'odd' & 'possitive'`);
} else{
    console.log(`${num}: is just a zero`);
}


let str='BlArgHarGh';
let counter=0;
for(let i=0; i<str.length; i++){
    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
        counter++;
    }
}
console.log(`in ${str} there are ${counter} capital letters`);


function primeNumber(x){
    for(let i=2; i<x; i++){
        if(x%i==0){
            return `${x} is not a prime`;
        }
    }
    return `${x} is a prime`;
}
let isPrime=primeNumber(13);
console.log(isPrime);


let shevaBoom=1;
while(shevaBoom<=100){
    if(shevaBoom%7==0 || shevaBoom%10==7 || (shevaBoom>=70 && shevaBoom<=79)){
        console.log('BOOM');
    } else{
        console.log(shevaBoom);
    }
    shevaBoom++;
}


function reorder(x){
    let i,j;
    for(i = 0; i < x.length; i++){
        for(j = 0; j < x.length - i - 1; j++){
            if(x.charAt(j) > x.charAt(j + 1)){
                x = x.slice(0,j) + x.charAt(j+1) + x.charAt(j) + x.slice(j+2);
            }
        }
    }
    console.log(x);
}
reorder('nfiehwrbvihrwbgibqv');