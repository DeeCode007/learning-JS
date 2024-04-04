//1. use logical operator to find wheater the person age lies between 10 to 20 or not?

// solution : 
// const age = 21;
// const result = (age>10 && age < 20 )? "your age is between 10-20" : "your age is not between 10-20";
// console.log(result)


//2. demostrate the use of switch-case statement in javascript.

//solution : 
/* const fruit = "graps";
switch(fruit) {
    case "apple" : {
        const fruitName = "apple";
        console.log(`we have ${fruitName}`);
        break;
    }
    case "graps" : {
        const fruitName = "graps";
        console.log(`we have ${fruitName}`);
        break;
    }
    case "mango" : {
        const fruitName = "mango";
        console.log(`we have ${fruitName}`);
        break;
    }
    default:
        {
            console.log(`we dont have ${fruit}`)
        }
} */


//3. write a javascript program to find a number whether a is divisible by 2 or 3.
//solution:
/*const a = 17;
if (a%2 == 0){
    console.log(`this number ${a} is divisible by 2`)
}
else if(a%3 == 0){
    console.log(`this number ${a} is divisible by 3`)
}
else {
    console.log(`this number ${a} is not divisible by 2 or 3`)
}*/



//4. write a program to find he/she can drive a car or not.
//solution:
/*const a = 18;
(a=>18)? console.log("you can drive") : console.log("you cannot drive.");*/



//practice : check given numbers sign
  /*
  let x = parseInt(2);
  let y = parseInt(-7);
  let z = parseInt(5);

  x>0 ? console.log("sign of x is positive") : console.log("sign of x is negative");
  y>0 ? console.log("sign of y is positive") : console.log("sign of y is negative");
  z>0 ? console.log("sign of z is positive") : console.log("sign of z is negative");
  */



  //practice to find a sign of product of three numbers using conditional statement.
  /*
  let x = parseInt(-2);
  let y = parseInt(7);
  let z = parseInt(5);

  if(x>0 && y>0 && z>0) {
    console.log("product is positive");
  }
  else if(x<0 && y<0 && z<0){
    console.log("product is negative");
  }
  else if(x<0 && y>0 && z<0){
    console.log("product is positive");
  }
  else if(x<0 && y<0 && z>0){
    console.log("product is positive");
  }
  else if(x>0 && y<0 && z<0){
    console.log("product is positive");
  }
  else{
    console.log("product is negative");
  }
  */


  //practice of last example in a simple way
  /*
  let x = parseInt(-2);
  let y = parseInt(-7);
  let z = parseInt(-5);

  let multi = x*y*z;
  (multi>0) ? console.log("product is positive") : console.log("product is negative")
  */
