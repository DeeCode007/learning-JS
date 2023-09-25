// get date and time data automaticallyl
let mydate = new Date()
// console.log(typeof mydate)
// console.log(mydate.toString()) // output = Thu Sep 21 2023 17:07:12 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString())// output = Thu Sep 21 2023
// console.log(mydate.toLocaleString())// output = 21/9/2023, 5:07:12 pm
// console.log(mydate.toLocaleDateString())//output = 21/9/2023
// console.log(mydate.toISOString()) // output = 2023-09-21T11:37:12.175Z
// console.log(mydate.toLocaleTimeString())// output = 5:07:12 pm

//how to create a date
//let myCreatedDate = new Date (2001,5,21,5,3,1) //first type of inputing date always insert date as yy,mm,dd,hh,mm,ss and if you dont wanna time to include in your date just don't need to write it in the code.
let myCreatedDate = new Date (2023,5,22,5) //  second way to input date as string "mm-dd-yy" and you wil get result in "dd-mm-yy0"
// console.log(myCreatedDate.toLocaleDateString())
// console.log(myCreatedDate.getTime())

// let myCreatedDate2 = new Date (2023,6,22,5)
// console.log(myCreatedDate2.getTime())

// console.log(Math.floor(((myCreatedDate2 - myCreatedDate)/1000)/86400)) // how to show difference amount of time between 2 dates.

// let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime)
// console.log(Math.floor(myTimeStamp/1000))

// how to change the view of date we get through by toLocaleString by adding some property in it.
// console.log(myCreatedDate.toLocaleString("default",{
//         hour : "numeric",
//         weekday : "short"
// }))

console.log(employee.details(5,2));
console.log(typeof details)