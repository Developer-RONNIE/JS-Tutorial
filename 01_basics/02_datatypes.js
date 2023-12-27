// *********** SOME BASICS OF JAVASCRIPT ***********

// POINT # 1
"user strict"; // treat all JS code as newer version

// alert (3 + 3) //this function is only accessible in the browser, if you try it on code editor it will throw error 


// POINT # 2: CODE readabiliy should be high 
// when should we use ";" it is used to increase the readabiliy of the code
console.log ("Ronnie") 
console.log(3+3)

// POINT # 2 : Some good study reference 
//  Original JS documentation : https://tc39.es/proposal-class-fields/#sec-intro
//  MDN Documentation (by mozilla org) : https://developer.mozilla.org/en-US/docs/Web/JavaScript

// ----------------------------------------------------------------------------------------

// *********** DATATYPES ***********

/* PRIMITIVE DATATYPES */
// 👇

// 1. number => 2 power of 23 (which we get in a memory address)
let age = 23 

// 2. bigint => used incase big numbers such asfacebook, reddit, trading apps 

// 3. string => " "
let name = "Ronnie"

// boolean => true/false 
let IsLoggedIn = True 

// 4. null => standalone value (it is an representation of empty value)
let state = null 
/* USECASE : let's suppose we want the temperature from the satellite and want to showcase it on our website
Incase, there is no data coming from the satellite we will use NULL not 0 
because 0 is a temperature 
*/
// differnce b/w null & undefined 
// null: it's a standalone value 
// undefined: Value is not yet assigned 

// 5. symbols => unique (used incase of react mostly)

// 6. objects 

console.log(typeof "Ronnie")   //output: string
console.log(typeof age)        //output: number
console.log(typeof null)       //output: object
console.log(typeof undefined)  //output: undefined


