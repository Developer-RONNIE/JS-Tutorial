// +++++++++++++++++++ this +++++++++++++++++++

// let's undersatand with a example (this is an object along with function)
const user = {
    username: "Sudesh",
    price: 999, 

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // this keyword is used to refer to current context 
        console.log(this);
/**
output : here we are talking about block scope 
Sudesh, welcome to website
{
  username: 'Sudesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
Ronnie, welcome to website
{
  username: 'Ronnie',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}

 */


    }
}
// user.welcomeMessage() // output: Sudesh, welcome to website
// user.username = "Ronnie"
// user.welcomeMessage() // output: Ronnie, welcome to website 
//  this was possible due to this keyowrd which deals with the current context 

//console.log(this) // output: {} ,(will be windows in browser cuz now we are talking about global scope)

// -------------------------------------------------------------------
function  app(){
    let username = "Ron"
    // console.log(this) // output : try it yourself 
    // console.log(this.username) //output : undefined 

}
app()
// --------------------------------------------------------------------------


// const user1 = function(){
//     console.log(this) 
//     console.log(this.username)  
// }

const user1 = () => {
    console.log(this) // output: {}
    console.log(this.username)  // output: undefined 
}
user1()


// --------------------------------*** ARROW FUNCTION *** --------------------------------------------------
// explicit return
const addTwo = (num1, num2) => {
    return(num1 + num2)  
}
console.log(addTwo(3,4)) 

// implicit return 
const subTwo = (num1,num2) => (num2 - num1)
console.log(subTwo(3,4))

//implicit return of object 
const hub = () => ({username: "Ron"})
console.log(hub())