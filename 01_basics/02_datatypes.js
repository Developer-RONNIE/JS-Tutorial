// *********** SOME BASICS OF JAVASCRIPT ***********

// POINT # 1
"user strict"; // treat all JS code as newer version

// alert (3 + 3) //this function is only accessible in the browser, if you try it on code editor it will throw error 


// POINT # 2: CODE readabiliy should be high 
// when should we use ";" it is used to increase the readabiliy of the code
console.log ("Ronnie") 
console.log(3+3)

// POINT # 2 : Some good study reference which set the standards of JS 
//  Original JS documentation : https://tc39.es/proposal-class-fields/#sec-intro
//  MDN Documentation (by mozilla org) : https://developer.mozilla.org/en-US/docs/Web/JavaScript

// ----------------------------------------------------------------------------------------

// *********** DATATYPES ***********

/* PRIMITIVE DATATYPES */
// 👇

// 1. number => 2 to the power of 23 (which we get in a memory address)
let age = 23 

// 2. bigint => used incase we are dealing with big numbers, used by these applications facebook, reddit, trading apps etc.

// 3. string => " "
let name = "Ronnie"

// 4. boolean => true/false 
let IsLoggedIn = True 

// 5. null => standalone value (it is an representation of empty value)
let state = null 
/* USECASE : let's suppose we want the temperature from the server and want to showcase it on our website
Incase, there is no data coming from the server we will use NULL not 0 
because 0 is a temperature 
*/

// 6. undefined => when user didn't define the value of the variable 


// *** differnce b/w null & undefined ***
// null: it's a standalone value 
// undefined: Value is not yet assigned 

// 7. symbols => unique (used incase of react mostly)


/* NON- PRIMITIVE DATATYPES */
// 👇

// 1. objects 
// 2. Arrays 
// 3. Functions 

// We will cover them later on this series. 

console.log(typeof "Ronnie")   //output: string
console.log(typeof age)        //output: number
console.log(typeof null)       //output: object
console.log(typeof undefined)  //output: undefined


