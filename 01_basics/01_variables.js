/* We will learn how we store data in optimised way in this section 
However , this should be done using database 
But for the time being we need to make our foundation strong with data & datatypes, which we will be learning next  
*/


// *** Declaration of Variable *** 
// Supose we are building an e-commerce we need to store some important data of the user 
const accountID = 344456
let accountEmail = "ronnieworkspace@gmail.com"
var accountPassword = "Ron123"
accountCity = "Jamshedpur"
// let accountState; 

console.table ([accountID, accountEmail, accountPassword, accountCity, accountState ])

// Keyword - like  const, let, var asign some memory to the variable we declare

/** 
- We use "const" keyword to let our compiler know that this specific data is a constant and must not me rendered with.
accountID = 22 // Not Allowed 

- We use "let" keyword when our data can be altered but for thr time being assign the current data with some memory space

- Assign the current data with some memory space, But, prefer not to use var because of the issue in block scope & functional scope {} 

- Differnce b/w "let" & "var" : let don't have any scope problem

- In JS we can serve memory for a variable without declaring the type before it. As we can see in the accountCity 
- But it is now recommended in production level. 
 */


//  Let try changing the data in each 
//  accountID = 2  (Not Allowed)
accountEmail = "abc@gmail.com";
accountPassword = "XYZ321";
accountCity = "Patna";


/**
1. A handy method to call all our data in table structure
rather than calling them one by one
*/
console.table ([accountID, accountEmail, accountPassword, accountCity])



/**
 2. another method to print all our variables in a table format 
 */
console.table([
    {
      accountID: accountID,
      accountEmail: accountEmail,
      accountPassword: accountPassword,
      accountCity: accountCity
    }
  ]); 

// what if we want to add another variable in this table or datasheet without value 
//  let supposed accountState (initialised at the top, Please Check & uncomment it for better use)
console.table ([accountID, accountEmail, accountPassword, accountCity, accountState])
// Expected output : Undefined 
