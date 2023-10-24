const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Superman", "Batman", "Flash"]

//  *** push Method ***
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  //output: [ 'Ironman', 'Thor', 'Spiderman', [ 'Superman', 'Batman', 'Flash' ] ]
// console.log(marvel_heros[3]);  //output: [ 'Superman', 'Batman', 'Flash' ]
// console.log(marvel_heros[3][1]); // to access a particular element within the dc_hero's array
/* conclusion :
array can store another array within itself as data 
 the 4th element in the marvel_hero's array is another element which is th dc_hero's array
*/



// *** concat Method ***
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
/* conclusion : 
concat method adds us 2 arrays elements into one single array 
also it requires a new array to be created store the elements of 2 different arrays 
*/ 



// *** spread operator ***
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros)
/* conclusion : 
this operator is similar to concat method 
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
//  conclusion : will let you know if the value is an array or  not returns bool

// *** from Method *** 
console.log(Array.from("Ronnie"))   // output: []
console.log(Array.from({name: "Ronnie"})) // output : [] (empty array)
// conclusion : Creates an array from an array-like object.

// *** of Method ***
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// conclusion : A set of elements to include in the new array object.