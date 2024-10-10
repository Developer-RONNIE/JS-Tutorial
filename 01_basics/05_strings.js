const name = "Ronnie"
const repoCount = 50

// ***** String Concatenation *****
// old method of practice and not recommended 
// console.log (name + repoCount + " Value");   

//  In modern days we use ` ` (back ticks) which uses string interpolation 
//  It makes place holders for variables and can be injected directly into a string.

// modern method
// console.log (`Hello my name is ${name} and my repo count is ${repoCount}`);  
// additional benefit : we can add methods to these strings on the go. example: .ToUpperCase etc.



//  How to declare string 
const gameName = new String('ronnie-Workspace') 
// we used "new" keyword which uses objects of javaScripts & we named it inside of the constructors 

// accessing strings as key-value pair & other properties : 
 console.log(gameName[0]); // output: r
 console.log (gameName.toUpperCase()); // original value won't change, output: RONNIE-WORKSPACE 
 console.log (gameName.length ); // output: 15
 console.log (gameName.__proto__ ); // output: String
 console.log (gameName.charAt(4)); // output: n
 console.log (gameName.indexOf('k')); // output: 8


// ********* Substring, Slicing, Trim, Replace of a String :  *********

// ** Substring Method **
const newString = gameName.substring(0, 5) // 0 is our start number & end number 
// console.log (newString); // expected output: ronni 
// it won't include the end number

// ** Slicing Method **
const anotherString = gameName.slice(0, 8)
// console.log(anotherString); // output : ronnie-

const anotherString1 = gameName.slice(-10, 4)
console.log(anotherString1);

// ** Trim Method ** 
const newStringOne = "   ronnnie@gmail.com   "
console.log(newStringOne); // output :   ronnnie@gmail.com
console.log(newStringOne.trim()); // output : ronnie@gmail.com

// ** Replace Method ** 
const url = "https://ronnie.com/ronnie%20javascript"
console.log(url.replace('%20', '-')); // replace %20 by -

// ** Includes Method ** 
console.log(url.includes('ronnie'));
console.log(url.includes('rock'));  // output: false 

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