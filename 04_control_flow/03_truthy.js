// +++++++++++++++++ Truthy - Falsy +++++++++++++++++

// Some values or results are assumed to be trur or assumed to be false 
// Let's try an example: Here we are asinging an email & applying conditionals to it without any comparision 


// const userEmail = "ronnie@ai.com" //true 
// const userEmail = "" //false 
const userEmail = [] //true

if (userEmail){
    console.log("Got User email")
}else {
    console.log("Don't have user email")
}

// ----------------------------------------------------------------------------

// Falsy Values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy Values : 'false', "0", " ", [], {}, function(){}

// ----------------------------------------------------------------------------

// Checking an ARRAY if it is Empty or not 
const username = []

if (username.length === 0){   // notice we are using .length property 
    console.log("Array is Empty");
}

// Checking an Object if it is Empty or not 
const emptyObj = {}

if (Object.keys (emptyObj).length === 0){
// Notice : here, Object.keys (emptyObj) is used to convert the object into an Array & use Object for refering to object type. Also, after conversion into array we use the same process by using .length 
    console.log("Object is Empty");
    
}

// Bonus : comaprision Operator 
//  all are true 
false == 0 
false == ''
0 == '' 
// ------------------------------------------------------------------------------------

// *** Nullish Coalescing Operator; (??): nuul undefined ***

// used for safety check - mostly used for handling databases from firebase/ appwrite etc. 

let val1; 
// val1 = 5 ?? 10 // output: 5
// val1 = null ?? 10 // output 10 
// val1 = undefined ?? 15 // output : 15 
val1 = null ?? 10 ?? 20 // output: 10 

console.log(val1)

// ------------------------------------------------------------------------------------

// *** Terniary Operator ***

// condition ? true:false 
const teaPrice = 100 
teaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")