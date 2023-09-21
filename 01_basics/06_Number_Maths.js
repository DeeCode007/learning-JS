// let number1 = 100;
// console.log(typeof(number1.toString()))
// console.log(number1.toString().length)

// let number2 = 124.7985
// console.log(number2.toPrecision(3))
// console.log(number2.toPrecision(4))

// let number3 = 100000
// console.log(number3.toLocaleString())
// console.log(number3.toLocaleString('en-IN'))

//METHODS WHICH Return the values in true or false 
//number.inFinite(argument) : it will check the argument that given argument is finite or not.
//number.isInteger(argument) : it will check the argument that given argument is integer or not.

//*******************************Maths*************************/

// console.log(Math) // just to show you that math is object and we are gonna use its properties.

// console.log(Math.abs(-4)) // abs property will turn any negative number into positive number

// console.log(Math.round(4.6))// output = 5 // round property rounds off the value according to it like it will add or substract remaining needful amount to make it a integer.
// console.log(Math.ceil(4.3))// output = 5 // The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
// console.log(Math.floor(4.3))// output = 4 // The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.max(1,2,3))// output = 3 // The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
// console.log(Math.min(1,2,3))// output = 1 // The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
// // console.log(Math.pow(2,3)) // output = 8 // The Math.pow() static method returns the value of a base raised to a power. That is math.pow(x,y)=y is power of x
// console.log(Math.random()) // output = random number between 0 to 1(float value) and it will be difference from the previous one. we can't choose the range nor the number 
// console.log(Math.floor(Math.random()*10+1)) // random number between 1 to 10 (Integer value) / we multiplied by 10 to make the value greater than one and we added 1 to avoid to get 0 possibilities and we used floor\ceil method to make the number a integer

//lets use the min max and random no methods to create a random no. generator between our desired range.
//lets assume that we want to get the value between 10 and 20.
let min = 10
let max = 20 
console.log(Math.floor(((Math.random()) * (max - min + 1 ) + min)))
// output = random no between 10 and 20 
