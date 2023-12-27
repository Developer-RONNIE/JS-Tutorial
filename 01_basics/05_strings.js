const name = "Ronnie"
const repoCount = 50

// ***** String Concatenation *****
// console.log (name + repoCount + " Value");   // old method of practice and not recommended 
//  In modern days we use ` ` (back ticks) which uses string interpolation 
//  It makes place holders for whichever variables and can be injected directly 

// console.log (`Hello my name is ${name} and my repo count is ${repoCount}`); 
// additional benefit : we can add methods to these strings on the go. example: .ToUpperCase etc.



//  How to declare string 
const gameName = new String('ronnie-Workspace') 
// we used "new" keyword which uses objects of javaScripts & we named it inside of the constructors 

// accessing any keys of key value pair & other properties : 
 console.log(gameName[0]);
 console.log (gameName.toUpperCase());
 console.log (gameName.length );
 console.log (gameName.__proto__ );
 console.log (gameName.charAt(4));
 console.log (gameName.indexOf('k')); 


// ********* Substring, Slicing, Trim, Replace of a String :  *********

// ** Substring Method **
const newString = gameName.substring(0, 5) // 0 is our start number & end number 
console.log (newString); // expected output: ronni 
// it won't include the end number

// ** Slicing Method **
const anotherString = gameName.slice(0, 8)
console.log(anotherString);

const anotherString1 = gameName.slice(-10, 4)
console.log(anotherString1);

// ** Trim Method ** 
const newStringOne = "   ronnnie@gmail.com   "
console.log(newStringOne);
console.log(newStringOne.trim());

// ** Replace Method ** 
const url = "https://ronnie.com/ronnie%20javascript"
console.log(url.replace('%20', '-')); // replace %20 by -

// ** Includes Method ** 
console.log(url.includes('ronnie'));
console.log(url.includes('rock'));  // expected output: false 

// ** Split Method **  ( split containers seperator & limit)
console.log(gameName.split('-')); //expected output is an array : ['ronnie', 'Workspace']


/**  
 * 
 * 
#######################################################################################

 In order to master string methods 
 -> go to inspect section of the browser 
 -> go to console  section 
 -> const gameName = new String('ronnie-Workspace') 
 -> check the gameName it will return string 
 -> check the key value pairs & different methods available for strings 
*/