// Primitives datatypes -- Call by value

// String , Number, Boolean, Null, Undefined, Symbol, BigInt

// Symbol example to check

let id = Symbol(123);

let anotherId = Symbol(123);

// console.log( id === anotherId);
// console.log(typeof id);



// Non - primitives or reference types  --- typeof non-primitives types returns object
//                                      --- typeof function is object function 

// Arrays, Objects and Functions.

const fruites = ["Mango", "Orange", "Banana", "Apple"];

let profileDetails = {
    name: "Liladhar",
    age: 35, 
    isLoggedIn: false

}

const myFunction = function(){
    console.log("hello world!");
}

// console.log(typeof myFunction);
// console.log(typeof profileDetails);
// console.log(typeof fruites);

// ***********************************************************************************

// Stack (Primitives) and Heap (Non-primitives) Memory

let userState = "Maharashtra";

let changeUserState = userState;

changeUserState = "Delhi";

console.log(userState);
console.log(changeUserState);

let user = {
    emailId: "liladhar300@gmail.com", 
    age: 35,
}

let user2 = user;

user2.age = 25;

console.log(user.age);
console.log(user2.age);