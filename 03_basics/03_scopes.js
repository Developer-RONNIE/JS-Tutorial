/**  We know these 3 keywords let, const & var 
 If we use {} with any function it becomes the scope of that program 
 Anything written within that scope is called block scope 
 and anything outside that scope is global scope 
 Read mmore about scopes : LINK :- https://www.w3schools.com/js/js_scope.asp
*/

// let's try to understand with the help of example
 
 let a = 10
 const b = 20 
 var c = 30

 // So these are our global scope as they aren't within any { }
 
if (true){
    // these are the functional/ block scope, Since it isn't called or returned , while running the prgram it should throw errors but we can clearly see it prints c value i.e, we don't use var (as discusses in the first 01_variables.js)
    let a = 10
    const b = 20 
    // var c = 30
}
// console.log(a)


// ---------------------------------------------------------------------------------------------------------

// understanding Block Scope & Global Scope with example 


// ** global scope 
let x = 300 
const y = 500 
if (true){
    // ** bloack scope 
    let x = 100
    const y = 10
    console.log ("INNER: ", x)
    console.log ("INNER: ", y)
}
console.log("OUTER: ", x)
console.log("OUTER: ", y)