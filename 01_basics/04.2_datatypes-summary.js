/* 
 JavaScript is a dynamically typed language, meaning that the interpreter assigns variables a type at runtime based on the variable's value at the time.

 Data is divided into 2 main types (On the basis of memory allocation &  accessibility )

 ----------------------------------------------------------------------------

#### 1. Primitive Datatypes : ####
-> 7 types : String, Number, Boolean, null(empty), undefined, Symbol(used to wrap any special component in frpontend), BigInt(used to store big scientific numbers)
*/

// Exmples of declarations of the primitive datatypes : 

const score = 100;
const scoreValue = 100.3;
// In the above given examples, we learned how to define a number datatype, Nothing special for decimal or float type(everything comes under number)

const isLoggedIn = false; // declaration for boolean
const outsideTemp = null; // declaration for null
let userEmail;            // declaration for undefined

// Declaration of Symbol : 
const id = Symbol('123')
const anotherId = Symbol("123")   
// Verifying that both are not equal 
// console.log ( id == anotherId); // output : false
// console.log ( id === anotherId); // output : false


const bigNumber = 12323123843494598595n // declaration for BigInt

// ----------------------------------------------------------------------------

/*
#### 2. Non-Primitive / Reference Datatypes : ####
-> Array, Objects, Functions
*/
// declaration of array
const villains = ["Madara", "Light", "Sukuna", "Musan"]

// declaration of object
let myObj = {
    name: "Ronnie",
    age: 24,
}

// declaration of function
const myFunction = function(){
    console.log("Hello World");   
}


// function to know the type of any parameter use the following command. I will discuss the special ones 
// console.log (typeof outsideTemp);  //expected output : object 

// console.log (typeof villains);   //expected output : object 
// console.log (typeof myObj);      //expected output : object 
// console.log (typeof myFunction);  //expected output : object function 
/* READ MORE 
links : https://262.ecma-international.org/5.1/ 
https://262.ecma-international.org/5.1/#sec-11.4.3
*/

/*

#### What determines there difference in Primitive and Non-Primitive ? 

1. Call by Value : (Primitive uses  Stack Memory)
-> the original reference of the memory is not shared,
-> the changes made in these are changed in the copy of them.

In call by value method of parameter passing, the values of actual parameters are copied to the function’s formal parameters.

-> There are two copies of parameters stored in different memory locations.
-> One is the original copy and the other is the function copy.
-> Any changes made inside functions are not reflected in the actual parameters of the caller.


2. Call by Reference : (Non-Primitive uses Heap Memory)
-> In call by reference method of parameter passing, the address of the actual parameters is passed to the function as the formal parameters.
-> Both the actual and formal parameters refer to the same locations.
-> Any changes made inside the function are actually reflected in the actual parameters of the caller.
-> depending on how the data is stored in memory & how can you access or retrieve your stored data 

----------------------------------------------------------------------------

to understand "stack" & "heap" better check out the following link : 
https://whimsical.com/stack-and-heap-LThhF2Aeh5kUoJT3fBPNHi
*/

// +++++++ STACK +++++++
// ( primitive data type is stored )
let myDiscordServer = "CodeWithRonnie"
let anothername = myDiscordServer
// console.log(anothername)         //output: CodeWithRonnie
anothername = "BuildWithRonnie"
// console.log(anothername)         //output : BuildWithRonnie
// console.log(myDiscordServer)     //output : CodeWithRonnie
// This is due to stack uses call by Value method 


// +++++++ HEAP +++++++
// ( non-primitive datatype is stored ) 
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
// console.log(userOne.email) // output: user@gmail.com

userTwo.email = "ron@gmail.com" 
// console.log(userTwo.email)  // output: ron@gmail.com
// console.log(userOne.email)  // output: ron@gmail.com

// We can see the actual value changing 

/** 
----------------------------------------------------------------------------

#### Is JavaScript a statically or a dynamically typed language?

-> JavaScript is a dynamically typed language, but TypeScript is a statically typed language.

In dynamically typed languages all type checks are performed in a runtime,
only when your program is executing. 
So this means you can just assign anything you want to the variable and it will work.

let a
a = 0
console.log(a) // output : 0
a = 'Hello world'
console.log(a) // output : Hello world
a = { 'key': 'value' }
console.log(a) // output : {key:'value'}

If we take a look at Typescript, it is a statically typed language,
so all checks will be performed during compile/build run before we actually execute our program.

So the previous code with added variable a type won't work. 
Even from the JavaScript standpoint it is valid (except types) and will run without any errors.


*/