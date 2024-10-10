/* *************** Conversion of DATATYPES***************  */

//Sometimes we don't know the value coming from the frontend is in which datatype. (might be a string/object)
let score = 33
let score1 = "44"

// console.log(typeof score);          //output: number
// as a method
// console.log(typeof(score1));        //output: string

// Let's make sure that the operation is performed on Number Datatype
let valueInNumber = Number(score1)  
// console.log(typeof valueInNumber); //output:number

// What if the the input is a impure Number 
let score2 = "33abc"
let valueInNumber1 = Number(score2)
// console.log(typeof valueInNumber1);  // output: number
// console.log(valueInNumber1);         //output:NaN (Not a number)

// What if the the input is a NULL type, will it convert : Answer is Yes 
let score3 = null
let valueInNumber2 = Number(score3)
// console.log(typeof valueInNumber2); //output: number
// console.log(valueInNumber2);        //output:0

// What if the the input is a undefined type will it convert : Answer is Yes, but the value will be NaN
let score4 = undefined 
let valueInNumber3 = Number(score4)
// console.log(typeof valueInNumber3); //output: number
// console.log(valueInNumber3);        //output:NaN (Not a number)


//for Boolean true => output: 1
//for Boolean false => output: 0
//for string => output: NaN



/* *************** COMPLEX CONVERSIONS *************** */

// CASE 1: Number to Boolean Conversion
let isLoggedIn = 1
//console.log(typeof isLoggedIn) : output number

let booleanIsLoggedIn = Boolean(isLoggedIn) 
// console.log(typeof booleanIsLoggedIn) : output boolean
// console.log(booleanIsLoggedIn);  //output:true

// CASE 2: Empty String to Boolean Conversion
let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.log(booleanIsLoggedIn1);  //output: false 


// CASE 3: String to Boolean Conversion
let isLoggedIn2 = "Ron"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn2); //output: true 

// observation :
// 1 => true; 0 => false
// "" => false
// "Ron" => true 



//// CASE 4: Number to String Conversion 
let someNumber = 55

let stringNumber = String(someNumber)
// console.log(stringNumber);         //output: 55
// console.log(typeof stringNumber);  //output: String 



// ********************* OPERATIONS ********************* 

let value = 3 
let negValue = -value
// console.log(negValue);               //output: -3
// console.log(typeof negValue);        //output: number


// console.log (2-2);   // subtraction
// console.log (2**2);  // power 
// console.log (2+2);   // addition
// console.log (2/2);   // division
// console.log (2%3);   //remainder

let str1 = "Hello "
let str2 = " Ronnie"
let str3 = (str1 + str2)
// console.log(str3)


// **** PRECEDENCE IN OPERATORS ****
// console.log("1" + 2);                   //output : 12  //datatype: string
// console.log(1 + "2");                   //output : 12  //datatype: string
// console.log("1" + 2 + 2);               //output : 122 //datatype: string
// console.log(1 + 2 + "2");               //output : 32  //datatype: string
// Why does this happens ? The below given link shows the standard rules set for Operation & Convertion 
/* READ MORE 
 https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion  */


// Readability / describes which operation to perform in order 
// console.log((3 + 4) * 5 % 3);
/*ANSWER: (PEMDAS) to ensure accurate results:

- Parentheses
- Exponents
- Multiplication and Division (from left to right)
- Addition and Subtraction (from left to right) */


// **** Implicit Type Conversion in JavaScript ****
// console.log(+true);  //output : 1
// console.log(+"");    //output : 0



// **** POSTFIX / PREFIX ****
let gameCounter = 100;
gameCounter++;       //postfix operator
++gameCounter;       //prefix operator 
// console.log(gameCounter);

//  READ MORE:
// LINK : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment




