/* 

ARRAYS - 
- The Array object, as with arrays in other programming langugaes, 
 enables storing a collection of multiple items under a single variable name. 
 and has members for performing common array operations
- always written in square brackets []
- arrays in JS are resizable & mix of certain datatypes 
- JS arrays are not associative arrays so, 
array elements cannot be accessed using arbitary strings as indexes
- JS arrays are zero-based-indexed
- JS array-copy operations create shallow copies rather than deep copies 
** Shallow Copies - A shallow copy of an object is a copy whose properties share the same reference point 
** Deep Copies - A shallow copy of an object is a copy whose properties do not share the same reference point 

*/

// NOTE : () --> parenthesis, [] --> brackets, {} --> braces


// How to declare arrays 
const myArr = [ 0, 1, 2, 3, 4, 5 ]  // values present within an array are called "Elements" can be mixed array too 
const myHeros = ["Gojo Saturo", "Rengoku", "Itachi"]
const myArr2 = new Array(2,3,4,5,6)
// array indexing 
console.log(myArr[0]);
console.log(myHeros[0]);
console.log(myHeros[1]);
console.log(myArr2[3]);


// ******* array methods  ************

// myArr.push(6)   //adds new elements at the end of the array
// myArr.push(7)
// myArr.pop()     //removes the last element from the array

// myArr.unshift(9)   //adds new element at the beginning of the array 
// myArr.shift()      //removes the first element from the array

// *Some questionary methods 
// console.log(myArr.includes(9));   //output: false 
// console.log(myArr.indexOf(3));    //output: 3
// console.log(myArr.indexOf(-19));  //output: -1

// const newArr = myArr.join()   //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);           // output: [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);          // output: 0,1,2,3,4,5
// console.log(typeof (newArr)); // *output: string




/* Slice, Splice

Slice :
The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.

Splice : 
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.
*/
console.log("A ", myArr);  // output: A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)
console.log(myn1);         // output: [ 1, 2 ]
console.log("B ", myArr);  // output: B  [ 0, 1, 2, 3, 4, 5 ]
//conclusion : slice method doesn't manipulates the original array 

const myn2 = myArr.splice(1,3)
console.log(myn2);         // output: [ 1, 2, 3 ]
console.log("C ", myArr);  // output: C  [ 0, 4, 5 ]
//conclusion : slice method does manipulates the original array 


