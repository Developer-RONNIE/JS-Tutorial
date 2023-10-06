///console.log("Hello World");

const accountID = 344456
let accountEmail = "ronnieworkspace@gmail.com"
var accountPassword = "Ron123"
accountCity = "Jamshedpur"
let accountState;

console.table ([accountID, accountEmail, accountPassword, accountCity, accountState ])



/**
 Prefer not to use var 
 because of the issue in block scope & functional scope 
 * / 


/**
1. A handy method to call all our data in table structure
rather than calling them one by one

accountEmail = "alapan.banerjeee@gmail.com"
accountPassword = "Dev456"
accountCity = "Bhuwaneswar"

console.table ([accountID, accountEmail, accountPassword, accountCity])



 2. another method to print all our variables in a table format 
console.table([
    {
      accountID: accountID,
      accountEmail: accountEmail,
      accountPassword: accountPassword,
      accountCity: accountCity
    }
  ]); 

*/





/* Changing a constant value is not allowed 

 accountID = 2 
console.log(accountID);  

*/