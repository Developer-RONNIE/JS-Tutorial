// console.log(2 > 1);   // greater than
// console.log(2 >= 1);  // greater than equal to
// console.log(2 < 1);   // less than
// console.log(2 == 1);  // equal too eual to 
// console.log(2 != 1);  // not equal 


/***********  COMPLEX COMPARISION **********/

// [comparision of non similar datatypes ( AVOID THESE COMPARISIONS IN YOUR CODE )]

// console.log("02" > 1);   // output : true  (same here )
// console.log("2" > 1);    // output : true  (string converted to number by default)



// console.log(null > 0);   // output : false
// console.log(null == 0);  // output : false 
// console.log(null >= 0);  // output : true 

/* Clearly we can see we do not get predictable results in these cases 

The reason is that an equality check == 
and comparisions >  <   >=   <=  work differently 
Comparisions convert null to a number, treating it as 0
i.e, 
null >= 0 is true 
and 
null > 0 is false 
*/


console.log(undefined > 0);   // output : false
console.log(undefined == 0);  // output : false 
console.log(undefined >= 0);  // output : true 


// "===" Strict Comparision ( will also check the datatype)

console.log("2" == 2);   // output : true 
console.log("2" === 2);  // output : false

