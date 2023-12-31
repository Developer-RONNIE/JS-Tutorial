//  ++++++++++++++++++++ Nested Scopes ++++++++++++++++++++

// The objective is to make you understand the complexities & how nested scopes/ closure works 
function one(){
    const username = "Ronnie" 

    function two(){ 
        const website = "github"
        console.log(username) // we are trying to acces the "variable of parent function" within a child function which is possible
    }
    // console.log(websites) // here we are trying to access the "variable of a child function" outside it's scope so it will throw an error & hence our code won't work 

    two() //we are calling a child function within the parent function, but it won't print anything yet(cuz it's a child function within our parent function one)
}
one() // output: Ronnie, because it's calling a sub function within itself which is two() which prints the username 
// this is how we should understand the level of scopping / nested scope also for loops 


// *** scope with loops ***

if (true){
    const username = "Rohit"
    if (username === "Rohit"){
        const website = " github"
        console.log(username + website)
    }
}
//output: Rohit github 

// ++++++++++++++++++++ Hoisting ++++++++++++++++++++

// we will declare 2 functions in different ways 

//  ** normal declaration 

console.log( addone(5)) // output: 6 
// In normal declaration we can access the function beforehand too 

function addone (num){
    return (num +1)
}

// ** declaration as an epression 

// console.log(addTwo(num)) // output: error
// If we try to call the function before hand then we will get an error int his case 
 const addTwo = function addTwo(num){  //this entire thing is called an expression, where we have hold the function within a variable aslo called hoisting 
    return(num+2)
 }