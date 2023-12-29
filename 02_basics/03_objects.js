/*
there are 2 ways to declare objects in JS  as
1. literals 
2. constructors 

singleton : whenever we create an object with constructors the object created is called singleton
NOTE: if we create objects in any other way it creates multiple instances of that object

*/ 

// 2. Constructor method
// Object.create // singleton will be created would be covered later 
// Object.create

// 1. Object Literals method 

const mySym = Symbol ("key1") // declaring a symbol and printing it (interview question)***

const JsUser = {
    name: "Ronnie", //is saved as a string
    "full name" : "Ronnie Dev", 
    [mySym]: "mykey1", // declaring the symbol as keys (interview question)***
    age: 23,
    location: "Jamshedpur",
    "email" : "ronnie@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}
/*
NOTE: 
-as we know in arrays there is a concept of key value pairs where keys are predefined 
but inobjects we can define our own keys 
(in the above given example name, full name, age, location etc are keys of the objects)
- Also, keys are treated as string type. 
*/

// #### Accessing objects values ####
console.log(JsUser.email) // # Method 1 : use . method 
console.log(JsUser["email"]) // # Method 2: Incase the keys are written in full string format we use ["key_name"]
console.log(JsUser["full name"]) // example : cannot be called using . method


// #### Declaring a symbol and printing it (interview question)***  ####
console.log(JsUser.mySym) //wrong practise of printing symbol, why?
console.log(typeof JsUser.mySym) // output: string (as we can clearly see the datatype is not defined or may be string but we wanted to print symbol 
console.log(JsUser[mySym]) // printing the symbol (correct practise)

// #### changing objects value ####
JsUser.email = "ronnie@chatgpt.com"
Object.freeze(JsUser) //freeze method
JsUser.email = "ronnie@microsoft.com"
/* NOTE :
 Object on which to lock the attributes.
 Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
*/
console.log(JsUser);
/*output : 
{
  name: 'Ronnie',
  'full name': 'Ronnie Dev',
  age: 23,
  location: 'Jamshedpur',
  email: 'ronnie@chatgpt.com',                 //due to freeze method there is no changes
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'                    //symbol
}
*/ 


// #### Adding a function to our objects ####
JsUser.greeting = function(){   // make sure unfreeze the object above
    console.log("Hello JS User");
}
console.log(JsUser.greeting);   // output: [Function (anonymous)] (this is a function return back which means function is not executed but we got an function reference )
console.log(JsUser.greeting()); // output: Hello JS User

// adding another function but we would be referencing to the name 
JsUser.greetingTwo = function(){   // make sure unfreeze the object
    console.log(`Hello JS User, ${this.name}`); // output : Hello JS User, Ronnie
}
console.log(JsUser.greetingTwo()); //output : Hello JS User, Ronnie