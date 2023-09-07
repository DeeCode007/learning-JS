//first we will convert any values to number and will see their types.
//### number to number
let num1 = 33
// console.log(num1)
//console.log(typeof num1)
    //output => 33 ; number

//### number to string
//num1 = String(33) //converting num to string
//console.log(typeof num1) 
    //output => string
    /*note => we will have to pass a value into string function otherwise it will be recoginesed as a function
    example => num1 = String ; it will not convert num1 value to string. it will be recogines as a function only .*/
//or
//let newnum1 = String(num1) //created new variable newnum1 and saving the value of num1 as a string by passing num1 into string function.
//console.log(typeof newnum1)
    //output => string

//### number to boolean
// num1 = Boolean(33) //converting number value to boolean
//console.log(num1)
//console.log(typeof num1)
    //output => true; boolean
    //note -  it is always true if number is not 0 nor a empty value. it will always show true if even given value is string.

// string to number
let string1 = "33abc"
//console.log(typeof string1)
//string2 = Number(string1) //converting string to number
//console.log(typeof string2)
    //output => string ; number

// string+number to number
string2 = Number(string1)
console.log(typeof string2)
console.log (string2)
    // output => number ; NaN (Not an Number) 
