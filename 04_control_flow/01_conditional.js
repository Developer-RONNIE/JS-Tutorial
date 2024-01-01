// +++++++++++++++++++++++++++++ Control Flow of JS +++++++++++++++++++++++++++++

/**
 We will understand the contorl flow of JS & how it is used for development process
 *till now we have seen al the codes are executing but it shouldn't work that way. A code must be executed on the basis of conditions* 
 
 Let's undestand with examples 
 */

//  if (conditional)
// const isUserLoggedIn = True 

// if (isUserLoggedIn){
//     //scope 
// }

// Comparision Operators : <,>,<=,>=, ==, !=, ==(check if they are equal) , ===(strict equal, also checks the type)


// +++++++++++++++++++ IF-ELSE +++++++++++++++++++

const temperature = 41

if (temperature < 50){
    console.log(`Temperature is ${temperature}`)
} 
else{
    console.log(`Temperature is high, ${temperature}`)
}
console.log("Program Executed")
//output : Temperature is 41
// Program Executed


//  ##### Short hand notation 
const balance = 1000

// if (balance>500) console.log("available for loan"); 
// this is called short hand notation, Notice we didn't use any {} & used a ; at the end. So does this condition doesn't have any scope ? ANSWER: is yes it does. Generally it is used for single line but we can also use it for multiline as shown below, However it is not recommended. 
if (balance>500) console.log("available for loan"),
console.log("Available for loan: 500");

// +++++++++++++++++++ NESTING + ELSE IF +++++++++++++++++++
const bal = 2000 

if (bal < 500 ){
    console.log(`Not eligible for loan. Current balance: ${bal}`)
} 
else if (bal < 1000){
    console.log(`Not eligible for loan. Current balance: ${bal}`)
}
else if (bal < 1500){
    console.log(`Not eligible for loan. Current balance: ${bal}`)
}
else if  (bal >= 1000){
    console.log("Congratulations You are eligible for loan")
}

// +++++++++++++++++++ && + || +++++++++++++++++++

// Supppose we want to buy a course and we reuire 2 conditions to be true the user to be logged in and the user must have debit card, In this case of checking 2 or more than 2 conditions we use "AND operator" i.e, &&
const UserLoggedIn = true
const debitCard = true 

if ( UserLoggedIn && debitCard){ // remeber we can add more conditions to it by adding more && operators but incase you want all of them to be true 
    console.log("Allowed for purchase")
}


// Similarly if we want any one or any few of the conditions to be true then we use " OR Operator " i.e, || 

const loggedInFromGoogle = false 
const loggedInFromEmail = true 
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allowed to Login")
}