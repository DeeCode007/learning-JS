
//*******************************************21. sort()************************************************
//watch video "Learn javascript SORTING in "6mins" by Bro Code 
//sort() will sort the array in accending order (in lexicography or alphabetically) and it will treat a number as a string and will sort them as a string . read more about it at mdn

//if we don't give parameter to the sort method, it will sort array element based on lexicography or maybe like alphabetically.

//sort() without parameter.
/*
const number = [10,2,9,4,2,20,70,1,8]
number.sort()
console.log(number);
output = [1, 10, 2, 2, 20, 4, 70, 8, 9]
*/

//but if we want to sort it according to numeric sorting then we will have to give it a parameter where we need to tell it how we want elements to be sorted.
//sort() take return value sign(positive and negative) as a parameter 

//A positive value indicates that b come first.
//A negative value indicates that a come first

/*
const number = [10,2,9,4,2,20,70,1,8];
number.sort((a,b) => a-b);//it is sort form of write for only one statement function, if you forget it, learn about "=>" the arrow function in javascript.
console.log(number);
//output = [1,2,2,4,8,9,10,20,70]

console.log(number.sort((a,b) => a-b)) // it will sort array in decending.
console.log(number.sort((a,b) => b-a)) // it will sort array in accending.
*/



// this is how ascending sort works - 
//const number = [(a)10,(b)2,9,4,2,20,70,1,8];


//in the number array, sort() will assign a=10, and b=2; and then it will see that the result of a-b is positve or negative. if it is positive, b will come first and if it is negative then a will come first.

//it is how sort() method works one by one till it give us last and correct answer =

//the difference between two numbers doesn't matter at all, they are just repersenting sign of the result like it is negative or positive
/* phase - 1
[10,2,9,4,2,20,70,1,8]
10-2 = 8
[2,10,9,4,2,20,70,1,8]
10-9 = 1
[2,9,10,4,2,20,70,1,8]
10-4 = 6
[2,9,4,10,2,20,70,1,8]
10-2 = 8
[2,9,4,2,10,20,70,1,8]
10-20 = -10
[2,9,4,2,10,20,70,1,8]
20-70 = -50
[2,9,4,2,10,20,70,1,8]
70-1 = 69
[2,9,4,2,10,20,1,70,8]
70-8 = 62
[2,9,4,2,10,20,1,8,70]
*/

/*phase - 2
[2,9,4,2,10,20,1,8,70]
2-9 = -7
[2,9,4,2,10,20,1,8,70]
9-4 = 5
[2,4,9,2,10,20,1,8,70]
9-2 = 7
[2,4,2,9,10,20,1,8,70]
9-10 = -1
[2,4,2,9,10,20,1,8,70]
10-20 = -10
[2,4,2,9,10,20,1,8,70]
20-1 = 19
[2,4,2,9,10,1,20,8,70]
20-8 = 12
[2,4,2,9,10,1,8,20,70]
20-70 = -50
*/

/* phase - 3
[2,4,2,9,10,1,8,20,70]
2-4 = -4
[2,4,2,9,10,1,8,20,70]
4-2 = 2
[2,2,4,9,10,1,8,20,70]
and soo on.....................
// and this phase will continue till it gets all negative in a-b.

*/


/*
//sorting in object 

const dataArray = [ 
    {name : "Deepak", age : 27, income : 120000},
    {name : "Rohan", age : 25, income : 140000},
    {name : "Lucky", age : 29, income : 80000} ,
    {name : "vikash", age : 38, income : 90000},
]

dataArray.sort((a,b) => b.income - a.income)
console.log(dataArray);

output = 
[
  { name: 'Lucky', age: 29, income: 80000 },
  { name: 'vikash', age: 38, income: 90000 },
  { name: 'Deepak', age: 27, income: 120000 },
  { name: 'Rohan', age: 25, income: 140000 }
]

*/

//NOTE - sorting modify the new array and if we don't want to modify new array then we can use toSorted() method.




//***************************************22. filter()***************************************************

//It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array

//means I'll describe in hindi to get better understanding.

//niche example me age name ka array he aur usme values he, next statment me ek function he jisme hum parameter ke taur pr element denge.
//"element" just a word he, hum kuchh bhi name de skte he.
//ab jab hum filter() method ka use krege to yeh function ko call krega, ab function is method se ek value yani parameter mangega, ab filter apni 0th index se ek ek krke us funtion ko array ka element dega, aur wo element function me jaygea, condition check hogi aur true ya false me result dega aur fir filter ne jis value ya element ko as a function pass kia tha, agar condition check me uski value true aati he to new array me store ho jayega otherwise wo new array me nahi aayega and fir filter() method apne 1st index ki value as a argument function ko pass krega and so on .....

/*
const age = [15,29,14,32,17,1,52,41,19]
const adult = age.filter((element) => element>=18)
const child = age.filter((element) => element<18)

console.log(adult);
console.log(child);
*/


//check the prime number in the array
/*
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(array.filter(checkArray));
function checkArray (number) {
    if(number == 1){
        return false;
    }
    else if(number>1){
    for( i = 2; i<number ; i++){
        if(number%i === 0){
            return false;
            break; //break does not work in function.
        }
    }
    return true;
}
}
*/


//************************************************23. find()*********************************************

//find() works same as filter but it return only one and first occured filtered value not like filter who returns all filtered value.

/*
const fruit = ["Mango", "Blueberry", "graps", "Kiwi"];

console.log(fruit.find((element) => element.includes("ue")));

//output = Blueberry
*/
/*
const data = [{
    name : "Deepak",
    value : 50000,
    key : 2
},
{
    name : "rohan",
    value : 50000,
    key : 3
}]

console.log(data.find((element) => element.key == 3 ));
//output = { name: 'rohan', value: 50000, key: 3 }


//NOTE - findIndex() works same as find but it returns the index instead of that first element.
*/



//*********************************************24. some()***********************************************

//when we use some() method, it will check the callbackfn condition in every element of the array and if the condition match for any element then it returns true or false

//to check if any adult is in the array?
/*
const age = [20,15,18,36,17,24];
console.log(age.some((element) => element>=18));
//output = true
*/



//***********************************************25. every()**********************************************

//every() method works same as some() but it returns true only if array's all element pass the callback fn condition then it return true otherwise if any element don't pass the conditon then it will return false.

//to insure that there should be not a single person should below 18.
//1. 
/*
const age = [20,15,18,36,17,24];

console.log(age.every((element) => element>=18));
//output = false;
//false because there are element which don't fulfill the callback fn conditon.
*/

//2.
/*
const age2 = [20,18,19,25,36,41];
console.log(age2.every((element) => element>=18));
//output = true;
*/




//*************************************************26. forEach()*****************************************
//forEach funtion calls a provided callbackFn function once for each element in an array in ascending-index order.
//Its return value is discarded. The function is called with the following arguments:
//element : The current element being processed in the array.
//index: The index of the current element being processed in the array.
//array: The array forEach() was called upon.


// we can call it with only element argument too
/*
const fruit = ["graps", "kiwi", "apple", "mango"]
fruit.forEach(capitalize);
fruit.forEach(display)
function upperCase(element, index,array) {
    array[index] = element.toUpperCase();
}
function display(element) {
    console.log(element);
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}
*/
