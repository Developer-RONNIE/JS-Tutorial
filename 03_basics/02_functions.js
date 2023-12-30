//  ++++++++++++++++++++++++++++ OBJECTS USED IN FUNCTIONS ++++++++++++++++++++++++++++

//  How to call objects in function 

// *** Method 1: declaring object first 
const user = {
    username : "Ronnie",
    price : 199
}

function handleObject(anyObject){   // anyObject is the parameter 
    console.log(`Username is ${anyObject.username} & price is ${anyObject.price}`); // you can access properties of anyObject by using "."
}
// handleObject(user) // output: Username is Ronnie & price is 199
// Here, object = user, is used as argument in the function = handleObject

//  If the variable name is changed to prices then the output will become : Username is Ronnie & price is undefined 



// *** Method 2: declaring objects within function 
handleObject({
    username :"Raj",
    price: 150             //output : Username is Raj & price is 150
})

//  ++++++++++++++++++++++++++++ ARRAY USED IN FUNCTIONS ++++++++++++++++++++++++++++
const myNewArray = [ 200, 300, 400, 500, 2000] // array declared 

function returnSecondValue(getArray){
    return getArray[1]  
}

// console.log(returnSecondValue(myNewArray)) //output: 300
console.log(returnSecondValue([123,456,789]))  // output : 456
//  can be accessed similarly like objects in both methods 