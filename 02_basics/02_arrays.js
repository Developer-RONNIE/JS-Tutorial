const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

//  *** push Method ***
marvel_heros.push(dc_heros)
console.log(marvel_heros);  //output: [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]

console.log(marvel_heros[3]);  //output: [ 'Superman', 'Batman', 'Flash' ]
console.log(marvel_heros[3][1]); // to access a particular element within the dc_hero's array

/* conclusion :
array can store another array within itself as data 
 the 4th element in the marvel_hero's array is another element which is dc_hero's array in our case. 
*/



// *** concat Method ***
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);  //output : [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

/* conclusion : 
concat method adds us 2 arrays into one single array 
also it requires a new array to be created to store the elements of 2 different arrays 
*/ 



// *** spread operator ***
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros) // output: [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

/* conclusion : 
this operator is similar to concat method 
but we can add more than 2 arrays into it by adding ...array_name
*/




// *** .flat Method ***
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);  
/*  output : 
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
Conclusion : 
Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
*/


// *** isArray Method ***
console.log(Array.isArray("Hitesh")) // output : false 
//  conclusion : Checks if the value is an array or not returns bool



// *** from Method  - Helps in conversion into array *** 
console.log(Array.from("Ronnie"))   // output: [ 'R', 'o', 'n', 'n', 'i', 'e' ]
console.log(Array.from({name: "Ronnie"})) // output : [] (empty array)
// conclusion : 
// 1. Clealry, we can see the string "Ronnie" is converted into an array, 2. Creates an array from an array-like object.



// *** of Method ***
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // output : [ 100, 200, 300 ]
// conclusion : Converts a set of elements to include in the new array object.