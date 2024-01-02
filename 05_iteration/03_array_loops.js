// ++++++++++++++++++++++++++++ ARRAY SPECIFIC LOOPS ++++++++++++++++++++++++++++

// Arrays & Objects are very powerful in JS 

// We have some common scenarios in JS, Let's dscuss them 
["", "", ""]
[{}, {}, {}] // we have to use any particular element from each object while iterating through them 

// *** for of ***
// Syntax : 
// for (const iterator of object) {
    // (here object in the above syntax is not the "Object" of javascript but the particular thing on which we want our loop to iterate through) 
// }
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`${greet}`);
}
// ------------------------------------------------------------------------------

// Map 
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map ()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('JPN', "Japan")
// map.set('IN', "India") won't work cuz maps work on unique keys 
// map.set('IN', "USA")
// console.log(map);

// applying forof on map
for (const [key,value] of map) {
    // console.log(key, ':-', value);
}

// ------------------------------------------------------------------------------
// applying forof loop on objects won't work 

const myObject = {
    'game1': 'NFS',
    'game2': 'GTA',
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// ------------------------------------------------------------------------------
// *** Looping Objects with For In Loop 

const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'ruby',
    py : 'python'

}

for (const key in myObj) {
    // console.log(`${key} shorcut for ${myObj[key]}`)
    
}


// ------------------------------------------------------------------------------
// Looping Arrays with For In Loop 

const programming = ['Java', 'Cpp', 'Python', 'C', 'Ruby']
for (const key in programming) {
    // console.log(programming[key]);
}
// ------------------------------------------------------------------------------

// *** FOR EACH Loop in array 

// syntax of forEach in array :
// array_name.forEach( function(){})
//  first we call the array then use .forEach bcuz forEach is a bydefault property of array 
// then we return a function callback. (callback function won't have a name)
// used a parameter within ()

const coding = ['Java', 'Cpp', 'Python', 'C', 'Ruby', 'JavaScript']

// normal foreach using function 
coding.forEach( function (val){
    // console.log(val);
})

// foreach using this function 
coding.forEach( (val) => {
    // console.log(val);
})

// Referencing a function 
function printMe (item){
    console.log(item);
}

// coding.forEach(printMe) //Notice we gave a refernce of the function printMe, we didn't call the function printMe()

// other important parameters 
coding.forEach( (item, index, array) => {
    // console.log(item, index, array);
})

// ------------------------------------------------------------------------------
// Earlier at the begining we discussed some scenarios 
// [{}, {}, {}]

// using forEach in array of Objects , example :
const myCoding = [
    {
        languageName: "Python",
        langaugaeFileName: "py"
    },
    {
        languageName: "Java",
        langaugaeFileName: "java"
    },
    {
        languageName: "JavaScript",
        langaugaeFileName: "js"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})