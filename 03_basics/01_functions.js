//  ++++++++++++++++++++++++++++ FUNCTIONS ++++++++++++++++++++++++++++

/*
 A JavaScript function is a block of code designed to perform a particular task.
 A JavaScript function is executed when "something" invokes it (calls it).

 In Simple Understanding- 
 a bunch of codes are bundles as a package.
 and this package can be called anywhere in our program to perform a specific task 
 Additional: 
 Basically, this package is not called but a copy of it is called 
 

 Let's see an example : 
 Suppose we want to perform all these below codes 5 times in our program 
 
 console.log ("R")
 console.log ("O")
 console.log ("N")
 console.log ("N")
 console.log ("I")
 console.log ("E")

 let's see how we can group these codes into a function and call them all by using one function 
*/

 function sayMyName(){
    console.log ("R")
    console.log ("O")
    console.log ("N")
    console.log ("N")
    console.log ("I")
    console.log ("E")
 }

/**
 Let's understand the anatomy of function:

  function function_Name(){
    scope
  }

 Let's break the function anatomy more : 
 -> first we use "function"  keyword 
 -> then we declare the name of the function in above example it is "sayMyName"
 -> then we use parenthesis ()
 -> followed by braces {}
 -> within the {} we declare the scope of the function which is 
 console.log ("R")
 console.log ("O")
 console.log ("N")
 console.log ("N")
 console.log ("I")
 console.log ("E")
 in the above example 

 */


// ** Refernce & Execution of function **
sayMyName // this is the reference of the function from the above example (will be used in react & Dom Manipulation will be caovered later )

sayMyName() // this is the execution of the function 
// -----------------------------------------------------------------------------------------------

// Let's see some real world problems in functions 
// Case Study 1: 
// We will create a function which will add 2 numbers & print the sum of it 

function addTwoNumbers(num1, num2){ // the values passed within () which is num1, num2 are called the parameters of the function addTwoNumbers
    console.log(num1 + num2)
}
 addTwoNumbers(3,4) // here the values passed within () while execution of the function, which is 3 & 4 here are called arguments 

// ** Some complexities in function **
// what if we try to pass a string "" in our arguments will it add ? 
function addTwoNum ( num1, num2){
    num3 = (num1 + num2)
    console.log(num3)
}
// addTwoNum (3, "4")  // output : 34 
// console.log(typeof(num3)) // output : string 

// Similarly, what if we add other characters such as "a" / NULL 
function addTwoNum ( num1, num2){
    num3 = (num1 + num2)
    console.log(num3)
}
// addTwoNum( 3, "a") // output: 3a
// console.log(typeof(num3)) // output: string 

function addTwoNum ( num1, num2){
    num3 = (num1 + num2)
    console.log(num3)
}
// addTwoNum( 3, null) // output: 3
// console.log(typeof(num3)) // output: number 

// **BONUS-  code optimization ** We can write the above function example i.e, addtwoNumber in a more optimized manner 
function addTwoNumber(num1, num2){ 
    return(num1 + num2)
    console.log("RON") // Remember any code written after return statement won't be printed 
}
// console.log(addTwoNumber(5,4))

// -----------------------------------------------------------------------------------------------

// Another example : Case Study 2 
function loginUserMessage (username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Ronnie")) // output: Ronnie just logged in
// console.log(loginUserMessage("")) // output:   just logged in (when an empty string is passed)

// console.log(loginUserMessage()) // output: undefined just logged in (when no value is passed )
// How to overcome this situation , Let's see 

function loginUserMessage (username){
    // we use an if statement, if-statement will be covered soon 
    if(username === undefined ){  // we can also use !username instead of username === undefined 
        console.log("Please fill the username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage()) // output: Please fill the username-undefined

// ** What if we already put some value into usernme so that it is never undefined, let's see how to do that 
function loginUserMessage (username = "Raj" ){
    return `${username} just logged in`
}
// console.log(loginUserMessage()) // output: Raj (when no value is passed)
// console.log(loginUserMessage("Ronnie")) //output : Ronnie (when value is passed & the default value will be override)