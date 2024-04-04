// Q.1 add string and num
let stringVariable = "Deepak";
let anyNumber =25;
console.log (stringVariable + anyNumber);

// Q.2 Find the data type of stringVariable
console.log (typeof (stringVariable));

//Q.3 try to Change const value and add another key to this object
const dictionary = {
    Good : "achha",
    bad :"bura",
    come : "aana",
    go : "jana",
    door : "darwaja"
};
dictionary.arrow = "teer";
console.log(dictionary.arrow)
console.log(dictionary)
// dictionary = 52; will get a error as we can't reassign a const type variable.