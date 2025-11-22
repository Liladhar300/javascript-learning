let firstName = "Liladhar";
let lastName = "Patil";
// let  userName = `Using template literal ${firstName} hello! ${lastName}`;

// console.log("Hello", firstName, lastName);
// console.log(userName);

const newString = new String("Liladhar300");

// console.log(newString);
// console.log(newString[1]);

/* ################################## chatAt########################## */

// console.log(newString.charAt("3")); - output - a
// console.log(newString[3]); - same output - a
// console.log(newString.charAt(-1)); - gives coerse value like blank output
// console.log(newString[-1]); - undefined because of negative
// console.log(newString.at(-1)); - gives output - 0 


/* ----------------- indexOf and startWith and endWith----------------- */
const newStringindexOf = new String("Liladhar300indexOf");
// console.log(newStringindexOf.indexOf("l")); // 2
// console.log(newStringindexOf.indexOf(3) === 8); // true
// console.log(newStringindexOf.startsWith("L")); // true
// console.log(newStringindexOf.startsWith("3")); // false
// console.log(newStringindexOf.endsWith(0)) // false
// console.log(newStringindexOf.endsWith("f")) //true
// console.log(newStringindexOf.startsWith("i",1)); //true


/* --------------- includes ------------------ most asked ------ */

const sampleText = " Hi! my name is Liladhar hi!";

// console.log(sampleText.includes("!")); //true

// console.log(sampleText.includes("Hi!")); // true

// console.log(sampleText.includes("hi!!")); // false

// console.log(sampleText.includes("i", 1)); //true

/* ----------------- replaceAll ---------------- */

// const string1 = "Hello world liladhar welcome to our world";
// const replaceString = string1.replace("World", "Liladhar"); // not replaced because of case-senstivity
// console.log(replaceString); // Hello world liladhar welcome to our world replaced first occurence only
// console.log(replaceString.replace("world", "universe"));// Hello universe liladhar welcome to our world
// console.log(string1.replaceAll("world", "universe"));  // Hello universe liladhar welcome to our universe replaced world in string to univers

/* ---------------- slice and sub-string method --------------- */

const sliceString = new String("Liladhar");
// console.log(sliceString.substring(1, 4)) // ila  --- last index is not counted in both slice and substring
// console.log(sliceString.substring(-1, 4)) // Lila --- -1 treated as 0 if negative values is given

// console.log(sliceString.slice(4)); // dhar 

// console.log(sliceString.slice(3, 1)); // empty string --- Since starIndex is greater than endIndex
// console.log(sliceString.slice(-1, 3)); // empty string --- negative value treated as 0 when start and end index given
// console.log(sliceString.substring(3, 1)); // il output --- since its swap the index (3, 1) to (1, 3) -- key difference

// console.log(sliceString.slice(-1)) // r --- starts from end. -- key point 
// console.log(sliceString.substring(0, 4)) // Lila
// console.log(sliceString.substring(-1)) // Liladhar --      -1 treated as 0
// console.log(sliceString.slice(2)) // ladhar

/* ------------------------- split --------------  */ 

// const splitText = "Welcome to javascript learning";
// const splitCharacter = "Welcome";

// const checkSplitText = splitText.split(" ");

// console.log(checkSplitText); // [ 'Welcome', 'to', 'javascript', 'learning' ] -- to split string into array of smaller strings

// console.log(splitCharacter.split("")); ['W', 'e', 'l','c', 'o', 'm','e'] -- // split to array string into an array of its individual characters 

