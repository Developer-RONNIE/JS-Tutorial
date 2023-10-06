/* Conversion of DATATYPES  */

let score = 33
let score1 = "44"

// console.log(typeof score);          //output: number
// console.log(typeof(score1));        //output: string

let valueInNumber = Number(score1)
// console.log(typeof valueInNumber); //output:number

let score2 = "33abc"
let valueInNumber1 = Number(score2)
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1);         //output:NaN (Not a number)

let score3 = null
let valueInNumber2 = Number(score3)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2);        //output:0

let score4 = undefined 
let valueInNumber3 = Number(score4)
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3);        //output:NaN (Not a number)


//for Boolean true => output: 1
//for Boolean false => output: 0
//for string => output: NaN



/* COMPLEX CONVERSIONS */

// Boolean Conversion
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);  



let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.log(booleanIsLoggedIn1); 


let isLoggedIn2 = "Ron"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2); 

// observation :
// 1 => true; 0 => false
// "" => false
// "Ron" => true 



// String Conversion 

let someNumber = 55

let stringNumber = String(someNumber)
console.log(stringNumber); 
console.log(typeof stringNumber);  
