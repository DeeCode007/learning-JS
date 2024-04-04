// what is array?
//Arrays are generally described as list-like object, they are basically single object that contain multiple values stored in a list and array object can be stored in a single variable and by that variable we can access each and individual item in the list.

//in simple words - 
//array are normally described as list-like single object which can hold more than 1 value.we can access each and individual item in the list.

// Q. how array is a object?
//A. JS is a prototype based language means there are only two type in js. primitive and objects. other than primitive type , almost everything is object in js. 
//so basically there are prototype of objects and array function etc inherit those prototype. and by direct prototype they have thier special methods as well. 
//in a second way, like object is key value pair so array are. there is indexing is the key in array. and array have many object method as well




//*****************************************************************************************************
//declaring an array
// let array = [1 , 2 , 3 , 4, "deepak" , [ "icecream", "kulfi" ]] // Javascript array is dynamic means it can hold any type of data even we can store an array inside an array 
let array1 = [1 , 2 , 3 , 4]
let array2 = [-1,-2 , -3, -4]


//1. at()
//console.log(array1.at(2)) // we can find the array element by its index with help of "at" method. 2 is the index in this example



//2. concat()
// console.log(array1.concat(array2)) // we can add two arrays through "concat" method . concat method returns a new added array and it doesnot change the original array.



//3. [...,...]
//ALTERNATIVE WAY TO ADD TWO OR MORE ARRAY BY USING SPREAD (...) METHOD.
//let mergedArray = [...array1, ...array2] // we can use n no. of array in this method.



//A shallow copy of an object is a copy whose properties share the same references 
//A deep copy of an object is a copy whose properties do not share the same references



//4. copyWithin()
// console.log(array1.copyWithin(1, 2, 4)) // copywithin method copies a Arrays's elements and paste it inside the array by replacing targeting index elements so that Arrays lenght can't be effected. copywithin method creates a shallow copy means it changes in the original array.
// watch dcode video to understand it. 



//5. array.length
// console.log(array1.length)  // output = 4 // to find Array length



//Accessing and modifying array items
// console.log(array1[2]) // output= 3 // Accessing the array element through index
// array1[3] = "four" // modifying the array which index is 3 and it is replaced by four
// console.log(array1) 



// Accessing and modifying multidimensional array
// let MultiArray = [1, 2, 3, ["one", "two", "three"]]
// console.log(MultiArray[3][1])
// MultiArray[3][1] = "changed"
// console.log(MultiArray)



//6. index()
// console.log(array1.indexOf(2)) // output = 1 
// indexof method search the element value and return the index and it doesnot work in two dim. arrays. 



//7. push()
//Adding items by push method in at the end of array
// array1.push("Deepak", "Rohan") //to add one or more items to the end of an array we can use push(). 
// console.log(array1)
// let newLength = array1.push("Deepak", "Rohan") // whenever we push the item in the array it returns the length of the updating array and we can store that lenght in a new variable. 
// console.log(array1.length == newLength) // output = true 



//8. unshift()
//Adding items by unshift method in the starting of the array
// array1.unshift("Deepak") 
// we can use unshift method to add item in the front of the array and it also returns the length of the updating array
// // console.log(array1) 
// console.log(array1.length) 



//9. pop()
//Removing last item by using pop method
// console.log(array1.pop()) // output = 4 // it doesnot take any parameters and returns the removed last item
// console.log(array1)



//10. shift
//Removing the first item by using shift method
// console.log(array1.shift()) // output 1 // it also does not take any parameters and returns the removed first item
// console.log(array1)



//11. splice()
// Removing and/or replacing elements from the specific index by using splice()
// array1.splice(2,1) // output = [1, 2, 4] 
// splice(start/replaceElement, deletecount, ReplaceWith) 
// splice method will replace or delete the first parameter (in index form), with the delete count of (number) just like this example 
// replacing/deleting element at the index of 2 and deleting the 1 element . // it also returns the removed element array
// console.log(array1)
//NOTE = it modify the original array and for how to use it properly please look at the mdn document for better understanding.

// array1.splice(2,1,"Deepak")// output =  [1, 2 , deepak , 4] // replacing 2nd index and deleting 1 item at the starting of index of 2nd and replacing it with deepak string.
// console.log(array1)

//if we don't want to modify original array and want to do some changes and want to get a new changed array then we can use "toSpliced()" method.
// const months = ["Jan", "Mar", "Apr", "May"];
// Inserting an element at index 1
// const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
// const months3 = months2.toSpliced(2, 2);
// console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
// const months4 = months3.toSpliced(1, 1, "FAB", "Mar");
// console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
// console.log(months); // ["Jan", "Mar", "Apr", "May"]




//12. slice()
//The slice() method is a copying method. It does not alter this but instead returns a shallow copy that contains some of the same elements as the ones from the original array.
// Using slice, create newCar from myCar.
/*const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
  };
  const myCar = [myHonda,"purchase", "launch"]
  const newCar = myCar.slice(0, 2);
  
  console.log("myCar =", myCar);
  console.log("newCar =", newCar);
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color);
  
  // Change the color of myHonda.
  myHonda.color = "purple";
  newCar[0].color = "Blue";
  console.log("The new color of my Honda is", myHonda.color);
  
  console.log("myCar[0].color =", myCar[0].color);
  console.log("newCar[0].color =", newCar[0].color); */
// //NOTE - mainly we use slice to get a portion of the existing array and slice method returns the new portion of the array which is the shallow copy of existing array means it doesn't manipulate the original array and returns a new array but it shares the same reference so whenever we changes in the parent array or in the child array it manipulate both arrays.



//13. join()
// console.log(array1.join("-")) // The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. here the specified separator string is "-"/



//14. flat()
// let array3 = [2,5,3,4,["deepak", "rohan", "pawan" , [25,23,25]]]
// console.log(array3.flat(1)) // flat method merge nested arrays and it take depth as parameters . 


//15. isArray()
// console.log(Array.isArray(array1)) // it checks the array that it is array or not


//16. from()
// console.log(Array.from("DEEPAK")) // it will create a array with every word
// console.log(Array.from({name : "Deepak"}))// it will create a empty array because values are in key-pair values so we will have to tell it first that we want to create a array of key or the value.


//17. of()
// use of 'of' static method
//  let score1 = "deepak"
//  let score2 = "rohan"
//  let score3 = "pawan"

//  console.log(Array.of(score1, score2, score3) // It creates a single array of multiple elements in java script



//18. reverse()
/*The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.*/
/*
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1.reverse());
// Expected output: "array1:" Array ["three", "two", "one"]
parameters - none
*/


//19. fill()
//The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

//example : 
// Fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
//console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

//console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]



//20. with()
//using with : The with() method changes the value of a given index in the array, returning a new array with the element at the given index replaced with the given value. The original array is not modified. This allows you to chain array methods while doing manipulations.
/*
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
*/




// SUMMARY - 
/*
let array1 = [1,2,3,4,5,"Deepak"]

array1.at()
array1.concat()
console.log([...array1, ...array2]);
array1.copyWithin()
array1.length
array1[0] = 0
array1.indexOf()
array1.push()
array1.unshift()
array1.pop()
array1.shift()
array1.splice() 
array1.toSpliced()
array1.slice()
array1.join()
array1.flat()
array1.sort()
array1.toString() //normal
array1.reverse()
array1.fill()
Array.isArray()
Array.from()
Array.of()

*/


/*
Some methods do not mutate the existing array that the method was called on, but instead return a new array.

1. map()
2. filter()
3. concat()
4. slice()
5. toSpliced()
6. flat()
*/


/*
  Some methods mutate the existing array that the method was called on instead return a new array.

1. sort()
2. fill()
3. reverse()
4. push() 
4. pop() // return the deleted element
5. shift()
6. unshift() // return the new length of array
7. copyWithin()
8. splice()

 */

/*
some array methods does not return new array nor mutate source array. they return something else

 1. for each returns nothing
 2. join() returns the string
 3. find() returns the only one value
 4. findIndex() works as find but return the index
 5. indexOf() returns the index of desired element
 6. at() returns the element

*/


/* some methods return true and false
 1. every() returns true and false
 2. some()
 3. includes()
 */
