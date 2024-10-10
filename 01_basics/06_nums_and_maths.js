const score = 400; 
// console.log(score);

const balance = new Number (100)
// console.log(balance);  //expected output: Number: 100

/* 
NOTE: If we try it within browser's console we can see some methods to the number 
*/


// **** METHODS for NUMBERS ****

// console.log(balance.toString().length); //output : 3
// converts Number into string & now we can access methods of string also 

// console.log(balance.toFixed(2)); //expected output: 100.00

const otherNumber = 23.896
const otherNumberOne = 123.896
const otherNumberTwo = 1123.896

// console.log(otherNumber.toPrecision(3));           // output = 23.9
// console.log(otherNumberOne.toPrecision(3));        // output = 124
// console.log(otherNumberTwo.toPrecision(3));        // output = 1.12e+3
// 
 const hundreds = 1000000
// console.log (hundreds.toLocaleString());   // according to US numbersystem 
// console.log (hundreds.toLocaleString('en-IN'));   // according to Indian numbersystem 

/** 
 If we go to browser's console and look for Number datatype, then we get some attached properties with it 
 as we use dot after Number i.e, Number. 
 we get a lot of properties which are as follows 
 isSafeInteger
 length
 MAX_SAFE_INTEGER 
 MIN_SAFE_INTEGER
 MAX_VALUE 
 MIN_VALUE
 isFinite
 EPSILON
 */



//  ++++++++++++++++++++ MATHS ++++++++++++++++++++

console.log(Math); // it is an object //output : [object Math]
console.log(Math.abs(-4));    // absolute = converts negative integer to positive only. //output : 4
console.log(Math.round(4.6)); // round = rounds of the decimal digit // output : 5 
console.log(Math.ceil(4.2));  // ceil = rounds of the decimal digit to upper limit // output : 5
console.log(Math.floor(4.9)); // floor = rounds of the decimal digit to lower limit // output : 4
console.log(Math.min(4, 3, 6, 8)); //min = selects the minimum value // output : 3
console.log(Math.max(4, 3, 6, 8)); //max = selects the maximum value // output : 8



// complex logic thinking with random function 

console.log(Math.random());          //random = generates random value range between 0-1
console.log(Math.random()*10);       // values shifted to left before decimal value 
console.log(Math.floor(Math.random()*10) + 1);  // sometimes we get random value 0.1, while using floor it will be converted into 0, to end the scope of zero we add +1 , so that our number is never less than 1, output can be  something like 1.344849 etc.

// suppose we need values ranging in between 10 and 20 i.e, we want to use & max both 
const min = 10
const max = 20 

console.log (Math.floor(Math.random() * (max - min + 1)) + min ); //output : 15
/*
Here, 
Math.random() --> used for random value generation 
multiplied with (max - min + 1) to where max - min to get the range and +1 to avoid zero cases 
lastly, +min to get the minimum value 
Math.Floor to round off the value 

Play a little more with random function for better understanding 
*/






