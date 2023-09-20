// how to use single quote, double quote and a backlash in a string data type

// let string = "I am learning 'javascript'"
// let string1 = "I am learning \'javascript'\ "
// let string2 = "I am learning \"javascript\" "
// let string4 = "this is called \\ backlash character" //output = this is called \ backlash character
// console.log(string)

// string is primitive data type but there is a string object too in java script we can create it by using 'new' keyword and string() constructor. after creating a string object, we can use its prototype methods like charat,split,indexof.

let stringObj = new String("I am learning javascript , by chai aur javascript tutorial.")
// console.log(stringObj) // It shows the string as a object

// console.log(stringObj.charAt(6)) // output = e // character at 6th index

// console.log(stringObj.indexOf("learning")) // output = 5 // index of first appearance of the learning word and it will show only first character index.

// let indexCollector = stringObj.indexOf("javascript")
// console.log(indexCollector)
// console.log(stringObj.indexOf("javascript" , indexCollector + 1)) // indexOf can have 2 parameters , 1st parameter for the keyword we need to find the index and secondparamter for where we need to start searching by index.
// output = 14; 39 // 14th index is first appearance of the javascript and 39th index of 2nd appearance of javascript. 

// let lengthExp = "deepak"
// console.log(lengthExp.length) // output = 6 // it shows the lenght of string or a sentance 

// console.log(stringObj[6]) // output = e / work same as charAt

// console.log(stringObj[stringObj.length - 2]) // work same as charAt but in a different way.

// let stringPrim  = "deepak"
// console.log(stringPrim.includes("ee")) // Output = true // we use include method to search and in return the value as true of false

// console.log(stringObj.startsWith("learn")) // output = false // we use startswith method to findout that the string is starting with the same parameter we give and it returns the values as true or false. Above string does not start with learn, it start with "I am" thats why we received false. 
// console.log(stringObj.startsWith("I am")) // output = true 
// // console.log(stringObj.startsWith("i AM")) // output = false // javascript is a case sensitive language thats why we received false .
// console.log(stringObj.startsWith("learn", 5)) // output = true // startswith takes 2 parameters too and if we enter the secondparameter it will start searching from the given paramenter . 

// console.log(stringObj.endsWith("script")) // output = false // work as same as startswith but the difference is that it look at the end of the string.

// console.log(stringObj.slice(5,13)) // output = learning // You can extract a substring from a string using the slice() method. You pass it: 1. the index at which to start extracting
// 2. the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.
// console.log(stringObj.slice(5)) // output = learning javascript , by chai aur javascript tutorial.
//If you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter. Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:


// console.log(stringObj.toUpperCase()) // converts to all string in uppercase
// console.log(stringObj.toLocaleUpperCase("learning")) // it doesn't give a fuck if we want to convert substring of a string into upper by using toUpperCase method but lets try to do it in following example

// we just tried to convert a lower case substring into upper case in a sentence in our own way
/*let StartIndexCollector = stringObj.indexOf("learning")
console.log(StartIndexCollector)
let length = "learning".length
let endIndexCollector = StartIndexCollector + length
console.log(endIndexCollector)
let splitWord = stringObj.slice(StartIndexCollector, endIndexCollector)
let UpperCase = splitWord.toUpperCase()
console.log(stringObj.replace("learning", UpperCase))*/
//NOTE -  Be aware that replace() in this form only changes the first occurrence of the substring. If you want to change all occurrences, you can use replaceAll():

// console.log(stringObj.split(" "))
// console.log(stringObj.split(""))
// console.log(stringObj.split())
// NOTE - exicute the above example for better understanding

// let separateValue1 = "deepak"
// let separateValue2 = "Gehlot"
// console.log(separateValue1.concat(" ", separateValue2)) // output = deepa Gehlot // it merges two string


// console.log(stringObj.padEnd(65, "*")) // first paramter is to increase the length of the given strning and fills the extra index with the second parameter by string value, it add extra index at the end of the string or sentance.
// console.log(stringObj.padStart(65, "*"))// works same as padend but it add extra index at the start of the string.

//useful example of pad method
// let accNumber = String("4535256595")
// let slicedAccNumber =  accNumber.slice(-4)
// let maskedNumber = slicedAccNumber.padStart(accNumber.length , "*")
// console.log(maskedNumber) 

// console.log(stringObj.repeat(2))
// //or
// let mood = " happy"
// console.log(`I am ${mood.repeat(3)}`) / it repeats the words which starts with given index value in the parameter
//output = I am happy happy happy 



