// Immediately Invoked Function Expression (IIFE)

/**
 Starts executing functions within a given file. 

 Might be required for a varous range of purpose 
 1. for running database connection within a file asap the app starts 
 2. so that the global scope is not polluted & we can make a separate scope for IIFE 

 Inorder to create an IIFE we wrap the entire function within () for defining the function and add another () at the end for executing the function 
 SYNTAX : 
 (function func_name(){
 })()

 let's see via example 
 */


//  normal function 
function DB(){
    console.log("DB Connected");
}
DB();
 
// IIFE / Named IIFE
(function database(){
    console.log("DB Connected IIFE");
})();

// IIFE with arrow function / Unnamed IIFFE 
( ()=> {
    console.log("DB Connected IIFE using arrow key")
})()