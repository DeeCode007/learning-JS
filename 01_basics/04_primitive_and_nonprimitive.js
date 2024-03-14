let a = 5;
let b = a;
let c = 5;

//console.log(a==b)
//  output = true. // primitive data type compares the value strictly if values are same it will return true
// console.log(a==c) // same as previous line
// a = a+10;
// console.log(a)
// console.log(b)
// console.log(a===b)
//  output = 15; 5; false // as we previously assigned a to b but later we reassigned the variable a but it will not effect the b variable as when we assigned a variable to b , we didn't assign actual value of a we just assigned the copy of the variable a. thats why we got false.

//#### NOTE -  Primitive data type - primitive data type stores in stack memory. primitive data types are not mutable, it means once we declare a variable with primitive data type , it can't be directly alter , we will have to reassign to change the value. 
 

//---------------------------------------------------------------------

let obj1 = {Fname : "dee" , Lname : "gehlot" };
let obj2 = {Fname : "dee" , Lname : "gehlot" };
let obj3 = obj1
// console.log(obj1===obj2) //
// console.log(obj3===obj1)
// output = false; true ; // non-primitive data types compares the reference stored in stack memory in their variable thats why even obj1 and obj2 have same values but it returns false but when we assigned obj1 to obj3 , js engine actually didn't assign the value, it assigned the reference to obj3 variable and thats why we got true. 
// ### NOTE - non-primitiva data type are object array and function . when we assign a object to a variable in key-pair values then the values stores in heap memory and its reference stores in stack memory in the variable. 
// non-primitve data type are mutable it means we can alter their values by using object properties and we don't need to reassign the value to change it like primitive data types. 
