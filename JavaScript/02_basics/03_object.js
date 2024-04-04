/*
before understanding object, we need to understand that how object creates in javascript. there are three methods in javascript.
1. by object literal
2. by constructor
3. Object.create() // we will study about it later.

what is literal?
In JavaScript, literals are fixed values written directly into the code. literals offer an explicit and concrete value, making coding more straightforward and manageable. maybe -- (means literal uses hardcoding means you need to provide values by yourself. as before said fixed values means if we give value, then it will not change and if we want to change it, we will have to change it by our hands.)


object literal - 
An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}). we need to set property and its values by our hands and its not reusable.

example - 
const car = {
  myCar: "Toyota",
  special: "sales",
};

we made car object and gave properties and values and if we need to change toyoto then we will have to change it by our hand or by using car.myCar = changedvalue ; but what if we want to set same properties on many car objects which are created by object literals the we will have to write the same code again and again and thats a drawback of a object literal.
****************************************************************************************************************************

what is object constructor?
A constructor is a special method or a function to create and define object and its properties and method.
we can create object through new keyword and pass the parameters for object properties.

//example : 
function Car(make,model,year,colour){
    this.company = make,
    this.carModel = model,
    this.launchedYear = year,
    this.carColor = colour,
    this.details = function () {
        console.log(`${this.company}'s ${this.carModel} launched in ${this.launchedYear} with ${this.carColor} color`);
    }
}

const car1 = new Car("Honda","verna",2005,"silver");
const car2 = new Car("Tata","Nexon",2016,"Green");

car1.details()
//output = Honda's verna launched in 2005 with silver color.


now you can see that we used constructor to create object instead of literals and now we can create many as we want objects, and we don't need to write every properties and values on our own hand.

*/
// prototype -  in simple words, jab bhi hum kisi constructor ko create krte he (jaise following example me function car() he) aur new keyword ke through object create krte he to created object , constructor ki sari propties ka use kr skta he. 
//now lets take a example


function Car(make,model,year,colour){
    this.company = make,
    this.carModel = model,
    this.launchedYear = year,
    this.carColor = colour,
    this.details1 = function () {
        console.log(`${this.company}'s ${this.carModel} launched in ${this.launchedYear} with ${this.carColor} color`);
    }
}

// const superCarDetails = {
//     horsePower : "4500cc",
//     nitroEngine : "Yes",
//     details : function() {
//         console.log( "This car will go to 1km in 25 seconds");
//     }
// }
// Object.setPrototypeOf(Car.prototype, superCarDetails);

//type - 1 creating a property function for Car with help of prototype and we will call it through superCar prototype.
// Car.prototype.superCar = function() {
//     console.log(`${this.carModel} is super car`);
// }

//type - 2 
// Car.prototype.superCar2 = {
//     horsePower : "4500cc",
//     nitroEngine : "Yes",
//     details : function() {
//     console.log( `This car will go to 1km in 25 seconds`);
// }
// }


const car1 = new Car("Honda","Verna",2005,"Silver");
const car2 = new Car("Tata","Nexon",2015,"Green")
const car3 = new Car("Buggati", "Chiron", 2021,"Red")

// car3.superCar()


//ab yaha car1 object and car2 object ne constructor ki sare properties ka use kia but car3 ko ek aur property chahiye thi, par baki ke do object car1 and car2 ko wo property nahi chahiye then hum prototype ki help se constructor ke liye alag se ek property bnayege aur yeh property ek function ho skti he, ek object ho skta he ya ek array bhi ho skta he. upar example me type-1 me humne ek superCar name ki ek function property bnayi ab jis bhi object ko obj1,obj2 ya obj3 ko superCar name ki property lagegi to wo us object ko tabhi milegi jab wo object use call krega.

//isi tarah humne type-2 me prototype ki help se ek object banaya to ab obj1 aur baki bhi is object ko call kr skte he per iski individual properti ko kese access krna he wo abhi nhi pta.


//prototype inheritance - now lets assume that there is a object literal named superCarDetails and car1 wants to access its property then there is two way to do it.
//1st we can use Object.setPrototypeof(car1,superCarDetails) method for inheriting superCarDetails properties to car1 and now car1 can access superCarDetails property.
//2nd now we want that any object created using Car constructor can use superCarDetails properties then our Car constructor function need to inherit superCarDetails properties for that we will write Object.setPrototypeof(Car.prototype,superCarDetails). now all objs can access its properties.



