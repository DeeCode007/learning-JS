"use strict"
// simple for loop example
/*
for (let i = 0 ; i < 9 ; i++) {
    console.log(i);
}
*/

//add first n natural number 
/*
let n = 10;
let sum = 0;
for(let i=1;i<=n;i++){
    sum += i; 
}
console.log(sum);
*/


//factorial 
/*
let n = 6;
let multiplication = 1;
for(i=n;i>0;i--){
    multiplication *= i;
}
console.log(multiplication);
*/


//fabonacci series
/*
let n1 = 0;
let n2 = 1;
let number = 10;
let total;
for(i = 1; i<= number; i++){
    console.log(n1);
    total = n1+n2;
    n1 = n2;
    n2 = total;
}
*/



//display the sequence of even no
/*
let number = 10;
let sum = 0;
for(i = 0; i< number; i++){
    i++;
    sum = i+1;
    console.log(sum);
}
*/


//display the reverse sequence of even no
/*
let number = 10;
let sum = 0;
for(i=number; i>0 ; i--){
    i--;
    sum = i+1;
    console.log(sum);
}
*/


//display prime no. list
/*
let number = 20;
for(let i=2;i<number;i++){
    let flag = 0;
    for(j=2;j<i;j++){
        if(i%j==0){
            flag = 1;
            break;
        }
    }

    if(i>1 && flag == 0){
        console.log(i)
    }
}
*/


//check prime no.
/*
number = 20;
let flag = 0;
for(let i=2;i<number;i++){
    if(number%i == 0){
        flag = 1;
        break;
    }
}
if(flag == 1){
    console.log("this is not prime no");
}
else{
    console.log("this is prime no")
}
*/
